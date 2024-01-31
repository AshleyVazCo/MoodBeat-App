import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import BoardTextModalLM from "../components/BoardTextModalLM";

const BoardInfo = () => {

  return (
    <View style={styles.container}>
    
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fffffc",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
  },
});

export default BoardInfo;