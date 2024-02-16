import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import NavBarDM from "../components/NavBarDM";

const HomeScreenDM = () => {
  return (
    <View style={styles.background}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/homeBackground_Dark.png')}
          style={styles.backgroundImage}
        />
        <Image
          source={require('../../assets/icons/logoBlack.png')}
          style={styles.logo}
              />
        <Text style={styles.overlayText}>Home Screen</Text>
      </View>
      <NavBarDM />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#26282C",
  },
  imageContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  overlayText: {
    fontSize: 24,
    color: "#FFFFFF",
    fontFamily: 'BarlowCondensed_400Regular',
    top: 20,
  },
  logo: {
    width: 70,
    height: 75,
  },
});

export default HomeScreenDM;


