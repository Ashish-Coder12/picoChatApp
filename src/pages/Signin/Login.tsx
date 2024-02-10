import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity, Dimensions, TextInput } from 'react-native'
import React, { ReactElement, useState } from 'react'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Login = ():ReactElement => {
    const [selected,setSelected] = useState("SignIn")

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.slider}>
        <TouchableOpacity onPress={() => setSelected("SignIn")} style={selected == "SignIn" ? [styles.TouchableArea,styles.selected]:styles.TouchableArea}><Text style={selected == "SignIn" ? {color:'white',fontWeight:'bold',fontSize:15}:{color:'#584CD7',fontWeight:'bold',fontSize:15}}>Sign In</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => setSelected("SignUp")} style={selected == "SignUp" ? [styles.TouchableArea,styles.selected]:styles.TouchableArea}><Text style={selected == "SignUp" ? {color:'white',fontWeight:'bold',fontSize:15}:{color:'#584CD7',fontWeight:'bold',fontSize:15}}>Sign Up</Text ></TouchableOpacity>
      </View>
      {selected == "SignIn" ? 
      <View>
        <View style={{height:windowHeight*0.7}}>
            <Text style={styles.Header}>Sign In</Text>
            <Text style={styles.label}>Username</Text>
            <TextInput placeholder='Enter your username' style={styles.inputbox} />
            <Text style={styles.label}>Password</Text>
            <TextInput placeholder='Password' style={styles.inputbox} />
        </View>
        <TouchableOpacity style={styles.button}>
            <Text style={{color:'white',fontWeight:'bold',fontSize:15}}>Login</Text>
        </TouchableOpacity>
      </View>
      :
      <View>
        <View style={{height:windowHeight*0.7}}>
            <Text style={styles.Header}>Sign Up</Text>
            <Text style={styles.label}>Username</Text>
            <TextInput placeholder='Enter your username' style={styles.inputbox} />
            <Text style={styles.label}>Email</Text>
            <TextInput placeholder='Enter your Email' style={styles.inputbox}  />
            <Text style={styles.label}>Password</Text>
            <TextInput placeholder='Password' style={styles.inputbox} />
        </View>
        <TouchableOpacity style={styles.button}>
            <Text style={{color:'white',fontWeight:'bold',fontSize:15}}>Login</Text>
        </TouchableOpacity>
        </View>
      }
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
    Header:{
        fontWeight:'bold',
        fontSize:25,
        marginHorizontal:30
    },
    label:{
        marginTop:30,
        marginHorizontal:30,
        color:'#454545',
        fontWeight:'bold',
    },
    inputbox:{
      marginHorizontal:30,
      borderWidth:1,  
      borderRadius:10,
      borderColor:'#a3a3a3',
      height:45,
      fontSize:16,
      paddingHorizontal:10,
      marginTop:10
    },
    button:{
        backgroundColor:'#584CD7',
        height:50,
        marginHorizontal:30,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
    },
    slider:{
        flexDirection:'row',
        alignItems:'center',
        width:windowWidth-60,
        backgroundColor:'#F2F2F2',
        height:50,
        marginHorizontal:30,
        borderRadius:25,
        marginVertical:20
    },
    TouchableArea:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        height:50,
        borderRadius:25,
    },
    selected:{
        backgroundColor:'#584CD7'
    }
})