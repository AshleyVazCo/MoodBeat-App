import React from "react";
import { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginModalDM from "../components/LoginModalDM";
import SignUpModalDM from "../components/signUpModalDM";
import { useNavigation } from "@react-navigation/native";



const LoginScreenDM = () => {

    const navigation = useNavigation();

    const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
    };

    const [loginModalVisible, setLoginModalVisible] = useState(false);
    const [signUpModalVisible, setSignUpModalVisible] = useState(false);

    if (!fontsLoaded) {
        return null;
    }

    

    return (
        <SafeAreaView style = {styles.container}>
            <ImageBackground source={require('../../assets/images/loginBackground.png')} style={styles.background}>
                
                
                <TouchableOpacity style={styles.toggleButton} onPress={() => navigateToScreen("LoginScreenLM")}>
                    <Image source={require('../../assets/icons/lightModeIcon.png')} >
                    </Image>
                </TouchableOpacity>

                {/*LOGO */}
                <View style={styles.logo}>
                    <Image  source={require('../../assets/icons/bigLogo_Dark.png')}></Image>
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

                <LoginModalDM visible={loginModalVisible} onClose={() => setLoginModalVisible(false)} />
                <SignUpModalDM visible={signUpModalVisible} onClose={() => setSignUpModalVisible(false)} />
                
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
        fontFamily: "BarlowCondensed-Regular",
        color: '#CA9CE1',
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
        backgroundColor: '#FFFFF5',
        padding: 10,
        borderRadius: 10,
        width: '65%',
        height:'12%',
        alignItems: 'center',
        margin: 12,
        justifyContent: 'center'
    },
    signUpButton: {
        backgroundColor: '#CA9CE1',
        padding: 10,
        borderRadius: 10,
        width: '65%',
        height: '12%',
        alignItems: 'center',
        margin: 7,
        justifyContent: 'center',
    },
    buttonText: {
        color: '#7700E6',
        fontSize: 20,
        fontFamily: "BarlowCondensed-Regular",
    }

})

export default LoginScreenDM;