import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import NewPasswordModalLM from "../components/NewPasswordModalLM";

const ConfirmationModalLM = ({ isVisible, onClose }) => {
  const [confirmationCode, setConfirmationCode] = useState('');
  const [isNewPasswordModalVisible, setNewPasswordModalVisible] = useState(false);

  const handleConfirmationCodeChange = (text) => {
    const formattedText = text.replace(/[^0-9]/g, '').slice(0, 4);
    setConfirmationCode(formattedText);
  };

  const handleContainerPress = () => {
    Keyboard.dismiss();
  };

  const handleConfirmPress = () => {
    setNewPasswordModalVisible(true);
  };

  return (
    <>
      <Modal
        transparent
        visible={isVisible && !isNewPasswordModalVisible}
        onRequestClose={onClose}
      >
        <TouchableWithoutFeedback onPress={handleContainerPress}>
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
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.sendButton} onPress={handleConfirmPress}>
                  <Text style={styles.buttonText}>Confirm</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {isNewPasswordModalVisible && (
        <NewPasswordModalLM
          isVisible={isNewPasswordModalVisible}
          onClose={() => setNewPasswordModalVisible(false)}
        />
      )}
    </>
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
      marginTop: 50,
      height: 100,
    width: 250,
    alignItems: 'center',
    left: 40,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    height: 60,
    margin: 12,
    padding: 10,
    letterSpacing: 12,
    fontSize: 40
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  sendButton: {
    backgroundColor: '#43357A',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ConfirmationModalLM;


