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
  BarlowCondensed_400Regular,
  BarlowCondensed_600SemiBold,
} from "@expo-google-fonts/barlow-condensed";
import ShareSettingHeaderLM from "../components/ShareSettingHeaderLM";
import MoodBoardCardLM from "../components/MoodBoardCardLM";
import NavBarLM from "../components/NavBarLM";
import MyMusicSectionLM from "../components/MyMusicSectionLM";

const ProfileSectionLM = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    BarlowCondensed_400Regular,
    BarlowCondensed_600SemiBold,
  });

  const [selectedTab, setSelectedTab] = useState("Created");

  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };

  if (!fontsLoaded) {
    return null;
  }

  // Code for the different boards. The first part will render the boards if the created tab is selected. The second part will render the boards in the saved tab.
  const renderCardSet = () => {
    if (selectedTab === "Created") {
      return (
        <>
          <MoodBoardCardLM
            imageSource={require("../../assets/images/YouNotTheSame.png")}
            title="You Not The Same"
            onPress={() => setModalVisible(true)}
          />
          <MoodBoardCardLM
            imageSource="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=2819&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="DK Ost"
            cardColor="#ECE4D2"
            onPress={() => navigation.navigate("ProfileScreenLM")}
          />
          <MoodBoardCardLM
            imageSource="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=2819&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Genesis X Not Allowed"
            cardColor="#55A3C4"
            onPress={() => navigation.navigate("ProfileScreenLM")}
          />
          <MoodBoardCardLM
            imageSource="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=2819&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Aquatic Ambience"
            cardColor="#060B07"
            onPress={() => navigation.navigate("ProfileScreenLM")}
          />
        </>
      );
    } else if (selectedTab === "Saved") {
      return (
        <>
         <MoodBoardCardLM
            imageSource="https://pbs.twimg.com/ext_tw_video_thumb/1356973712625516545/pu/img/ry0ebco4DL5gENed.jpg:large"
            title="My Love Mine All Mine"
            // cardColor="#AFC1D7"
          />
          <MoodBoardCardLM
            imageSource="https://pbs.twimg.com/ext_tw_video_thumb/1356973712625516545/pu/img/ry0ebco4DL5gENed.jpg:large"
            title="Come, Gentle Night"
            // cardColor="#161733"
          />
          <MoodBoardCardLM
            imageSource="https://pbs.twimg.com/ext_tw_video_thumb/1356973712625516545/pu/img/ry0ebco4DL5gENed.jpg:large"
            title="Mamma Mia"
            // cardColor="#337FE1"
          />
          <MoodBoardCardLM
            imageSource="https://pbs.twimg.com/ext_tw_video_thumb/1356973712625516545/pu/img/ry0ebco4DL5gENed.jpg:large"
            title="Merry-Go-Round-Of-Life"
            // cardColor="#337FE1"
          />
        </>
      );
    }
    return (
      <>
        <MoodBoardCard
          imageSource="https://example.com/image.jpg"
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
            source={require("../../assets/images/alanProfilePic.png")}
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
        // ScrollView isn't working properly. I'm not able to scroll to the bottom of the page.
        // Note: you don't have to declare vertical becuase it does it automatically.
        showsVerticalScrollIndicator={true}
        contentContainerStyle={styles.cardContainer}
      >
        {renderCardSet()}
      </ScrollView>
      <MyMusicSectionLM isVisible={modalVisible} onClose={closeModal} />
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
    height: 200,
    backgroundColor: "#B7E3FF",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 100,
  },
  profileImage: {
    width: 152,
    height: 152,
    borderRadius: 100,
    marginTop: 25,
    alignSelf: "flex-start",
  },
  profileTitle: {
    fontFamily: "BarlowCondensed_600SemiBold",
    fontSize: 20,
    color: "#0055FF",
    alignSelf: "flex-end",
    marginRight: 8,
    marginBottom: 20, // This isn't behaving like it's supposed to.
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
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 8, // Need to be able to modify the color of the text within the card container. Will probably need to be modified within the MoodBoardCard doc. Maybe delete color in cardTitle?
  },
});

export default ProfileSectionLM;