import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import {
  useFonts,
  BarlowCondensed_400Regular, BarlowCondensed_600SemiBold
} from "@expo-google-fonts/barlow-condensed";
import ShareSettingHeaderLM from "../components/ShareSettingHeaderLM";
import MoodBoardCard from "../components/MoodBoardCard";
import NavBarLM from "../components/NavBarDM";

const ProfileScreenLM = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    BarlowCondensed_400Regular,
    BarlowCondensed_600SemiBold,
  });

  const [selectedTab, setSelectedTab] = useState("Created");

  if (!fontsLoaded) {
    return null;
  }

  // Code for the different boards. The first part will render the boards if the created tab is selected. The second part will render the boards in the saved tab.
  const renderCardSet = () => {
    if (selectedTab === "Created") {
      return (
        <>
          <MoodBoardCard
            imageSource={require("../../assets/images/ambiencePic.png")}
            title="Ambience"
            cardColor="#339392"
            onPress={() => navigation.navigate("ProfileScreenLM")}
          />
          <MoodBoardCard
            imageSource={require("../../assets/images/traditional.png")}
            title="Traditional"
            cardColor="#ECE4D2"
            onPress={() => navigation.navigate("ProfileScreenLM")}
          />
          <MoodBoardCard
            imageSource="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=2819&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Enchanted"
            cardColor="#55A3C4"
            onPress={() => navigation.navigate("ProfileScreenLM")}
          />
          <MoodBoardCard
            imageSource="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=2819&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Grunge"
            cardColor="#060B07"
            onPress={() => navigation.navigate("ProfileScreenLM")}
          />
        </>
      );
    } else if (selectedTab === "Saved") {
      return (
        <>
          <MoodBoardCard
            imageSource={require("../../assets/images/WinterHaven.png")}
            title="Winter Haven"
            cardColor="#AFC1D7"
          />
          <MoodBoardCard
            imageSource="https://pbs.twimg.com/ext_tw_video_thumb/1356973712625516545/pu/img/ry0ebco4DL5gENed.jpg:large"
            title="Nightlife"
            cardColor="#161733"
          />
          <MoodBoardCard
            imageSource="https://pbs.twimg.com/ext_tw_video_thumb/1356973712625516545/pu/img/ry0ebco4DL5gENed.jpg:large"
            title="Urban"
            cardColor="#337FE1"
          />
        </>
      );
    }
    return (
      <>
        <MoodBoardCard
          imageSource={require("../../assets/images/traditional.png")}
          title="Traditional"
          cardColor="#ECE4D2"
        />
      </>
    );
  };

  return (
    <View style={styles.background}>
      <ShareSettingHeaderLM navigation={navigation} />
      <View style={styles.profile}>
        <Image
          source={
            require("../../assets/images/alanProfilePic.png")
          }
          style={styles.profileImage}
        />
        <Text style={styles.profileTitle}>Alan.Jpg</Text>
      </View>
      <View style={styles.tabMenu}>
        <TouchableHighlight
          onPress={() => setSelectedTab("Created")}
          style={
            selectedTab === "Created" ? styles.selectedTab : styles.tabButton
          }
        >
          <Text
            style={
              selectedTab === "Created"
                ? styles.selectedButtonText
                : styles.buttonText
            }
          >
            Created
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => setSelectedTab("Saved")}
          style={
            selectedTab === "Saved" ? styles.selectedTab : styles.tabButton
          }
        >
          <Text
            style={
              selectedTab === "Saved"
                ? styles.selectedButtonText
                : styles.buttonText
            }
          >
            Saved
          </Text>
        </TouchableHighlight>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardContainer}
      >
        {renderCardSet()}
      </ScrollView>
      <NavBarLM />
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
    backgroundColor: "#B7E3FF",
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: 152,
    height: 152,
    borderRadius: 100,
    marginBottom: 8,
  },
  profileTitle: {
    fontFamily: "BarlowCondensed_600SemiBold",
    fontSize: 20,
    color: "#0055FF",
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
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 8,
  },
});

export default ProfileScreenLM;