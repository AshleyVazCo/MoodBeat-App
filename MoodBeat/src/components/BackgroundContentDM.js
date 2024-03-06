import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

const BackgroudContent = () => {

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

export default BackgroudContent;
