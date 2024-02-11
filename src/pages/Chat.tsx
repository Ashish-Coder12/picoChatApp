import { Dimensions, Image, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { FC, ReactElement, useEffect, useRef } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import Octicons from 'react-native-vector-icons/Octicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Header from '../components/Header'
import { StatusBar } from 'expo-status-bar'
import { NavigationProp, ParamListBase } from '@react-navigation/native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


var dummyMessage = [
    {
        sender: "Me",
        message: "Hey there!"
        },
        {
        sender: "John",
        message: "Hi!"
        },
        {
        sender: "Me",
        message: "How's your day going?"
        },
        {
        sender: "John",
        message: "Pretty good, thanks for asking. How about yours?"
        },
        {
        sender: "Me",
        message: "Not too bad, just keeping busy."
        },
        {
        sender: "John",
        message: "That's good to hear. Anything exciting happening?"
        },
        {
        sender: "Me",
        message: "Not particularly, just the usual."
        },
        {
        sender: "John",
        message: "Fair enough. Sometimes routine can be comforting."
        },
        {
        sender: "Me",
        message: "Definitely. So, anything new with you?"
        },
        {
        sender: "John",
        message: "Actually, I started a new project at work. It's pretty exciting."
        },
        {
        sender: "Me",
        message: "That sounds interesting! What's it about?"
        },
        {
        sender: "John",
        message: "It's a software development project aimed at improving our internal systems."
        },
        {
        sender: "Me",
        message: "Wow, sounds like a big undertaking. How's it going so far?"
        },
        {
        sender: "John",
        message: "It's challenging but rewarding. We're making good progress."
        },
        {
        sender: "Me",
        message: "Glad to hear it. Let me know if you need any help."
        },
        {
        sender: "John",
        message: "Thanks, I appreciate that. How about you? Any projects on your end?"
        },
        {
        sender: "Me",
        message: "Just some personal projects I've been tinkering with. Nothing too serious."
        },
        {
        sender: "John",
        message: "Still, it's cool that you're keeping busy with creative pursuits."
        },
        {
        sender: "Me",
        message: "Yeah, it's a nice way to unwind after work."
        },
        {
        sender: "John",
        message: "Absolutely. So, got any plans for the weekend?"
        },
        {
        sender: "Me",
        message: "Not yet, but I'm thinking of maybe catching up on some reading."
        },
        {
        sender: "John",
        message: "Sounds relaxing. I might go hiking if the weather's nice."
        },
        {
        sender: "Me",
        message: "That sounds like a great way to spend the weekend."
        },
        {
        sender: "John",
        message: "Yeah, I love being out in nature. It's refreshing."
        },
        {
        sender: "Me",
        message: "Definitely. Well, I hope you have a fantastic hike."
        },
        {
        sender: "John",
        message: "Thanks! And I hope you have a relaxing weekend with your books."
        },
        {
        sender: "Me",
        message: "Thanks, I will. Talk to you later!"
        },
        {
        sender: "John",
        message: "Take care!"
        },
        {
        sender: "Me",
        message: "Hey!"
        },
        {
        sender: "John",
        message: "Hi again!"
        },
        {
        sender: "Me",
        message: "How's your day going?"
        },
        {
        sender: "John",
        message: "Not bad, thanks. How about you?"
        },
        {
        sender: "Me",
        message: "Pretty good, just keeping busy."
        },
        {
        sender: "John",
        message: "That's good to hear. Anything exciting happening?"
        },
        {
        sender: "Me",
        message: "Not really, just the usual routine."
        },
        {
        sender: "John",
        message: "Sometimes routine can be comforting."
        },
        {
        sender: "Me",
        message: "Definitely. So, anything new with you?"
        },
        {
        sender: "John",
        message: "Actually, I started a new project at work. It's pretty exciting."
        },
        {
        sender: "Me",
        message: "Wow, sounds interesting! What's it about?"
        },
        {
        sender: "John",
        message: "It's a software development project aimed at improving our internal systems."
        },
        {
        sender: "Me",
        message: "That sounds like a big undertaking. How's it going so far?"
        },
        {
        sender: "John",
        message: "It's challenging but rewarding. We're making good progress."
        },
        {
        sender: "Me",
        message: "Glad to hear it. Let me know if you need any help."
        },
        {
        sender: "John",
        message: "Thanks, I appreciate that. How about you? Any projects on your end?"
        },
        {
        sender: "Me",
        message: "Just some personal projects I've been tinkering with. Nothing too serious."
        },
        {
        sender: "John",
        message: "Still, it's cool that you're keeping busy with creative pursuits."
        },
        {
        sender: "Me",
        message: "Yeah, it's a nice way to unwind after work."
        },
        {
        sender: "John",
        message: "Absolutely. So, got any plans for the weekend?"
        },
        {
        sender: "Me",
        message: "Not yet, but I'm thinking of maybe catching up on some reading."
        },
        {
        sender: "John",
        message: "Sounds relaxing. I might go hiking if the weather's nice."
        },
        {
        sender: "Me",
        message: "That sounds like a great way to spend the weekend."
        },
        {
        sender: "John",
        message: "Yeah, I love being out in nature. It's refreshing."
        },
        {
        sender: "Me",
        message: "Definitely. Well, I hope you have a fantastic hike."
        },
        {
        sender: "John",
        message: "Thanks! And I hope you have a relaxing weekend with your books."
        },
        {
        sender: "Me",
        message: "Thanks, I will. Talk to you later!"
        },
        {
        sender: "John",
        message: "Take care!"
        }
]


const dummyImage = "https://img.freepik.com/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148138.jpg?size=626&ext=jpg&ga=GA1.1.1448711260.1707177600&semt=ais"

type Props = {
    navigation: NavigationProp<ParamListBase>;
  };

const Chat:FC<Props> = ({navigation}):ReactElement => {
    const scrollViewRef = useRef(null);
    const [Messages, setMessages] = React.useState([
        {
            sender: "John",
            message: "Hello"
        }
    ])
    const [newMessage, setNewMessage] = React.useState("");


    const sendMessage = () => {
        if(newMessage.length == 0) return;
        let updatedMessages = dummyMessage
        updatedMessages.unshift({
            sender: "Me",
            message: newMessage
        })
        setNewMessage("");
        setMessages(updatedMessages);
    }

    useEffect(() => {
        const newarray = dummyMessage.reverse();
        setMessages(newarray)
    },[]);
  return (
        <SafeAreaView style={styles.BgColor}>
            <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS =="ios" ? "padding" : "height"}>

            {/* Header Area  */}
            <View style={[styles.headerArea,styles.borderBottom]}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{marginRight:10}}><Ionicons name={"arrow-back"} size={25} color="white" /></TouchableOpacity>
                    <Header type={"Chat"} username={"John Doe"} lastMessage={"Online"} imageurl={dummyImage} colors={"#fff"} time={""} />
                </View>
                <TouchableOpacity><Entypo name={"dots-three-vertical"} size={20} color="white" /></TouchableOpacity>
            </View>

            {/* Chat Area  */}
            <ScrollView  ref={scrollViewRef} style={styles.ChatArea} >
                {Messages.map((item,index) => (
                        <View key={index} style={item.sender == "Me" ? styles.MeArea : styles.OtherArea}>
                            <Text style={item.sender == "Me" ?  {color:"#7469E9"} : {color:'white'}}>{item.message}</Text>
                        </View>
                ))}
            </ScrollView>


            {/* Footer Area  */}
            <View style={styles.headerArea}>
                <View style={styles.MessageArea}>
                    <TouchableOpacity style={[styles.micButton]}><FontAwesome name={"microphone"} size={20} color="#7469E9" /></TouchableOpacity>
                    <TextInput value={newMessage} onChangeText={(text) => setNewMessage(text)} placeholder="Message" placeholderTextColor="#584CD7" style={styles.MessageInput} />
                    <TouchableOpacity style={styles.micButton}><Ionicons name={"attach"} size={20} color="#7469E9" /></TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => sendMessage()} style={styles.sendButton}><Octicons name={"paper-airplane"} size={20} color="#584CD7" /></TouchableOpacity>
            </View>
             </KeyboardAvoidingView>
             <StatusBar style="light" />

        </SafeAreaView>
  )
}

