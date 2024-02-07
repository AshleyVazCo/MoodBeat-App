import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { appleAuth, AppleButton } from '@invertase/react-native-apple-authentication';

const YourComponent = () => {
  const onAppleButtonPress = async () => {
    try {
      // performs login request
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });

      // Get the current authentication state for AppleID
      const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);

      // Use credentialState response to ensure the user is authenticated
      if (credentialState === appleAuth.State.AUTHORIZED) {
        // User is authenticated
        console.log('Apple authentication successful');
      }
    } catch (error) {
      console.log('Apple authentication failed', error);
    }
  };

  return (
    <TouchableOpacity style={styles.apple} onPress={onAppleButtonPress}>
      <Text>Login with Apple</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  apple: {
    backgroundColor: '#000', // Customize the style as needed
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
});

export default YourComponent;
