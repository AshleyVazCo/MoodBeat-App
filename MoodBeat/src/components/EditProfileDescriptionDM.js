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
import ModalTabsDM from "./ModalTabsDM";

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
          <Image
            style={styles.moodBeatimage}
            source={require("../../assets/icons/logoWhite.png")}
          />
          <ModalTabsDM />
          <Text style={styles.titleText}>Edit Profile Info</Text>
          <Image
            style={styles.uploadImage}
            source={require("../../assets/images/uploadImage.png")}
          />
          <View>
            <TextInput
              style={styles.textInputBox}
              setFocusedText={setFocusedText}
              value={text}
            />
          </View>
          <View style={styles.privacyDiv}>
            <Text style={styles.privacyText}>Privacy</Text>
            <Switch
              trackColor={{ false: "#FFFFFC", true: "#4F4F4F" }}
              thumbColor={privacy ? "#4F4F4F" : "#FFFFFC"}
              onValueChange={toggleSwitch}
              value={setPrivacy}
              style={styles.privacyToggle}
            />
          </View>
          <View>
            <Text style={styles.privacyTextDescription}>
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
  closeAndLogo: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  titleText: {
    fontFamily: "BarlowCondensed_500Medium",
    color: "#909090",
    fontSize: 28,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
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
    fontFamily: "BarlowCondensed_400Regular",
    fontSize: 20,
  },
  privacyDiv: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 150,
  },
  privacyToggle: {
    alignSelf: "flex-end",
  },
  privacyText: {
    fontFamily: "BarlowCondensed_400Regular",
    color: "#909090",
    fontSize: 20,
  },
  privacyTextDescription: {
    fontFamily: "BarlowCondensed_400Regular",
    color: "#909090",
    fontSize: 20,
    alignSelf: "center",
    marginTop: 30,
  },
  moodBeatimage: {
    width: 40,
    height: 40,
    resizeMode: "cover",
    alignSelf: "flex-end",
    marginTop: -30,
  },
});

export default EditProfileDescriptionDM;
