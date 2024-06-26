import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import VerificationModalDM from "../components/VerificationModalDM";

const LoginModalLM = ({ visible, onClose }) => {
  const navigation = useNavigation();
  const [isForgotPasswordModalVisible, setForgotPasswordModalVisible] =
    useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  const handleForgotPasswordPress = () => {
    setForgotPasswordModalVisible(true);
  };

  const handleVerificationScreenClose = () => {
    setForgotPasswordModalVisible(false);
    onClose();
  };

  //Hardcoded login for now (IT WORKS!!!!) - Need to change it to Alan's username and password since that's the profile we have in the front end
  const handleLogin = () => {
    if (username === "Alan.jpg" && password === "test1") {
      navigateToScreen("HomeDM");
      onClose();
    } else {
      Alert.alert("Login failed", "Please check your username and password");
    }
  };

  // const handleLogin = () => {
  //   if (username.trim() !== '' && password.trim() !== '') {
  //     // Perform login actions here
  //     navigateToScreen("HomeDM");
  //     onClose();
  //   } else {
  //     // Display an error message or perform other actions for empty fields
  //     alert("Please fill in both username and password.");
  //   }
  // };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible || isForgotPasswordModalVisible}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        {isForgotPasswordModalVisible ? (
          <VerificationModalDM onClose={handleVerificationScreenClose} />
        ) : (
          <>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeIcon}>X</Text>
            </TouchableOpacity>

            <View style={styles.logo}>
              <Image source={require("../../assets/icons/logoWhite.png")} />
            </View>

            <View style={styles.loginTitle}>
              <Text style={styles.loginTitleText}>Log In</Text>
            </View>

            <View style={styles.formContainer}>
              <TextInput
                placeholder="Username"
                style={styles.input}
                placeholderTextColor={"#909090"}
                value={username}
                onChangeText={setUsername}
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.input}
                placeholderTextColor={"#909090"}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={handleForgotPasswordPress}>
                <Text style={styles.forgotPasswordLink}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.loginButton}
              onPress={handleLogin}
              disabled={!username || !password}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#26282C",
    height: 760,
    width: 380,
    flex: 1,
    borderRadius: 20,
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
  },
  closeButton: {
    width: "12%",
    height: "8%",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: "3%",
    top: 12,
  },
  closeIcon: {
    color: "#CA9CE1",
    fontSize: 30,
  },
  logo: {
    width: "12%",
    height: "8%",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: "3%",
    top: 12,
  },
  loginTitle: {
    height: "20%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "10%",
  },
  loginTitleText: {
    textAlign: "center",
    justifyContent: "center",
    fontFamily: "BarlowCondensed_400Regular",
    color: "#CA9CE1",
    fontSize: 30,
  },
  formContainer: {
    height: "20%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "30%",
  },
  input: {
    borderRadius: 10,
    width: "80%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#909090",
    color: "#909090",
  },
  loginButton: {
    backgroundColor: "#4F4F4F",
    padding: 10,
    borderRadius: 10,
    width: "65%",
    height: "7%",
    alignItems: "center",
    margin: 12,
    justifyContent: "center",
    position: "absolute",
    bottom: "35%",
  },
  buttonText: {
    color: "#CA9CE1",
    fontSize: 20,
    fontFamily: "BarlowCondensed_400Regular",
  },
  forgotPasswordLink: {
    color: "#909090",
  },
});

export default LoginModalLM;
