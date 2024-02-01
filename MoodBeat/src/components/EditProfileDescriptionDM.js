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

const EditProfileDescriptionDM = ({ isVisible, onClose }) => {
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
    } else if (selectedTab === "Background") {
    } else if (selectedTab === "Text") {
    } else {
    }
  };

  return (
    <Modal transparent visible={isVisible} onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
          <Text style={styles.titleText}>Edit Profile Info</Text>
          <Image
            style={styles.uploadImage}
            source={require("../../assets/images/alanProfilePic.png")}
          />
          <View>
            <TextInput
              style={styles.textInputBox}
              setFocusedText={setFocusedText}
              value={text}
            />
          </View>
          <View>
            <Text style={styles.privacyText}>Privacy</Text>
            <Switch
              trackColor={{ false: "#FFFFFC", true: "4F4F4F" }}
              thumbColor={privacy ? "#4F4F4F" : "#FFFFFC"}
              onValueChange={toggleSwitch}
              value={setPrivacy}
              style={styles.privacyToggle}
            />
          </View>
          <View>
            <Text>
              Enabling privacy settings will allow your account to be hidden
              from other users, and will not be searchable.
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
  closeButtonText: {
    color: "#CA9CE1",
    fontSize: 24,
  },
  titleText: {
    color: "#909090",
    fontSize: 28,
    alignSelf: "center",
  },
  uploadImage: {
    alignSelf: "center",
  },
  textInputBox: {
    backgroundColor: "#26282C",
    width: 327,
    height: 44,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#909090",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 40,
    color: "#909090",
    padding: 10,
  },
  privacyToggle: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "flex-end",
  },
  privacyText: {
    color: "#909090",
    fontSize: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default EditProfileDescriptionDM;
