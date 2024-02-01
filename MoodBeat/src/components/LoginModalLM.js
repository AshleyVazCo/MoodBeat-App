

import React from 'react';
import { Image, StyleSheet, View, Text, Modal, TouchableOpacity, TextInput} from 'react-native';

const LoginModalLM = ({ visible, onClose }) => {
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
          <Image source = {require('../../assets/icons/logoPurple.png')} >
          </Image>
        </View>

        {/* Your login modal content */}
        <View style={styles.loginTitle}>
        <Text style={styles.loginTitleText}>Log In</Text>
        </View>
        
        <View style = {styles.formContainer}>
          <TextInput placeholder="Username" style={styles.input} placeholderTextColor={'black'} />
          <TextInput placeholder="Password" secureTextEntry style={styles.input} placeholderTextColor={'black'} />
        </View>
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
    color: '#43357A',
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
    padding: 10,
  }
}
)
export default LoginModalLM;
