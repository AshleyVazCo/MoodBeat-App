import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { useFonts, BarlowCondensed_400Regular } from '@expo-google-fonts/barlow-condensed';
import ShareSettingHeader from "../components/ShareSettingHeader";

const CuratorDarkModeScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    BarlowCondensed_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.background}>
      <ShareSettingHeader navigation={navigation} />
      <View style={styles.profile}>
        <Text style={styles.imageText}>Image</Text>
      </View>
        <View style={styles.tabMenu}>
            <Button
                onPress={() => navigation.navigate('Setting')}
                title="Created"
            />
            <Button
                onPress={() => navigation.navigate('Setting')}
                title="Saved"
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
  profile: {
    height: 300,
    backgroundColor: '#8E8E8E',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CuratorDarkModeScreen;
