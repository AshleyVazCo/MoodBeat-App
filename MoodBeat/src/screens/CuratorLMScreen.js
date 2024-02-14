import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableHighlight, ScrollView, Image } from "react-native";
import ShareSettingHeaderLM from "../components/ShareSettingHeaderLM";
import MoodBoardCard from "../components/MoodBoardCard";
import NavBarLM from "../components/NavBarLM";

const CuratorLMScreen = ({ navigation }) => {

  const [selectedTab, setSelectedTab] = useState("Created");

const renderCardSet = () => {
  if (selectedTab === "Created") {
    return (
      <>
        <MoodBoardCard
          imageSource={require('../../assets/images/classicalPic.png')}
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
          imageSource={require('../../assets/images/ambiencePic.png')}
          title="Ambiance"
          cardColor="#339392"
          onPress={() => navigation.navigate('ProfileScreenLM', { curatorName: 'Ambiance' })}
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
        onPress={() => navigation.navigate('CuratorSelectionLM')}
      />
    </>
  );
};
  
  return (
    <View style={styles.background}>
      <ShareSettingHeaderLM navigation={navigation} />
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
      <View style={styles.NavBarLM }>
        <NavBarLM />
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
});

export default CuratorLMScreen;
