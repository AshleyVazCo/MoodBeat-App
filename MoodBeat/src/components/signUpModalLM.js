import React from 'react';
import {TextInput, StyleSheet, View, Text, Modal, TouchableOpacity, Image } from 'react-native';

const SignUpModalLM = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.container}>

        <TouchableOpacity onPress={onClose} style = {styles.closeButton}>
          <Text style = {styles.closeIcon}>X</Text>
        </TouchableOpacity>

        <View style = {styles.logo}>
          <Image source = {require('../../assets/icons/logoPurple.png')} >
          </Image>
        </View>

        {/* Your login modal content */}
        <View style={styles.Title}>
        <Text style={styles.TitleText}>Sign Up</Text>
        </View>
        
        <View style = {styles.formContainer}>
          <TextInput placeholder="Full Name" style={styles.input} placeholderTextColor={'black'} />
          <TextInput placeholder="Username" style={styles.input} placeholderTextColor={'black'} />
          <TextInput placeholder="Password" secureTextEntry style={styles.input} placeholderTextColor={'black'} />
          <TextInput placeholder="Confirm Password" secureTextEntry style={styles.input} placeholderTextColor={'black'} />
        </View>

        <TouchableOpacity style={styles.signUpButton} >
          <Text style = {styles.buttonText}>Next</Text>
        </TouchableOpacity>
      
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
Title: {
  //backgroundColor: 'red',
  height: "10%",
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '10%',
},
TitleText: {
  textAlign: 'center',
  justifyContent: 'center',
  fontFamily: "BarlowCondensed_400Regular",
  color: '#43357A',
  fontSize: 30,
},
formContainer: {
  //backgroundColor: 'purple',
  height: "40%",
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '20%',
},
input: {
  borderRadius: 10,
  width: '80%',
  height: 40,
  margin: 12,
  borderWidth: 1,
  padding: 10,
},
signUpButton: {
  backgroundColor: '#43357A',
  padding: 10,
  borderRadius: 10,
  width: '65%',
  height: '7%',
  alignItems: 'center',
  margin: 12,
  justifyContent: 'center',
  position: 'absolute',
  bottom: '32%',
},
buttonText: {
  color: '#FFFFFC',
  fontSize: 20,
  fontFamily: "BarlowCondensed_400Regular",
}
})

export default SignUpModalLM;