import React from 'react';
import { Image, StyleSheet, View, Text, Modal, TouchableOpacity, TextInput} from 'react-native';

const LoginModalDM = ({ visible, onClose }) => {
  return (
      <Modal
          animationType="slide"
          transparent={true}
          visible={visible}
          onRequestClose={onClose}
      >
      <View style={styles.container}>
        
        <TouchableOpacity onPress={onClose} style = {styles.closeButton}>
          <Text style = {styles.closeIcon}>X</Text>
        </TouchableOpacity>

        <View style = {styles.logo}>
          <Image source = {require('../../assets/icons/logoWhite.png')} >
          </Image>
        </View>

        {/* Your login modal content */}
        <View style={styles.loginTitle}>
        <Text style={styles.loginTitleText}>Log In</Text>
        </View>
        
        <View style = {styles.formContainer}>
          <TextInput placeholder="Username" style={styles.input} placeholderTextColor={'#909090'} />
          <TextInput placeholder="Password" secureTextEntry style={styles.input} placeholderTextColor={'#909090'} />
          <Text>Forgot Password?</Text>
        </View>

        <TouchableOpacity style={styles.loginButton} >
          <Text style = {styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#26282C',
      height: '95%',
      width:'100%',
      flex: 1,
      position: 'absolute',
      top: '15%',
    borderRadius: 20,
      alignItems: 'center',
    },
  closeButton: {
   // backgroundColor: 'red',
    width: '12%',
    height: '8%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: '3%',
    top: 12,
    },
  closeIcon: {
    color: '#CA9CE1',
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
    //backgroundColor: 'red',
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
    color: '#909090',
    fontSize: 30,
  },
  formContainer: {
    //backgroundColor: 'purple',
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
    borderColor: '#909090',
    padding: 10,
  },
  loginButton: {
    backgroundColor: '#4F4F4F',
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
    color: '#CA9CE1',
    fontSize: 20,
    fontFamily: "BarlowCondensed_400Regular",
}
}
)
export default LoginModalDM;