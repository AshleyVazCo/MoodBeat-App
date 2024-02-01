import React from "react";
import {
  Modal,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  useFonts,
  BarlowCondensed_400Regular,
  BarlowCondensed_500Medium,
} from "@expo-google-fonts/barlow-condensed";
import ModalTabsLM from "./ModalTabsLM";

const BackgroundColorModalLM = ({ isVisible, onClose }) => {
  // tabs at the top of the modal
  // const [selectedTab, setSelectedTab] = useState("Description");

  //Font
  const [fontsLoaded] = useFonts({
    BarlowCondensed_400Regular,
    BarlowCondensed_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

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
          <Image
            style={styles.moodBeatimage}
            source={require("../../assets/icons/logoPurple.png")}
          />
          <ModalTabsLM />
          <Text style={styles.titleText}>Background Color</Text>
          <Text style={styles.textDescription}>Select a background color for your profile by dragging the circle to
            the color you want, type in a HEX code, or type in the RGB code.</Text>
            <Image
            style={styles.uploadImage}
            source={require("../../assets/images/alanProfilePic.png")}
          />
          <Text style={styles.profileTitle}>Alan.jpg</Text>
          <Text style={styles.textStandard}>Must meet WCAG standards</Text>
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
    backgroundColor: "#9751F2",
    padding: 20,
    borderRadius: 10,
  },
  closeButtonText: {
    color: "#FFFFFF",
    fontSize: 24,
  },
  moodBeatimage: {
    width: 40,
    height: 40,
    resizeMode: "cover",
    alignSelf: "flex-end",
    marginTop: -30,
  },
  titleText: {
    fontFamily: "BarlowCondensed_500Medium",
    color: "#FFFFFF",
    fontSize: 28,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  textDescription: {
    fontFamily: "BarlowCondensed_500Medium",
    color: "#FFFFFF",
    fontSize: 20,
    alignSelf: "center",
  },
  uploadImage: {
    alignSelf: "center",
    marginTop: 20,
  },
  profileTitle: {
    fontFamily: "BarlowCondensed_600SemiBold",
    fontSize: 20,
    color: "#FFFFFF",
    alignSelf: "center",
    marginTop: 10,
  },
  textStandard: {
    fontFamily: "BarlowCondensed_400Regular",
    color: "#FFFFFF",
    fontSize: 20,
    alignSelf: "center",
    marginTop: 10,
  },
});

export default BackgroundColorModalLM;
