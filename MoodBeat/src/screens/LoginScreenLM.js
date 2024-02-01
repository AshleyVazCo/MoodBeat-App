import { StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts, BarlowCondensed_400Regular } from '@expo-google-fonts/barlow-condensed';



const LoginScreenLM = () => {

    const [fontsLoaded] = useFonts({
        BarlowCondensed_400Regular,
    });
    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView style = {styles.container}>
            <ImageBackground source={require('../../assets/images/loginBackground_Light.png')} style={styles.background}>
                
                
                <TouchableOpacity style= {styles.toggleButton}>
                    <Image source={require('../../assets/icons/nightModeIcon.png')} >
                    </Image>
                </TouchableOpacity>

                {/*LOGO */}
                <View style={styles.logo}>
                    <Image  source={require('../../assets/icons/bigLogo_Light.png')}></Image>
                </View>
                
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
        //backgroundColor: 'grey',
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
        //backgroundColor: 'red',
    },
    logo: {
        //backgroundColor: 'white',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '15%',
    },
    loginDisclaimer: {
        //backgroundColor: 'green',
        width: '90%',
        position: 'absolute',
        bottom: 10,        
    },
    disclaimerText: {
        textAlign: 'center',
        fontFamily: "BarlowCondensed_400Regular",
        color: '#43357A',
        fontSize: 17,
    }

})

export default LoginScreenLM;