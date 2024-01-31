import React from "react";
import { StyleSheet, View, Text } from "react-native"

const BoardText = () => {
  const ColorSelector = () => {
    const [red, setRed] = useState('0');
    const [green, setGreen] = useState('0');
    const [blue, setBlue] = useState('0');

    const handleColorChange = () => {
      // Convert string values to integers
      const r = parseInt(red, 10) || 0;
      const g = parseInt(green, 10) || 0;
      const b = parseInt(blue, 10) || 0;

      // Validate RGB values (between 0 and 255)
      const validR = Math.min(255, Math.max(0, r));
      const validG = Math.min(255, Math.max(0, g));
      const validB = Math.min(255, Math.max(0, b));

      // Update state with validated values
      setRed(validR.toString());
      setGreen(validG.toString());
      setBlue(validB.toString());
    };

  return (
    <View style={styles.container}>
      <Text>Edit Text</Text>
        <Text>Select a background color for your moodboard by dragging the circle to the 
        color you want, type in a HEX code, or type in the RGB code.</Text>
        <Text style={styles.label}>Red:</Text>
          <TextInput
            style={styles.input}
            value={red}
            onChangeText={(text) => setRed(text)}
            keyboardType="numeric"
          />

        <Text style={styles.label}>Green:</Text>
          <TextInput
            style={styles.input}
            value={green}
            onChangeText={(text) => setGreen(text)}
            keyboardType="numeric"
          />

        <Text style={styles.label}>Blue:</Text>
          <TextInput
            style={styles.input}
            value={blue}
            onChangeText={(text) => setBlue(text)}
            keyboardType="numeric"
        />

        <Button title="Apply Color" onPress={handleColorChange} />

        <View
          style={{
            width: 200,
            height: 100,
            backgroundColor: `rgb(${red}, ${green}, ${blue})`,
            marginTop: 20,
          }}
        />
    </View>
  )
}
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
});

export default BoardText;