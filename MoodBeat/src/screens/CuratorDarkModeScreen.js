import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableHighlight, ScrollView } from "react-native";
import { useFonts, BarlowCondensed_400Regular } from '@expo-google-fonts/barlow-condensed';
import ShareSettingHeader from "../components/ShareSettingHeader";
import MoodBoardCard from "../components/MoodBoardCard"; // Import the updated MoodBoardCard
import NavBar from "../components/NavBar";

const CuratorDarkModeScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    BarlowCondensed_400Regular,
  });

  const [selectedTab, setSelectedTab] = useState("Created");

  if (!fontsLoaded) {
    return null;
  }

  const renderCardSet = () => {
    if (selectedTab === "Created") {
      return (
        <>
            <MoodBoardCard imageSource="https://example.com/image.jpg"
                title="Classical"
                cardColor="#A7A69E" />
        </>
      );
    } else if (selectedTab === "Saved") {
      return (
        <>
            <MoodBoardCard imageSource="https://example.com/red_image1.jpg"
                title="Ambiance"
                cardColor="#339392" />
        </>
      );
    }
    return (
      <>
            <MoodBoardCard imageSource="https://example.com/image.jpg"
                title="Card Title 1"
                cardColor="#CA9CE1" />
      </>
    );
  };

  return (
    <View style={styles.background}>
      <ShareSettingHeader navigation={navigation} />
      <View style={styles.profile}>
        <Text style={styles.imageText}>Image</Text>
      </View>
      <View style={styles.tabMenu}>
        <TouchableHighlight
          onPress={() => setSelectedTab("Created")}
          style={selectedTab === "Created" ? styles.selectedTab : styles.tabButton}
        >
          <Text style={selectedTab === "Created" ? styles.selectedButtonText : styles.buttonText}>Created</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => setSelectedTab("Saved")}
          style={selectedTab === "Saved" ? styles.selectedTab : styles.tabButton}
        >
          <Text style={selectedTab === "Saved" ? styles.selectedButtonText : styles.buttonText}>Saved</Text>
        </TouchableHighlight>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.cardContainer}>
        {renderCardSet()}
      </ScrollView>
      <NavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#26282C",
  },
  profile: {
    height: 300,
    backgroundColor: '#8E8E8E',
    justifyContent: 'center',
    alignItems: 'center',
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
  cardContainer: {
    marginLeft: 8,
  },
});

export default CuratorDarkModeScreen;
