import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableHighlight, Image, Modal } from "react-native";
import NavBarLM from "../components/NavBarLM";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useFonts, BarlowCondensed_400Regular } from '@expo-google-fonts/barlow-condensed';
import BoardInfoModalLM from "../components/BoardInfoModalLM";
import SearchMusicModalLM from "../components/SearchMusicModalLM";

const Creation = ({ navigation }) => {
  const [boardModalVisible, setBoardModalVisible] = useState(false);
  const [sectionModalVisible, setSectionModalVisible] = useState(false);

  const [fontsLoaded] = useFonts({
    BarlowCondensed_400Regular,
  });

  // Check if fonts are loaded before rendering the component
  if (!fontsLoaded) {
    return null;
  }

  const handleSettingsPress = () => {
    navigation.navigate('NonExistingPage');
    console.log("Settings icon pressed");
  };

  const handleCreateBoardPress = () => {
    setBoardModalVisible(true);
    console.log("Create Board pressed");
  };

  const handleCreateSectionPress = () => {
    setSectionModalVisible(true);
    console.log("Create Section pressed");
  }

  const handleCloseBoardModal = () => {
    setBoardModalVisible(false);
  };


  const handleCloseSectionModal = () => {
    setSectionModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.icons}>
        <Image
          style={styles.logo}
          source={require('../../assets/icons/logoPurple.png')}
          />
        <TouchableOpacity>
          <Image source={require('../../assets/icons/settingsIcon_Light.png')} onPress={handleSettingsPress} 
            style={styles.settings}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>In the Mood to Create?</Text>
      </View>
      <View>
        <Text style={styles.regularText}>The Creation Page is here to serve your moody needs.
        Your thoughts and feelings are unique, so make them a reality right here.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          style={styles.button}
          onPress={handleCreateSectionPress}
          underlayColor="#DDDDDD"
        >
          <View style={styles.section}>
            <Image source={require('../../assets/icons/boardsIcon_Light.png')} 
              style={styles.sectionImage}
            />
            <Text style={styles.buttonText}>Create Section</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={handleCreateBoardPress}
          underlayColor="#DDDDDD"
        >
          <View style={styles.board}>
            <Image source={require('../../assets/icons/boardsIcon_Light.png')} 
            style={styles.boardImage}
            />
            <Text style={styles.buttonText}>Create Board</Text>
          </View>
        </TouchableHighlight>
        <Modal
            animationType="none"
            transparent={true}
            visible={boardModalVisible}
            onRequestClose={handleCloseBoardModal}
        >
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.closeModalButton}
              onPress={handleCloseBoardModal}
            >
              <Text style={styles.closeModalButtonText}>Close Modal</Text>
            </TouchableOpacity>
          {/* Your board modal content here */}
          <BoardInfoModalLM />
          </View>
        </Modal>

       <Modal
        animationType="none"
        transparent={true}
        visible={sectionModalVisible}
        onRequestClose={handleCloseSectionModal}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.closeModalButton}
            onPress={handleCloseSectionModal}
          >
            <Text style={styles.closeModalButtonText}>Close Modal</Text>
          </TouchableOpacity>
          {/* Your section modal content here */}
          <SearchMusicModalLM onCloseModal={handleCloseSectionModal} />
        </View>
      </Modal>

      </View>

      <View style={styles.navBar}>
        <NavBarLM />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffffc",
  },
  buttonContainer: {
    marginTop: 50,
    flexDirection: "row",
  },
  button: {
    marginRight: 10,
    padding: 10,
    borderRadius: 5,
    marginBottom: 50,
    marginTop: 50,
  },
  buttonText: {
    fontFamily: 'BarlowCondensed_400Regular',
    fontSize: 30,
  },
  navBar: {
    backgroundColor: "#FFFFFC",
    marginTop: 40,
  },
  header: {
    fontFamily: 'BarlowCondensed_400Regular',
    fontSize: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 125,
  },
  regularText: {
    fontFamily: 'BarlowCondensed_400Regular',
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 50,
    marginRight: 50,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 50,
  },
  settings: {
    marginLeft: 175,
  },
  section: {
    fontFamily: 'BarlowCondensed_400Regular',
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 25,
  },
  board: {
    fontFamily: 'BarlowCondensed_400Regular',
    justifyContent: "center",
    alignItems: "center",
  },
  boardImage: {
    marginBottom: 20,
    width: 90,
    height: 90,
  },
  sectionImage: {
    marginBottom: 20,
    width: 90,
    height: 90,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  closeModalButton: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginTop: 55,
    marginRight: 250,
  },
  closeModalButtonText: {
    fontFamily: "BarlowCondensed_400Regular",
    fontSize: 18,
  },
});

export default Creation;
