import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MoodBoardCard from './MoodBoardCard'; // Assuming the file path is correct
import Slider from '@react-native-community/slider'; // Import the Slider component from @react-native-community/slider

const BackgroundContent = () => {
  const [selectedColor, setSelectedColor] = useState('#123456');

  const moodBoardData = {
    id: 1,
    title: 'Mood Board Title',
    onPress: () => console.log('Card pressed'),
    cardColor: selectedColor,
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Background Color</Text>
      <Text style={styles.text}>
        Select a background color for your moodboard by dragging the circle to
        the color you want, type in a HEX code, or type in the RGB code.
      </Text>

      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        onValueChange={(value) => console.log(value)} // handle value change
      />

      <MoodBoardCard {...moodBoardData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 80,
  },
  text: {
    color: '#909090',
    fontSize: 20,
  },
  header: {
    color: '#909090',
    fontSize: 28,
  },
});

export default BackgroundContent;
