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
import { TouchableOpacity } from "react-native-gesture-handler";
import ProfileBoardInfoModalDM from "../components/ProfileBoardInfoModalDM";

const ProfileScreenDM = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState("Created");
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };

  const renderCardSet = () => {
    if (selectedTab === "Created") {
      return (
        <>
          <MoodBoardCard
            imageSource={require('../../assets/images/ambiencePic.png')}
            title="Ambience"
            cardColor="#339392"
            onPress={() => navigation.navigate("ProfileSectionDM")}
          />
        </>
      );
    } else if (selectedTab === "Saved") {
      return (
        <>
          <MoodBoardCard
            imageSource={require('../../assets/images/WinterHaven.png')}
            title="Winter Haven"
            cardColor="#AFC1D7"
          />
        </>
      );
    }
    return (
      <>
        <MoodBoardCard
          imageSource={require('../../assets/images/traditional.png')}
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
        <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image
          source={
            require('../../assets/images/alanProfilePic.png')
          }
          style={styles.profileImage}
          onPress={() => setModalVisible(true)}
        />
        </TouchableOpacity>
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
        <ProfileBoardInfoModalDM isVisible={modalVisible} onClose={closeModal} />
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
    fontFamily: "BarlowCondensed_400Regular",
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
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 8,
  },
});

export default ProfileScreenDM;
