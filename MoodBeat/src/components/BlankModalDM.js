import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const BlankModelDM = ({ isVisible, onClose }) => {


return (
  <Modal
    transparent
    visible={isVisible}
    onRequestClose={onClose}
  >
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
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
closeButtonText: {
  color: '#CA9CE1',
  fontSize: 24,
},
});

export default BlankModelDM;