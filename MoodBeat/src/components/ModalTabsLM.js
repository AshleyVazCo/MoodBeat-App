import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

const ModalTabsLM = () => {
    // const renderProfileModals = () => {
    //     if (selectedTab === "Description") {
            
    //     } else if (selectedTab === "Background") {

    //     } else if (selectedTab === "Text") {

    //     } else {
    //     }
    //   };

    const [selectedTab, setSelectedTab] = useState("Description");

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
          style={
            selectedTab === "Text" ? styles.selectedTab : styles.tabButton
          }
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