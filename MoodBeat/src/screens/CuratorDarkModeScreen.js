import React from "react";
import { Text, StyleSheet, View, Button} from "react-native";
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
      <View style={styles.Header}>
        <Button
          onPress={() => navigation.navigate('Share')}
          title="Share Icon"
        />
        <Button
          onPress={() => navigation.navigate('Setting')}
          title="Setting Icon"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#26282C",
    },
    Header: {
        height: 75,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    fontBody: {
        fontFamily: "BarlowCondensed_400Regular",
        fontSize: 17,
        color: "#909090",
    },
});

export default CuratorDarkModeScreen;
