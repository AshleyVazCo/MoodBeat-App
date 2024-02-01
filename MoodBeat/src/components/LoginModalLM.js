

import React from 'react';
import { StyleSheet, View, Text, Modal, TouchableOpacity} from 'react-native';

const LoginModalLM = ({ visible, onClose }) => {
  return (
      <Modal
          animationType="slide"
          transparent={true}
          visible={visible}
          onRequestClose={onClose}
      >
      <View style = {styles.container}>
        {/* Your login modal content */}
        <Text>Login Modal</Text>
        <TouchableOpacity onPress={onClose}>
          <Text>X</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '95%',
        width:'100%',
        flex: 1,
        position: 'absolute',
        top:'15%',
    }
    
}
)
export default LoginModalLM;
