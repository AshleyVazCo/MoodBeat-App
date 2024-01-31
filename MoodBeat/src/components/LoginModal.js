/*import React from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';

const LoginModal = () => {
    return (
        <View>
            <TouchableOpacity style={styles.button}>

            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    button: Margin
});


export default LoginModal;
*/
import React from 'react';
import { View, Text, TextInput, Button, Modal } from 'react-native';


const LoginModal = ({ isVisible, toggleModal, handleLogin }) => {
    return (
    <Modal isVisible={isVisible} onPress={toggleModal}>
      <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
        <Text>Login Modal Content</Text>
        <TextInput placeholder="Username" />
        <TextInput placeholder="Password" secureTextEntry />
        <Button title="Login" onPress={handleLogin} />
        <Button title="Close" onPress={toggleModal} />
      </View>
    </Modal>
    
  );
};

export default LoginModal;

