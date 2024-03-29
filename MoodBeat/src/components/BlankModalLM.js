import React, { useState } from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity } from "react-native";
const BlankModelLM = ({ isVisible, onClose }) => {

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
  closeButtonText: {
    color: '#43357A',
    fontSize: 24,
    },
    image: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
    },
});

export default BlankModelLM;