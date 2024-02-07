import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Header from '../components/Header';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const dummyImage = "https://img.freepik.com/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148138.jpg?size=626&ext=jpg&ga=GA1.1.1448711260.1707177600&semt=ais"

const Friends = ({navigation}) => {
    const [selected,setSelected] = React.useState("Chats")
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}} >
        <ScrollView >
            <View style={styles.Header}>
                <View>
                    <Text style={{fontWeight:'bold',fontSize:12,color:'grey'}}>Hello</Text>
                    <Text style={{fontWeight:'bold',fontSize:25,color:'#584CD7'}}>Johan</Text>
                </View>
            </View>
            <View style={styles.slider}>
                <TouchableOpacity onPress={() => setSelected("Chats")} style={selected == "Chats" ? [styles.TouchableArea,styles.selected]:styles.TouchableArea}><Text style={selected == "Chats" ? {color:'white',fontWeight:'bold',fontSize:15}:{color:'#584CD7',fontWeight:'bold',fontSize:15}}>All Chats</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => setSelected("Profile")} style={selected == "Profile" ? [styles.TouchableArea,styles.selected]:styles.TouchableArea}><Text style={selected == "Profile" ? {color:'white',fontWeight:'bold',fontSize:15}:{color:'#584CD7',fontWeight:'bold',fontSize:15}}>Myprofile</Text ></TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
                    <Header 
                        type={"Friends"}
                        username={"John Doe"} 
                        lastMessage={"Online"} 
                        imageurl={dummyImage} 
                        colors={"#000"} 
                        time={"10:00 Pm"} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
                    <Header 
                        type={"Friends"}
                        username={"Alice Johnson"} 
                        lastMessage={"Busy"} 
                        imageurl={dummyImage} 
                        colors={"#000"} 
                        time={"13:15 Am"} 
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
                    <Header 
                        type={"Friends"}
                        username={"Jane Smith"} 
                        lastMessage={"Away"} 
                        imageurl={dummyImage} 
                        colors={"#000"} 
                        time={"11:30 Am"} 
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
                    <Header 
                        type={"Friends"}
                        username={"Emma Davis"} 
                        lastMessage={"Available"} 
                        imageurl={dummyImage} 
                        colors={"#000"} 
                        time={"14:20 Pm"} 
                    />
                </TouchableOpacity>
            </View>
        <StatusBar style="dark" />
        </ScrollView>
    </SafeAreaView>
  )
}

export default Friends

const styles = StyleSheet.create({
    Header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:20,
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