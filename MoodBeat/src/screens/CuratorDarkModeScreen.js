import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { useFonts, BarlowCondensed_400Regular } from '@expo-google-fonts/barlow-condensed';

const CuratorDarkModeScreen = () => {

  const [fontsLoaded] = useFonts({
    BarlowCondensed_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.background}>
      <Text style={styles.fontBody}>Curator Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#26282C",
  },
  fontBody: {
    fontFamily: "BarlowCondensed_400Regular",
    fontSize: 17,
    color: "#909090",
  },
});

export default CuratorDarkModeScreen;
