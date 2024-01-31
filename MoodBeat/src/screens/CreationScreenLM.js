import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
import NavBar from "../components/NavBar";
import ShareSettingHeader from "../components/ShareSettingHeader";
import CreateSectionModalLM from "../components/CreateSectionModalLM"

const Creation = ({ navigation }) => {
  const handleCreateSectionPress = () => {
    // Implement logic for when "Join Board" is pressed
    navigation.navigate('SearchMusicModalLM');
    console.log("Join Board pressed");
  };

  const handleCreateBoardPress = () => {
    // Implement logic for when "Create Board" is pressed
    navigation.navigate('BoardInfoModalLM');
    console.log("Create Board pressed");
  };

    const [modalVisible, setModalVisible] = useState(false);

    const renderItem = ({ item }) => (
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <SongSelectionCard
          imageSource={item.imageSource}
          title={item.title}
          onPress={() => setModalVisible(true)}
        />
      </TouchableOpacity>
    );
  
    const closeModal = () => {
      setModalVisible(false);
    };

  return (
    <View style={styles.container}>
    <ShareSettingHeader navigation={navigation} />
      <Text>In the Mood to Create?</Text>
      <Text>The Creation Page is here to serve your moody needs. Your thoughts and feelings are unique, so make them a reality right here.</Text>
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          style={styles.button}
          onPress={handleCreateSectionPress}
          underlayColor="#DDDDDD"
        >
          <Text>Create Section</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={handleCreateBoardPress}
          underlayColor="#DDDDDD"
        >
          <Text>Create Board</Text>
        </TouchableHighlight>
      </View>

      <CreateSectionModalLM isVisible={modalVisible} onClose={closeModal} />
      <View style={styles.navBar }>
        <NavBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  background: {
    flex: 1,
    backgroundColor: "#FFFFFC",
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
  },
  button: {
    marginRight: 10,
    padding: 10,
    borderRadius: 5,
  },
  navBar: {
    backgroundColor: "#FFFFFC",
  }
});

export default Creation;
