import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import {
  useFonts,
  BarlowCondensed_400Regular,
} from "@expo-google-fonts/barlow-condensed";


export default function EditProfile() {
  return (
    <View style={styles.container}>
      <Text>Here goes edit profile code!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
