import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Chat from './pages/Chat'
import Friends from './pages/Friends'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// login form page
import Login from './pages/Signin/Login'



const Stack = createNativeStackNavigator();
const Main = () => {
  const [ login ,setLogin] = useState(false)
  return (
    <View style={{flex:1}}>
        <NavigationContainer >
            {login ? <MainStack /> : <SigninStack /> }
        </NavigationContainer>
    </View>
  )
}


const MainStack = () => {
  return(
        <Stack.Navigator initialRouteName="Friends" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Friends" component={Friends} />
            <Stack.Screen name="Chat" component={Chat} />
        </Stack.Navigator>
    )
}
const SigninStack = () => {
  return(
        <Stack.Navigator initialRouteName="Friends" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}

export default Main

const styles = StyleSheet.create({})