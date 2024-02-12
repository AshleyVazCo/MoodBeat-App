import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Text, Modal, TouchableOpacity, Image } from 'react-native';
import SetupProfileModalDM from './SetupProfileModalDM';

const SignUpModalLM = ({ visible, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [showSetupProfileModal, setShowSetupProfileModal] = useState(false);

  const handleSignUpPress = () => {
    if (!isFormValid) {
      alert('Please fill out all fields correctly');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    setShowSetupProfileModal(true);
  };

  const validateForm = () => {
    setIsFormValid(
      fullName.trim() !== '' &&
      validateEmail(email) &&
      password.trim() !== '' &&
      confirmPassword.trim() !== ''
    );
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSetupProfileModalClose = () => {
    setShowSetupProfileModal(false);
    onClose(); // Close the SignUpModalLM as well, if needed
  };

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible && !showSetupProfileModal}
        onRequestClose={onClose}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.headerContainer}>
              <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                <Text style={styles.closeButtonText}>X</Text>
              </TouchableOpacity>
              <Image
                style={styles.image}
                source={require('../../assets/icons/logoWhite.png')}
              />
            </View>
            <View style={styles.signupTitle}>
              <Text style={styles.confirmsignupTitle}>Sign up</Text>
            </View>
            <View style={styles.formContainer}>
              <TextInput
                placeholder="Full Name"
                style={styles.input}
                placeholderTextColor={'#909090'}
                value={fullName}
                onChangeText={(text) => {
                  setFullName(text);
                  validateForm();
                }}
              />
              <TextInput
                placeholder="Email"
                style={styles.input}
                placeholderTextColor={'#909090'}
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                  validateForm();
                }}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.input}
                placeholderTextColor={'#909090'}
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  validateForm();
                }}
              />
              <TextInput
                placeholder="Confirm Password"
                secureTextEntry
                style={styles.input}
                placeholderTextColor={'#909090'}
                value={confirmPassword}
                onChangeText={(text) => {
                  setConfirmPassword(text);
                  validateForm();
                }}
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.signUpButton, !isFormValid && styles.disabledButton]}
                onPress={handleSignUpPress}
                disabled={!isFormValid}>
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {showSetupProfileModal && (
        <SetupProfileModalDM
          visible={showSetupProfileModal}
          onClose={handleSetupProfileModalClose}
        />
      )}
    </>
  );
};


const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    height: 760,
    width: 380,
    backgroundColor: '#26282C',
    padding: 20,
    borderRadius: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  closeButton: {
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#CA9CE1',
    fontSize: 24,
  },
Title: {
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
  color: '#909090',
  fontSize: 30,
},
formContainer: {
  height: "40%",
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
},
input: {
  borderRadius: 10,
  width: '80%',
  height: 40,
  margin: 12,
  borderWidth: 1,
  padding: 10,
  borderColor: '#909090',
  color: '#909090'
},
buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    },
  signUpButton: {
    backgroundColor: '#4F4F4F',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    top: 60,
    width: 200,
  },
  buttonText: {
    color: '#CA9CE1',
    fontSize: 16,
  },
    signupTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  confirmsignupTitle: {
    textAlign: 'center',
    fontFamily: "BarlowCondensed_400Regular",
    color: '#CA9CE1',
    fontSize: 30,
  },
})

export default SignUpModalLM;