import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import EditProfileDescriptionLM from "./EditProfileDescriptionLM";
import BackgroundColorModalLM from "./BackgroundColorModalLM";
import EditTextModalLM from "./EditTextModalLM";

const ModalTabsLM = () => {
  const [selectedTab, setSelectedTab] = useState("Description");

  // The app breaks when I call this function at the bottom.

  // const renderComponent = () => {
  //   if (selectedTab === "Description") {
  //     return (<EditProfileDescriptionLM />);
  //   } else if (selectedTab === "Background") {
  //     return (<BackgroundColorModalLM />);
  //   } else if (selectedTab === "Text") {
  //     return (<EditTextModalLM />);
  //   }
  // };

  return (
    <View style={styles.tabMenu}>
      <TouchableHighlight
        onPress={() => setSelectedTab("Description")}
        style={
          selectedTab === "Description" ? styles.selectedTab : styles.tabButton
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
    </View>
  );
};

const styles = StyleSheet.create({
  tabMenu: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
  },
  tabButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#E5E5E5",
  },
  selectedTab: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#43357A",
  },
  buttonText: {
    fontFamily: "BarlowCondensed_400Regular",
    fontSize: 17,
    color: "#26282C",
  },
  selectedButtonText: {
    fontFamily: "BarlowCondensed_400Regular",
    fontSize: 17,
    color: "#FFFFFC",
  },
});

export default ModalTabsLM;
