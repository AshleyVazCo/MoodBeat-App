import React from 'react';
import { View, Text, TextInput, Modal, Button } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context"

const SignupModal = ({ isVisible, toggleModal, handleSignup }) => {
  return (
    <Modal isVisible={isVisible} onPress={toggleModal}>
      <SafeAreaView style={{ backgroundColor: 'black', padding: 20, borderRadius: 10 }}>
        <Text>Sign-Up</Text>
        <TextInput placeholder="Full Name"/>
        <TextInput placeholder="Email"/>
        <TextInput placeholder="Password" secureTextEntry />
        <TextInput placeholder="Confirm Password" secureTextEntry />
        <Button title="Signup" onPress={handleSignup} />
        <Button title="Close" onPress={toggleModal} />
      </SafeAreaView>
    </Modal>
  );
};

export default SignupModal;
