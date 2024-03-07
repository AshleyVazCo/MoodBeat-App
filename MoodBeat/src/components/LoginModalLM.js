import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import VerificationModalLM from "../components/VerificationModalLM";
// import axios from "axios";

const LoginModalLM = ({ visible, onClose }) => {
  const navigation = useNavigation();
  const [isForgotPasswordModalVisible, setForgotPasswordModalVisible] =
    useState(false);

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

  // const handleLogin = async (username, password) => {
  //   try {
  //     const response = await axios.get(
  //       "https://students.gaim.ucf.edu/~as357903/MoodBeat/Login.php",
  //       {
  //         username: username,
  //         password: password,
  //       }
  //     );
  //     if (response.data.message === "Login successful") {
  //       navigateToScreen("HomeScreenLM");
  //     } else {
  //       Alert.alert("Login failed", "Please check your username and password");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data:", error.message);
  //   }
  // };

  const handleLogin = async (username, password) => {
    try {
      const response = await fetch(
        `https://students.gaim.ucf.edu/~as357903/MoodBeat/Login.php?username=${username}&password=${password}`,
        {
          method: "GET",
        }
      );

      const responseText = await response.text();
      console.log("Response text:", responseText);

      const data = JSON.parse(responseText);
      if (data.message === "Login successful") {
        navigateToScreen("HomeScreenLM");
      } else {
        Alert.alert("Login failed", "Please check your username and password");
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible || isForgotPasswordModalVisible}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        {isForgotPasswordModalVisible ? (
          <VerificationModalLM onClose={handleVerificationScreenClose} />
        ) : (
          <>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeIcon}>X</Text>
            </TouchableOpacity>

            <View style={styles.logo}>
              <Image source={require("../../assets/icons/logoPurple.png")} />
            </View>

            <View style={styles.loginTitle}>
              <Text style={styles.loginTitleText}>Log In</Text>
            </View>

            <View style={styles.formContainer}>
              <TextInput
                placeholder="Username"
                style={styles.input}
                placeholderTextColor={"black"}
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.input}
                placeholderTextColor={"black"}
              />
              <TouchableOpacity onPress={handleForgotPasswordPress}>
                <Text style={styles.forgotPasswordLink}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
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
    backgroundColor: "white",
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
    color: "#43357A",
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
    color: "#43357A",
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
  },
  loginButton: {
    backgroundColor: "#43357A",
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
    color: "#FFFFFC",
    fontSize: 20,
    fontFamily: "BarlowCondensed_400Regular",
  },
});
export default LoginModalLM;
