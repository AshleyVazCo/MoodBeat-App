import React from "react";
import { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts, BarlowCondensed_400Regular } from '@expo-google-fonts/barlow-condensed';
import LoginModalLM from "../components/LoginModalLM";
import SignUpModalLM from "../components/signUpModalLM";
import { useNavigation } from "@react-navigation/native";




const LoginScreenLM = () => {

    const navigation = useNavigation();

    const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
    };
    
    const [fontsLoaded] = useFonts({
        BarlowCondensed_400Regular,
    });

    const [loginModalVisible, setLoginModalVisible] = useState(false);
    const [signUpModalVisible, setSignUpModalVisible] = useState(false);

    if (!fontsLoaded) {
        return null;
    }

    

    return (
        <SafeAreaView style = {styles.container}>
            <ImageBackground source={require('../../assets/images/loginBackground_Light.png')} style={styles.background}>
                
                
                <TouchableOpacity style={styles.toggleButton} onPress={() => navigateToScreen("LoginScreenDM")}>
                    <Image source={require('../../assets/icons/nightModeIcon.png')} >
                    </Image>
                </TouchableOpacity>

                {/*LOGO */}
                <View style={styles.logo}>
                    <Image  source={require('../../assets/icons/bigLogo_Light.png')}></Image>
                </View>

                  {/* Login and SignUp Buttons */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.loginButton} onPress={() => setLoginModalVisible(true)}>
                        <Text style = {styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signUpButton}onPress={() => setSignUpModalVisible(true)}>
                        <Text style = {styles.buttonText}>Sign up</Text>
                    </TouchableOpacity>
                </View>

                <LoginModalLM visible={loginModalVisible} onClose={() => setLoginModalVisible(false)} />
                <SignUpModalLM visible={signUpModalVisible} onClose={() => setSignUpModalVisible(false)} />
                
                <View style={styles.loginDisclaimer}>
                    <Text style={styles.disclaimerText}>By logging or signing up into MoodBeat, you authorize the app to use any data that you may provide</Text>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    background: {
        flex: 1,
        alignItems: 'center',
    },
    toggleButton: {
        width: '10%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: '5%',
    },
    logo: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '15%',
    },
    loginDisclaimer: {
        width: '90%',
        position: 'absolute',
        bottom: 10,        
    },
    disclaimerText: {
        textAlign: 'center',
        fontFamily: "BarlowCondensed_400Regular",
        color: '#43357A',
        fontSize: 17,
    },
    buttonContainer : {
        width: '100%',
        height: '50%',
        position: 'absolute',
        top: '40%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center', 
    },
    loginButton: {
        backgroundColor: '#26282C',
        padding: 10,
        borderRadius: 10,
        width: '65%',
        height:'12%',
        alignItems: 'center',
        margin: 12,
        justifyContent: 'center'
    },
    signUpButton: {
        backgroundColor: '#7700E6',
        padding: 10,
        borderRadius: 10,
        width: '65%',
        height: '12%',
        alignItems: 'center',
        margin: 7,
        justifyContent: 'center',
    },
    buttonText: {
        color: '#FFFFFC',
        fontSize: 20,
        fontFamily: "BarlowCondensed_400Regular",
    }

})

export default LoginScreenLM;