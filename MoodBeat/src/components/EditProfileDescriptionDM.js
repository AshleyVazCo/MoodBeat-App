import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Switch,
  TouchableHighlight,
} from "react-native";
import {
  useFonts,
  BarlowCondensed_400Regular,
  BarlowCondensed_500Medium,
} from "@expo-google-fonts/barlow-condensed";

const EditProfileModalDM = ({ isVisible, onClose }) => {
  // tabs at the top of the modal
  const [selectedTab, setSelectedTab] = useState("Description");
  // text input
  const [text, setFocusedText] = useState("Edit Username");
  // toggle/switch
  const [privacy, setPrivacy] = useState(false);
  const toggleSwitch = () => setPrivacy((previousState) => !previousState);

  //Font
  const [fontsLoaded] = useFonts({
    BarlowCondensed_400Regular,
    BarlowCondensed_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  const renderProfileModals = () => {
    if (selectedTab === "Description") {
      return (
        <View>
          <Text>Edit Profile Info</Text>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }} // Code for description/edit profile info image -- Replace with the actual URL of the image
            style={styles.descriptionImage}
          />
          <View>
            <TextInput
              style={styles.textInputBox}
              setFocusedText={setFocusedText}
              value={text}
            />
          </View>
          <View>
            <Text>Privacy</Text>
            <Switch
              trackColor={{ false: "#FFFFFC", true: "4F4F4F" }}
              thumbColor={privacy ? "#4F4F4F" : "#FFFFFC"}
              onValueChange={toggleSwitch}
              value={setPrivacy}
            />
          </View>
          <View>
            <Text>
              Enabling privacy settings will allow your account to be hidden
              from other users, and will not be searchable.
            </Text>
          </View>
        </View>
      );
    } else if (selectedTab === "Background") {
      return (
        <View>
          <Text>Background Color</Text>
          <Text>
            Select a background color for your profile by dragging the circle to
            the color you want, type in a HEX code, or type in the RGB code.
          </Text>
          <View>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }} // Code for Profile image -- Replace with the actual URL of the profile image
              style={styles.profileImage}
            />
            <Text>Alan.jpg</Text>
          </View>
          <Text>Must meet WCAG standards</Text>
        </View>
      );
    } else if (selectedTab === "Text") {
    } else {
    }
  };

  return (
    <Modal transparent visible={isVisible} onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <Image
              style={styles.image}
              source={{
                uri: "https://images.unsplash.com/photo-1572916289328-eca59d6903ae?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.tabMenu}>
        <TouchableHighlight
          onPress={() => setSelectedTab("Description")}
          style={
            selectedTab === "Description"
              ? styles.selectedTab
              : styles.tabButton
          }
        >
          <Text
            style={
              selectedTab === "Description"
                ? styles.selectedButtonText
                : styles.buttonText
            }
          >
            Description
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => setSelectedTab("Background")}
          style={
            selectedTab === "Background" ? styles.selectedTab : styles.tabButton
          }
        >
          <Text
            style={
              selectedTab === "Background"
                ? styles.selectedButtonText
                : styles.buttonText
            }
          >
            Background
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => setSelectedTab("Text")}
          style={selectedTab === "Text" ? styles.selectedTab : styles.tabButton}
        >
          <Text
            style={
              selectedTab === "Text"
                ? styles.selectedButtonText
                : styles.buttonText
            }
          >
            Text
          </Text>
        </TouchableHighlight>
        {renderProfileModals()}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  descriptionImage: {
    width: 152,
    height: 152,
    borderRadius: 100,
    marginBottom: 8,
  },
  textInputBox: {
    backgroundColor: "#26282C",
    width: 327,
    height: 44,
    borderRadius: 8,
    borderColor: "#909090",
    justifyContent: "center",
    alignItems: "center",
  },
  descriptionText: {
    color: "#909090",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    height: 760,
    width: 380,
    backgroundColor: "#26282C",
    padding: 20,
    borderRadius: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  closeButton: {
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButtonText: {
    color: "#CA9CE1",
    fontSize: 24,
  },
  tabMenu: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
  },
  tabButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#161717",
  },
  selectedTab: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#4F4F4F",
  },
  buttonText: {
    fontFamily: "BarlowCondensed_400Regular",
    fontSize: 17,
    color: "#909090",
  },
  selectedButtonText: {
    fontFamily: "BarlowCondensed_400Regular",
    fontSize: 17,
    color: "#CA9CE1",
  },
});

export default EditProfileModalDM;
