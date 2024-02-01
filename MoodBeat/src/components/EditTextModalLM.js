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
  Button,
} from "react-native";
import {
  useFonts,
  BarlowCondensed_400Regular,
  BarlowCondensed_500Medium,
} from "@expo-google-fonts/barlow-condensed";
import ModalTabsLM from "./ModalTabsLM";

const EditTextModalLM = ({ isVisible, onClose }) => {

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
          <Text style={styles.titleText}>Edit Text</Text>
        </View>
        <View>
          <Text style={styles.textDescription}>
          Change the text by selecting a different text style and selecting a color with the selector, HEX code, or RGB code. 
          </Text>
          </View>
          <View>
            <Button
            onPress={() => navigation.navigate("ProfileScreenLM")}
            title="Save Changes"
            />
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
  backgroundColor: '#FFFFFC',
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
    marginTop: 30,
  },
  button: {
    backgroundColor: "#43357A",
    height: 44,
    width: 240,
    fontFamily: "BarlowCondensed_600SemiBold",
    fontSize: 20,
  },
});

export default EditTextModalLM;