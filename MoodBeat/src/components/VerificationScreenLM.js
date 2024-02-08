import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';

const VerificationScreenLM = ({ onClose }) => {
    return (
        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <Text style={styles.closeButtonText}>X</Text>
                    </TouchableOpacity>
                    <Image
                        style={styles.image} source={require('../../assets/icons/logoPurple.png')}
                    />
                </View>
            <View style={styles.verifyTitle}>
              <Text style={styles.loginTitleText}>Verify your Information</Text>
                </View>
                <View style={styles.formContainer}>
              <TextInput placeholder="Phone Number" style={styles.input} placeholderTextColor={'black'} />
              <TextInput placeholder="Email" secureTextEntry style={styles.input} placeholderTextColor={'black'} />
            </View>
            </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
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
modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
modalContent: {
    height: 760,
    width: 380,
    backgroundColor: '#FFFFFC',
    padding: 20,
    borderRadius: 10,
    },
verifyTitle: {
    justifyContent: 'center',
    top: 20,
  },
  loginTitleText: {
    textAlign: 'center',
    justifyContent: 'center',
    fontFamily: "BarlowCondensed_400Regular",
    color: '#43357A',
    fontSize: 30,
    },
input: {
    borderRadius: 10,
    width: '80%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    },
formContainer: {
    justifyContent: 'center',
    top: 160,
    left: 25
  },
});

export default VerificationScreenLM;
