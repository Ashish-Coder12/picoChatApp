import { View, Text } from 'react-native'
import React, { FC, createContext, useEffect, useState } from 'react'
import  AsyncStorage  from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

type Props = {
    children: React.ReactNode
}

const Context:FC<Props> = ({children}) => {
    const [auth, setAuth] = useState(false)
    const [tokken,setTokken] = useState("")
    function logout(update:boolean){
        if(update == false){
            setAuth(false)
            setTokken("")
        }
    }
    async function setLogin(tokken:string) {
         await AsyncStorage.setItem('tokken', tokken);
         setAuth(true)
         setTokken(tokken)
    }
    
    async function islogedin() {
        try{
            let token = await AsyncStorage.getItem("tokken")
            if(token != null && token != ""){
                setAuth(true)
                setTokken(token)
            }else{
                setAuth(false)
                setTokken("")
            }
        }catch(e){
            console.log("login error" + e);
        }
    }

    useEffect(()=>{
        islogedin()
    },[])

  return (
    <AuthContext.Provider value={{auth,logout,setLogin}}>
      {children}
    </AuthContext.Provider>
  )
}

export default Context