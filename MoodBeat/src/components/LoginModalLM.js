import React, { useState } from 'react';
import { Image, StyleSheet, View, Text, Modal, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import VerificationScreenLM from '../components/VerificationScreenLM';

const LoginModalLM = ({ visible, onClose }) => {
  const navigation = useNavigation();
  const [isForgotPasswordModalVisible, setForgotPasswordModalVisible] = useState(false);

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  const handleForgotPasswordPress = () => {
    setForgotPasswordModalVisible(true);
  };

  const handleVerificationScreenClose = () => {
    setForgotPasswordModalVisible(false);
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible || isForgotPasswordModalVisible}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        {isForgotPasswordModalVisible ? (
          <VerificationScreenLM onClose={handleVerificationScreenClose} />
        ) : (
          <>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeIcon}>X</Text>
            </TouchableOpacity>

            <View style={styles.logo}>
              <Image source={require('../../assets/icons/logoPurple.png')} />
            </View>

            <View style={styles.loginTitle}>
              <Text style={styles.loginTitleText}>Log In</Text>
            </View>

            <View style={styles.formContainer}>
              <TextInput placeholder="Username" style={styles.input} placeholderTextColor={'black'} />
              <TextInput placeholder="Password" secureTextEntry style={styles.input} placeholderTextColor={'black'} />
              <TouchableOpacity onPress={handleForgotPasswordPress}>
                <Text style={styles.forgotPasswordLink}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={() => navigateToScreen("ProfileScreenDM")}>
              <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
          </>
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
      backgroundColor: 'white',
      height: '95%',
      width:'100%',
      flex: 1,
      position: 'absolute',
      top: '15%',
    borderRadius: 20,
      alignItems: 'center',
    },
  closeButton: {
    width: '12%',
    height: '8%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: '3%',
    top: 12,
    },
  closeIcon: {
    color: '#43357A',
    fontSize: 30,
  },
  logo: {
    width: '12%',
    height: '8%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: '3%',
    top: 12,
  },
  loginTitle: {
    height: "20%",
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '10%',
  },
  loginTitleText: {
    textAlign: 'center',
    justifyContent: 'center',
    fontFamily: "BarlowCondensed_400Regular",
    color: '#43357A',
    fontSize: 30,
  },
  formContainer: {
    height: "20%",
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '30%',
  },
  input: {
    borderRadius: 10,
    width: '80%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  loginButton: {
    backgroundColor: '#43357A',
    padding: 10,
    borderRadius: 10,
    width: '65%',
    height: '7%',
    alignItems: 'center',
    margin: 12,
    justifyContent: 'center',
    position: 'absolute',
    bottom: '35%',
  },
  buttonText: {
    color: '#FFFFFC',
    fontSize: 20,
    fontFamily: "BarlowCondensed_400Regular",
}
}
)
export default LoginModalLM;
