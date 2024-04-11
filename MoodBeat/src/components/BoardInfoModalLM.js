import React from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import ThreeTabMenuLM from "./ThreeTabMenuLM";

const BoardInfoModalLM = ({ isVisible, onClose }) => {
  return (
    <Modal transparent visible={isVisible} onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.icons}>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <View style={styles.logo}>
              <Image source={require('../../assets/icons/logoPurple.png')} />
            </View>
          </View>
          <ThreeTabMenuLM onClose={onClose} />
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
    backgroundColor: '#FFFFFC',
    padding: 20,
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  closeButtonText: {
    color: '#43357A',
    fontSize: 24,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});

export default BoardInfoModalLM;