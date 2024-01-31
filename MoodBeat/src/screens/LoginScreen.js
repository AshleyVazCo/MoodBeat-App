import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity, ImageBackground } from "react-native";
import { useFonts, BarlowCondensed_400Regular } from '@expo-google-fonts/barlow-condensed';
import React, { useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context";
import LoginModal from '../components/LoginModal'
import SignupModal from "../components/SignUpModal";


const LoginScreen = () => {
    const [isLoginModalVisible, setLoginModalVisible] = useState(false);
    const [isSignupModalVisible, setSignupModalVisible] = useState(false);

    const toggleLoginModal = () => {
        setLoginModalVisible(!isLoginModalVisible);
      };
    
    const toggleSignupModal = () => {
    setSignupModalVisible(!isSignupModalVisible);
 };
    const [fontsLoaded] = useFonts({
        BarlowCondensed_400Regular,
    });
    if (!fontsLoaded) {
        return null;
    }
    
    
    

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={{ uri: 'https://pbs.twimg.com/ext_tw_video_thumb/1356973712625516545/pu/img/ry0ebco4DL5gENed.jpg:large' }} style={styles.background}>
                <Text style={styles.bottomText}>
                    MoodBeat
                </Text>
                <TouchableOpacity><Text>Dark Mode</Text></TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                {/* <LoginModal isVisible={isLoginModalVisible} toggleModal={toggleLoginModal} /> */}
                <SignupModal isVisible={isSignupModalVisible} toggleModal={toggleSignupModal} />
                <Text style={styles.bottomText}>
                    By logging or signing up into MoodBeat, you authorize the app to use any data that you may provide
                </Text>
                
                
            </ImageBackground>
        </SafeAreaView>
    );
};   

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
       
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        alignItems:'center',
    },
    btn: {
        alignItems: 'center',
        width: '70%',
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#7700E6',
        marginTop:20,
        marginBottom: 10,
        justifyContent: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontFamily: "BarlowCondensed_400Regular",
        fontSize: 17,
    },
    bottomText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontFamily: "BarlowCondensed_400Regular",
        fontSize: 17,
    }
});

export default LoginScreen;