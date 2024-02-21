import React, { useState } from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

const SetupProfileModalDM = ({ isVisible, onClose }) => {
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleUsernameChange = (text) => {
    // Validate the username with specified requirements
    const isValid = validateUsername(text);

    if (!isValid) {
      setUsernameError("Invalid username. Please check the requirements.");
    } else {
      setUsernameError('');
    }
    setUsername(text);
  };

  const validateUsername = (username) => {
    const isValidFormat = /^[a-zA-Z0-9_]+$/.test(username);
    const isValidLength = username.length >= 6;

    return isValidFormat && isValidLength;
  };

  const requirementsText = "Username must be at least 6 characters long and can only contain letters, numbers, and underscores.";

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const hideDatepicker = () => {
    setShowDatePicker(false);
  };

  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setDateOfBirth(selectedDate);
      hideDatepicker();
    }
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
              source={require('../../assets/icons/logoWhite.png')}
            />
          </View>
          <View style={styles.formContainer}>
            {/* Username TextInput */}
            <TextInput
              placeholder="Username"
              style={styles.input}
              placeholderTextColor={'#909090'}
              value={username}
              onChangeText={handleUsernameChange}
            />
            <Text style={styles.requirementsText}>{requirementsText}</Text>
            {/* Display error message if username is invalid */}
            {usernameError !== '' && (
              <Text style={styles.errorText}>{usernameError}</Text>
            )}
            <TouchableOpacity onPress={showDatepicker}>
              <Text style={styles.label}>Date of Birth</Text>
              <Text>{dateOfBirth.toDateString()}</Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={dateOfBirth}
                mode="date"
                display="spinner"
                onChange={handleDateChange}
              />
            )}
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.signupButton} onPress={onClose}>
              {/* Close the modal when Sign up button is pressed */}
              <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>
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
  formContainer: {
    marginTop: 20,
    width: '100%',
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
  requirementsText: {
    color: '#909090',
    fontSize: 14,
    marginTop: 5,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
    },
  label: {
    color: '#909090',
    borderRadius: 10,
    width: 270,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#909090',
  },
  datePicker: {
    width: '80%',
      marginTop: 5,
    color: '#909090'
    },
      buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  signupButton: {
    backgroundColor: '#4F4F4F',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#CA9CE1',
    fontSize: 16,
  },
});

export default SetupProfileModalDM;
