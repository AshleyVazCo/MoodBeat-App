import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import MoodBoardCard from './MoodBoardCard'; // Correct path assumed

const TextContent = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedColor, setSelectedColor] = useState('#123456'); // Default color

  const handleColorChange = (color) => {
    setInputValue(color); // Update inputValue with every change for user feedback
    // Check if color is in valid HEX format (# followed by exactly 6 letters/numbers)
    if (/^#[0-9A-F]{6}$/i.test(color)) {
      setSelectedColor(color); // Update selectedColor only if valid
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Font Color</Text>
      <Text style={styles.text}>
        Select a Font color for your moodboard by typing in a HEX code.
      </Text>
      <Text>Enter a Hex Color Code:</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleColorChange}
        value={inputValue}
        placeholder="Type color hex code"
        maxLength={7} // Including the '#' sign
      />
      <MoodBoardCard
        id={1}
        title="Mood Board Title"
        onPress={() => console.log('Card pressed')}
        cardColor={selectedColor} // Pass the validated color
      />
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
  },
});

export default TextContent;
