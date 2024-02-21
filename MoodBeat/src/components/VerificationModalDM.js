import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import ConfirmationModalDM from '../components/ConfirmationModalDM';

const VerificationModalDM = ({ onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');

  const handlePhoneNumberChange = (text) => {
    const numericText = text.replace(/[^0-9]/g, '');
    setPhoneNumber(numericText);
  };

  const validatePhoneNumber = () => {
    return phoneNumber.length === 10;
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const generateVerificationCode = () => {
    // Generate a random 4-digit code
    return Math.floor(1000 + Math.random() * 9000).toString();
  };

  const handleVerification = () => {
    if (validatePhoneNumber() && validateEmail()) {
      setPhoneNumberError('Please enter either a phone number or an email, not both');
      setEmailError('Please enter either a phone number or an email, not both');
    } else if (validatePhoneNumber()) {
      console.log('Valid phone number:', phoneNumber);
      setPhoneNumberError('');
      setEmailError('');
      sendVerificationCode();
    } else if (validateEmail()) {
      console.log('Valid email:', email);
      setPhoneNumberError('');
      setEmailError('');
      sendVerificationCode();
    } else {
      setPhoneNumberError('Please enter a valid 10-digit phone number');
      setEmailError('Please enter a valid email address');
    }
  };

  const sendVerificationCode = () => {
    // Generate and send the verification code
    const code = generateVerificationCode();
    setVerificationCode(code);

    // Implement your logic to send the code via SMS or email here
    console.log('Sending verification code:', code);
    
    // Show the confirmation modal after sending the code
    setShowConfirmationModal(true);
  };

  const handleCloseConfirmationModal = () => {
    setShowConfirmationModal(false);
    onClose();
  };

  return (
    <View style={styles.modalContainer}>
      {showConfirmationModal ? (
        <ConfirmationModalDM
          onClose={handleCloseConfirmationModal}
          verificationCode={verificationCode}
        />
      ) : (
        <View style={styles.modalContent}>
          <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <Image style={styles.image} source={require('../../assets/icons/logoWhite.png')} />
          </View>
          <View style={styles.verifyTitle}>
            <Text style={styles.titleText}>Verify your Information</Text>
          </View>
          <View style={styles.formContainer}>
            <TextInput
              placeholder="Phone Number"
              style={styles.input}
              placeholderTextColor={'#909090'}
              keyboardType="numeric"
              value={phoneNumber}
              onChangeText={handlePhoneNumberChange}
            />
            {phoneNumberError !== '' && (
              <Text style={styles.errorText}>{phoneNumberError}</Text>
            )}
            <View style={styles.orContainer}>
              <Text style={styles.orText}>or</Text>
            </View>
            <TextInput
              placeholder="Email"
              style={styles.input}
              placeholderTextColor={'#909090'}
              value={email}
              onChangeText={handleEmailChange}
            />
            {emailError !== '' && (
              <Text style={styles.errorText}>{emailError}</Text>
            )}
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.sendButton} onPress={handleVerification}>
              <Text style={styles.buttonText}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
  flex: 1,
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
  closeButtonText: {
    color: '#CA9CE1',
    fontSize: 24,
    },
    image: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
    },
verifyTitle: {
    justifyContent: 'center',
    top: 20,
  },
  titleText: {
    textAlign: 'center',
    justifyContent: 'center',
    fontFamily: "BarlowCondensed_400Regular",
    color: '#CA9CE1',
    fontSize: 30,
    },
input: {
    borderRadius: 10,
    width: '80%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#909090',
    color: '#909090',
    },
formContainer: {
    alignItems: 'center',
    top: 120,
    },
sendButton: {
    backgroundColor: '#4F4F4F',
    padding: 10,
    borderRadius: 10,
    width: '65%',
    alignItems: 'center',
    justifyContent: 'center',
    },
buttonText: {
    color: '#CA9CE1',
    fontSize: 20,
    fontFamily: "BarlowCondensed_400Regular",
    },
buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 150,
    },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
    },
orContainer: {
    alignItems: 'center',
    },
    orText: {
      color: '#909090'
  }
});

export default VerificationModalDM;
