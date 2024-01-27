import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableHighlight, ScrollView, Image } from "react-native";
import { useFonts, BarlowCondensed_400Regular } from '@expo-google-fonts/barlow-condensed';
import ShareSettingHeader from "../components/ShareSettingHeader";
import MoodBoardCard from "../components/MoodBoardCard";
import NavBar from "../components/NavBar";

const CuratorLMScreen = ({ navigation }) => {
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
            imageSource="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=2819&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Classical"
            cardColor="#A7A69E"
            onPress={() => navigation.navigate('CuratorSelectionLM')}
          />
        </>
      );
    } else if (selectedTab === "Saved") {
      return (
        <>
          <MoodBoardCard
            imageSource="https://pbs.twimg.com/ext_tw_video_thumb/1356973712625516545/pu/img/ry0ebco4DL5gENed.jpg:large"
            title="Ambiance"
            cardColor="#339392"
          />
        </>
      );
    }
    return (
      <>
        <MoodBoardCard
          imageSource="https://example.com/image.jpg"
          title="Card Title 1"
          cardColor="#CA9CE1"
        />
      </>
    );
  };

  return (
    <View style={styles.background}>
      <ShareSettingHeader navigation={navigation} />
      <View style={styles.profile}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} // Replace with the actual URL of the profile image
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
      <View style={styles.navBar }>
        <NavBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#FFFFFC",
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
  cardContainer: {
    marginLeft: 8,
  },
  navBar: {
    backgroundColor: "#FFFFFC",
  }
});

export default CuratorLMScreen;