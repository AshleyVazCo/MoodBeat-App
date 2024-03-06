import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

const TextContent = () => {

  return (
    <View style={styles.container}>
          <Text style={styles.text}>Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#ffffff'
  },
});
export default TextContent;