import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

const BoardInfo = () => {
  const EditBoardInfo = () => {
    const [boardTitle, setBoardText] = useState("Initial Board Title");
    };
    const handleSaveCategory = () => {
      // Implement logic to save changes to the backend or update state
      console.log("Saved category pressed");
    };

  return (
    <View style={styles.container}>
      <Text>Board Description</Text>
      <Image
        source={{ uri: 'https://www.shutterstock.com/image-vector/upload-icon-flat-vector-download-260nw-1378175036.jpg' }}
        style={styles.image}
      />
       <Text>Upload cover image</Text>
       <TextInput
          style={styles.input}
          value={boardTitle}
          onChangeText={(text) => setBoardText(text)}
        />
        <View>
          <Text>Select a category below:</Text>
            <TouchableHighlight onPress={handleSaveCategory}>Motivation</TouchableHighlight>
            <TouchableHighlight onPress={handleSaveCategory}>Concentration</TouchableHighlight>
            <TouchableHighlight onPress={handleSaveCategory}>Relaxation</TouchableHighlight>
            <TouchableHighlight onPress={handleSaveCategory}>Energetic</TouchableHighlight>
            <TouchableHighlight onPress={handleSaveCategory}>Expressive</TouchableHighlight>
      </View>
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
  },
});

export default BoardInfo;