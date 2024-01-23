import React from "react";
import { StyleSheet, View, Text, TouchableHighlight, ScrollView } from "react-native";
import { useFonts, BarlowCondensed_400Regular } from '@expo-google-fonts/barlow-condensed';
import ShareSettingHeader from "../components/ShareSettingHeader";
import MoodBoardCard from "../components/MoodBoardCard";
import NavBar from "../components/NavBar";

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
        <TouchableHighlight
          onPress={() => navigation.navigate('Setting')}
          style={[styles.buttonContainer, { backgroundColor: "#4F4F4F" }]}
        >
          <Text style={[styles.buttonText, { color: "#CA9CE1" }]}>Created</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigation.navigate('Setting')}
          style={[styles.buttonContainer, { backgroundColor: "#161717" }]}
        >
          <Text style={[styles.buttonText, { color: "#909090" }]}>Saved</Text>
        </TouchableHighlight>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.cardContainer}>
        <MoodBoardCard
          imageSource="https://example.com/image.jpg"
          title="Card Title 1"
        />
        <MoodBoardCard
          imageSource="https://example.com/image2.jpg"
          title="Card Title 2"
        />
          </ScrollView>
          <NavBar />
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
  tabMenu: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
  },
  buttonContainer: {
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: "BarlowCondensed_400Regular",
    fontSize: 17,
  },
  cardContainer: {
    marginLeft: 8,
  },
});

export default CuratorDarkModeScreen;

