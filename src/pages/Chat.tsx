import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Height =  Dimensions.get('window').height;
const Width =  Dimensions.get('window').width;
const Chat = () => {
  return (
    <View style={styles.BgColor}>
      <Text>Chat</Text>
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({
    BgColor:{
        backgroundColor:'#584CD7',
        flex:1,
        height:Height,
        width:Width
    }
})