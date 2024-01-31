import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableHighlight, ScrollView, Image } from "react-native";
import { useFonts, BarlowCondensed_400Regular } from '@expo-google-fonts/barlow-condensed';
import ShareSettingHeaderDM from "../components/ShareSettingHeaderDM";
import MoodBoardCard from "../components/MoodBoardCard";
import NavBarDM from "../components/NavBarDM";

const CuratorDMScreen = ({ navigation }) => {
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
          <MoodBoardCard
            imageSource={require('../../assets/images/classicalPic.png')}
            title="Classical"
            cardColor="#A7A69E"
            onPress={() => navigation.navigate('CuratorSelectionDM')}
          />
        </>
      );
    } else if (selectedTab === "Saved") {
      return (
        <>
          <MoodBoardCard
            imageSource={require('../../assets/images/ambiencePic.png')}
            title="Ambiance"
            cardColor="#339392"
          />
        </>
      );
    }
    return (
      <>
        <MoodBoardCard
            imageSource={require('../../assets/images/classicalPic.png')}
            title="Classical"
            cardColor="#A7A69E"
            onPress={() => navigation.navigate('CuratorSelectionDM')}
        />
      </>
    );
  };

  return (
    <View style={styles.background}>
      <ShareSettingHeaderDM navigation={navigation} />
      <View style={styles.profile}>
        <Image
        source={require('../../assets/images/jolinaProfilePic.png')}
        style={styles.profileImage}
        />
        <Text style={styles.profileTitle}>Jolijass</Text>
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
      <NavBarDM />
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
  profileImage: {
    width: 152,
    height: 152,
    borderRadius: 100,
    marginBottom: 8,
  },
  profileTitle: {
    fontFamily: "BarlowCondensed_400Regular",
    fontSize: 20,
    color: "#fff",
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

export default CuratorDMScreen;
