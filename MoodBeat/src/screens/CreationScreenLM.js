import React from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";

const Creation = () => {
  const handleCreateSectionPress = () => {
    // Implement logic for when "Join Board" is pressed
    navigation.navigate('SearchMusicModal');
    console.log("Join Board pressed");
  };

  const handleCreateBoardPress = () => {
    // Implement logic for when "Create Board" is pressed
    navigation.navigate('BoardInfoModal');
    console.log("Create Board pressed");
  };

  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
});

export default Creation;
