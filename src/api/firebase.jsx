import { getApp, initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut} from "firebase/auth"
import {set, ref, getDatabase, get} from 'firebase/database';
import {v4 as uuid} from 'uuid'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    databaseURL: process.env.REACT_APP_FIREBASE_DB_URL
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(); 
const database = getDatabase(app);

//자동로그인 방지
provider.setCustomParameters({
    prompt: 'select_account'
})
//구글 로그인
export async function googleLogin(){
    try{
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log(user)
        return user;
    }catch(error){
        console.error(error)
    }
}
//구글 로그아웃
export async function googleLogOut(){
    try{
        await signOut(auth);
    }catch(error){
        console.error(error);
    }
}

//로그인시 새로고침해도 로그인을 계속 유지
export function onUserState(callback){
    onAuthStateChanged(auth, async(user)=>{
        if(user){
            try{
                const updateUser = await adminUser(user)
                callback(updateUser)
            }catch(error){
                console.error(error);
            }
        }else{
            callback(null)
        }
    })
}

async function adminUser(user){
    try{
        const snapshot = await get(ref(database, 'admin'));
        if(snapshot.exists()){
            const admins = snapshot.val();
            const isAdmin = admins.includes(user.email);
            return {...user, isAdmin}
        }
        return user
    }catch(error){
        // console.error(error)
    }
}

//상품을 database에 업로드
export async function addProducts(product, image){
    const id = uuid()
    console.log(id)
    return set(ref(database, `products/${id}`),{
        ...product,
        id,
        image,
    })
}

//이미지들 database에 업로드
export async function addImages(product, image){
    const id = uuid()
    console.log(id)
    return set(ref(database, `images/${id}`),{
        ...product,
        id,
        image,
    })
}

//database에 있는 images에 있는 이미지들 가져오기
export async function getImages(){

    const snapshot = await get(ref(database, 'images'));
    if(snapshot.exists()){
        return Object.values(snapshot.val())
    }else{
        return[]
    }
}


//database에 있는 상품을 가져오기
export async function getProducts(){
    const snapshot = await get(ref(database, 'products'));
    if(snapshot.exists()){
        return Object.values(snapshot.val())
    }else{
        return[]
    }
}

//카테고리 상품 가져오기
export async function getCategoryProduct(category){
    return get(ref(database, 'products')).then((snapshot)=>{
        if(snapshot.exists()){

            const allProducts = Object.values(snapshot.val());
            const filterProducts = allProducts.filter((product)=>product.category === category);
            return filterProducts
        }
        return[];
    })
}

//상품 검색
export async function searchProducts(query){
    try{
        const dbRef = ref(database, 'products');
        const snapshot = await get(dbRef);
        if(snapshot.exists()){
            const data = snapshot.val();
            const allProducts = Object.values(data);
            
            if(allProducts.length === 0){
                return[]
            }
            const matchProducts = allProducts.filter((product)=>{
                const itemAllergic = product.allergic;
                return itemAllergic.includes(query)
            })

            return matchProducts
        }else{
            return []
        }
    }catch(error){
        
    }
}