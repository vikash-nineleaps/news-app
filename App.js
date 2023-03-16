
import React,{useState,createContext,useContext,useEffect} from "react";
import { View,ActivityIndicator } from "react-native";
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from "./auth/Login";
import Home from "./Home";
import Signup from "./auth/Signup";
import {auth, onAuthStateChanged} from "./config/firebase"



const Stack = createNativeStackNavigator();
const AuthenticatedUserContext=createContext({});

const AuthenticatedUserProvider=({children})=>{
  const [user,setUser]=useState(null);
  return (
    <AuthenticatedUserContext.Provider value={{user,setUser}}>
      {children}
    </AuthenticatedUserContext.Provider>
  )
}



function AuthStack(){
  return (
  <Stack.Navigator defaultScreenOptions={Login} screenOptions={{headerShown:false}} >
    <Stack.Screen name="Login" component={Login}/>
    <Stack.Screen name="Signup" component={Signup}/>
  </Stack.Navigator>
  )
}


function RootNavigator() {
  const {user,setUser}=useContext(AuthenticatedUserContext);
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged(
      async authenticatedUser => {
        authenticatedUser ? setUser(authenticatedUser):setUser(null);
        setLoading(false);
      }
      );
      return ()=> unsubscribe();
  },[user]);
  if(loading){
    return(
      <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    )
  }
  return (
    <NavigationContainer >
      {user ? <Home/>:<AuthStack/>}
    </NavigationContainer >
  );
}

function App() {

  return (
    <AuthenticatedUserProvider>
    <RootNavigator />
    </AuthenticatedUserProvider>
    )
    
}
export default ()=>{
  return(<App/>)
}