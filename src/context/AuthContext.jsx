import React, { createContext, useContext, useEffect, useState } from 'react'
import { onUserState, googleLogin, googleLogOut } from "../api/firebase";

const AuthContext = createContext()
export function AuthContextProvider({children}) {
    const [user, setUser] = useState();
    const [unSubScribe, setUnSubScribe] = useState();

    useEffect(()=>{
        const userChange = (newUser)=>{
            setUser(newUser);
        }
        
        const unSubScribeFunc = onUserState(userChange);
        setUnSubScribe(()=>unSubScribeFunc);
        return()=>{
            if(unSubScribeFunc){
                unSubScribeFunc()
            }
        }
    },[])

    return (
        <AuthContext.Provider value={{user, googleLogin, googleLogOut, uid:user && user.uid}}>
            {children}
        </AuthContext.Provider>
    )
}
export function useAuthContext(){
    return useContext(AuthContext)
}