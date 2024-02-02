import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const NavBarLM = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.navItem} onPress={() => navigateToScreen("HomeScreen")}>
        <Image source={require('../../assets/icons/home_Light.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigateToScreen("CreationLM")}>
        <Image source={require('../../assets/icons/navBoards_Light.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigateToScreen("SearchScreen")}>
        <Image source={require('../../assets/icons/searchSymbol_Light.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigateToScreen("ProfileScreenLM")}>
        <Image source={require('../../assets/icons/accountCircle_Light.png')} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: 71,
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "#909090"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  navText: {
    fontSize: 16,
  },
});

export default NavBarLM;
