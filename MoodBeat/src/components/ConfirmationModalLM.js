import React, { useState } from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from "react-native";

const ConfirmationModalLM = ({ isVisible, onClose }) => {
  const [confirmationCode, setConfirmationCode] = useState('');

  const handleConfirmationCodeChange = (text) => {
    const formattedText = text.replace(/[^0-9]/g, '').slice(0, 4);
    setConfirmationCode(formattedText);
  };

  return (
    <Modal
      transparent
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <Image
              style={styles.image}
          source={require('../../assets/icons/logoPurple.png')}
            />
          </View>
          <View style={styles.confirmTitle}>
            <Text style={styles.confirmTitleText}>Confirm your account</Text>
          </View>
          <View style={styles.formContainer}>
            <TextInput
              placeholder="Code"
              style={styles.input}
              placeholderTextColor="black"
              keyboardType="numeric"
              value={confirmationCode}
              onChangeText={handleConfirmationCodeChange}
              maxLength={4}
            />
          </View>
        </View>
      </View>
    </Modal>
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
    backgroundColor: '#fffffc',
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
    color: '#43357A',
    fontSize: 24,
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
  },
  confirmTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  confirmTitleText: {
    textAlign: 'center',
    fontFamily: "BarlowCondensed_400Regular",
    color: '#43357A',
    fontSize: 30,
  },
  formContainer: {
      marginTop: 20,
  },
input: {
  borderBottomWidth: 1,
  borderBottomColor: 'black', // You can change this color to the desired underline color
  height: 40,
  margin: 12,
  padding: 10,
  letterSpacing: 8, // Adjust the value to add the desired spacing between each number
},
});

export default ConfirmationModalLM;
