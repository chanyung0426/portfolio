import { initializeApp } from "firebase/app";
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