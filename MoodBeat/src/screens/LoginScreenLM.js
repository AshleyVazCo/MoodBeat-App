import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreenLM = () => {
    return (
        <SafeAreaView style = {styles.container}>
            <ImageBackground style = {styles.background}>
                <TouchableOpacity style= {styles.toggleButton}>
                    <Image source={require('../../assets/icons/nightModeIcon.png')} >
                    </Image>
                </TouchableOpacity>
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
        backgroundColor: 'grey',
        flex: 1,
    },
    toggleButton : {
        backgroundColor: 'red',
    }
})

export default LoginScreenLM;