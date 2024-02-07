import { Image, StyleSheet, Text, View } from 'react-native'
import React, { FC, ReactElement } from 'react'


const dummyImage = "https://img.freepik.com/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148138.jpg?size=626&ext=jpg&ga=GA1.1.1448711260.1707177600&semt=ais"


interface HeaderProps {
    imageurl: string
    lastMessage: string
    username: string
    colors: string
    time: string
    type: string
}


const Header:FC<HeaderProps> = ({imageurl,lastMessage,username,colors,time,type}):ReactElement => {
  return (
    <View style={styles.Header}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image source={{uri:imageurl}} style={type== "Friends" ? styles.imageurl2 : styles.imageurl} />
            <View style={{marginLeft:10}}>
                <Text style={{fontSize:16,color:colors}}>{username}</Text>
                <Text style={{fontSize:10,color:colors}}>{lastMessage}</Text>
            </View>
        </View>
        <Text>{time}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    imageurl:{
        width:50,
        height:50,
        borderRadius:30,
        marginLeft:10,
        paddingVertical:10
    },
    imageurl2:{
        width:70,
        height:70,
        borderRadius:40,
        marginLeft:10,
        marginVertical:5
    },
    Header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    }
})