export default Chat

const styles = StyleSheet.create({
    BgColor:{
        backgroundColor:'#584CD7',
        flex:1,
        height:windowHeight,
        width:windowWidth,
    },
    borderBottom:{
        borderBottomWidth:1,
        borderBottomColor:'#9189e0',
        alignItems:'center'
    },
    headerArea:{
        flexDirection:'row',
        justifyContent:'space-between',
        height:60,
        width:windowWidth,
        paddingHorizontal:10,
    },
    ChatArea:{
        transform: [{ scaleY: -1 }],
        flex:1,
        paddingHorizontal:10,
        paddingVertical:10,
    },
    MessageArea:{
        flex:1,
        backgroundColor:'#fff',
        marginRight:10,
        borderRadius:30,
        height:40,
        flexDirection:'row',
        alignItems:'center',
    },
    sendButton:{
        backgroundColor:'#fff',
        height:40,
        width:40,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center'
    },
    micButton:{
        backgroundColor:'#fff',
        height:40,
        width:40,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
    },
    MessageInput:{
        flex:1,
        fontSize:20,
        borderLeftWidth:0.5,
        borderRightWidth:0.5,
        paddingHorizontal:5,
        borderColor:'#7469E9',
    },
    MeArea:{
        transform: [{ scaleY: -1 }],
        maxWidth:windowWidth*2/3,
        backgroundColor:'#F0F0F0',
        alignSelf:'flex-end',
        padding:10,
        marginTop:10,
        borderTopRightRadius:0,
        borderTopLeftRadius:15,
        borderBottomRightRadius:15,
        borderBottomLeftRadius:15
    },
    OtherArea:{
        transform: [{ scaleY: -1 }],
        maxWidth:windowWidth*2/3,
        marginTop:10,
        backgroundColor:'#7469E9',
        alignSelf:'flex-start',
        padding:10,
        borderTopRightRadius:15,
        borderTopLeftRadius:0,
        borderBottomRightRadius:15,
        borderBottomLeftRadius:15
    }
})