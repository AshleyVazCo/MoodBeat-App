import React, { useState } from "react";
import { View, Text, StyleSheet, Slider } from "react-native";

const MoodBoardCard = ({ title, onPress, cardColor }) => {
  const [currentColor, setCurrentColor] = useState(cardColor);

  const handleColorChange = (color) => {
    setCurrentColor(color);
  };

  return (
    <View style={[styles.card, { backgroundColor: currentColor }]}>
      <Text style={styles.title}>{title}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        onValueChange={handleColorChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 200,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  },
  title: {
    fontSize: 20,
    color: "#FFFFFF",
  },
  slider: {
    width: 150,
    marginTop: 20,
  },
});

export default MoodBoardCard;
