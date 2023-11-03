import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile,signInWithEmailAndPassword,signOut } from "firebase/auth";
import { auth } from "../firebase/Config";
import { getFirestore } from 'firebase/firestore';

import { createContext,useContext,useEffect,useState } from "react";
const UserContext= createContext({})



export const useUserContext=()=>{
return (useContext(UserContext))};

 export const UserContextProvider=({children}) => {
    // const navigate=useNavigate()

    const[user,setUser]=useState(null);
    const[error,setError]=useState('')

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            user ? setUser(user):setUser(null)
        console.log(user)
        console.log("user is......"+user.displayName)
                })
    },[])

    const registerUser = (email,username,password) =>{
        return createUserWithEmailAndPassword( auth,email,password )
        .then((result)=>{
            console.log('//////////////')
            return updateProfile(auth.currentUser,{
            displayName:user
        })
    })
    .then((res)=>
    console.log("Response is ............"+res),
    )
    .catch(err=>setError(err.message))
}

const loginUser = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
    .then((res)=>
    console.log("Response is ............"+res) )
    .catch(err=>setError(err.message))
}

const logoutUser=()=>{
signOut(auth)
}
    
    const contextValue={
        user,
        registerUser,
        loginUser,
        logoutUser
    }

    return(
    <UserContext.Provider value={contextValue}>
        {children}
        </UserContext.Provider>
        )}

