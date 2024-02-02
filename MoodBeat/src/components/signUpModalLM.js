import React from 'react';
import {StyleSheet, View, Text, Modal, TouchableOpacity, Image } from 'react-native';

const SignUpModalLM = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.container}>
        {/* Your signup modal content */}
        <Text>Sign Up Modal</Text>
        <TouchableOpacity onPress={onClose}>
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '95%',
        width: '100%',
        flex: 1,
        position: 'absolute',
        top: '15%',
    }
})

export default SignUpModalLM;