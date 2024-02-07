import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Chat from './pages/Chat'
import Friends from './pages/Friends'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const Main = () => {
  return (
    <View style={{flex:1}}>
        <NavigationContainer >
            <Stack.Navigator initialRouteName="Friends" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Friends" component={Friends} />
                <Stack.Screen name="Chat" component={Chat} />
            </Stack.Navigator>
        </NavigationContainer>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({})