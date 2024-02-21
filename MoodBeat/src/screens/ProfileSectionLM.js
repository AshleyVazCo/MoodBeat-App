import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import ShareSettingHeaderLM from "../components/ShareSettingHeaderLM";
import MoodBoardCardLM from "../components/MoodBoardCardLM";
import NavBarLM from "../components/NavBarLM";
import MyMusicSectionLM from "../components/MyMusicSectionLM";

const ProfileSectionLM = ({ navigation }) => {

  const [selectedTab, setSelectedTab] = useState("Created");

  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };

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
            imageSource="https://pbs.twimg.com/ext_tw_video_thumb/1356973712625516545/pu/img/ry0ebco4DL5gENed.jpg:large"
            title="DK Ost"
            // cardColor="#161733"
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
    fontFamily: "BarlowCondensed_400Regular",
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