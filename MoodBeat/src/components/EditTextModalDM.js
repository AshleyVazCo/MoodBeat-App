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

const EditTextModalDM = ({ isVisible, onClose }) => {

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
            source={require("../../assets/icons/logoWhite.png")}
          />
          <ModalTabsDM />
          <Text style={styles.titleText}>Edit Text</Text>
          <Text style={styles.textDescription}>Change the text by selecting a different text style and selecting a color with the selector, HEX code, or RGB code.</Text>
          <TouchableOpacity style={styles.button}
         onPress={() => nagivation.navigate("ProfileScreenLM")}>
          <Text style={styles.buttonText}>Save Changes</Text>
         </TouchableOpacity>
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
  backgroundColor: '#26282C',
  padding: 20,
  borderRadius: 10,
},
closeButtonText: {
  color: '#CA9CE1',
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
  color: "#909090",
  fontSize: 28,
  alignSelf: "center",
  marginTop: 20,
  marginBottom: 20,
},
textDescription: {
  fontFamily: "BarlowCondensed_500Medium",
  color: "#909090",
  fontSize: 20,
  alignSelf: "center",
  marginTop: 10,
},
button: {
  padding: 10,
  backgroundColor: "#4F4F4F",
  borderRadius: 10,
  height: 44,
  width: 240,
  alignSelf: "center",
  marginTop: 40,
},
buttonText: {
  color: "#CA9CE1",
  fontSize: 20,
  fontFamily: "BarlowCondensed_600SemiBold",
  textAlign: "center",
},
});

export default EditTextModalDM;