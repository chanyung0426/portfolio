import { initializeApp } from "firebase/app";
import {set, ref, getDatabase} from 'firebase/database';
import {v4 as uuid} from 'uuid'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    databaseURL: process.env.REACT_APP_FIREBASE_DB_URL
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

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