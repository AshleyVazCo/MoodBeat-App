import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import ShareSettingHeaderDM from "../components/ShareSettingHeaderDM";
import MoodBoardCard from "../components/MoodBoardCard";
import NavBarDM from "../components/NavBarDM";
import MyMusicSectionDM from "../components/MyMusicSectionDM";

const ProfileSectionDM = ({ navigation }) => {

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
          <MoodBoardCard
            imageSource={require("../../assets/images/YouNotTheSame.png")}
            title="You Not The Same"
            onPress={() => setModalVisible(true)}
          />
        </>
      );
    } else if (selectedTab === "Saved") {
      return (
        <>
          <MoodBoardCard
            imageSource={require("../../assets/images/myloveMinePic.png")}
            title="My Love Mine All Mine"
            // cardColor="#AFC1D7"
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
      <ShareSettingHeaderDM navigation={navigation} />
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
        vertical // ScrollView isn't working properly. I'm not able to scroll to the bottom of the page.
        showsVerticalScrollIndicator={true}
        contentContainerStyle={styles.cardContainer}
      >
        {renderCardSet()}
      </ScrollView>
      <MyMusicSectionDM isVisible={modalVisible} onClose={closeModal} />
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
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 8,
  },
});

export default ProfileSectionDM;
