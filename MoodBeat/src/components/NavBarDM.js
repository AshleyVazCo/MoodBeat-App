import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const NavBarDM = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.navItem} onPress={() => navigateToScreen("HomeDM")}>
        <Image source={require('../../assets/icons/home_Dark.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigateToScreen("CreationDM")}>
        <Image source={require('../../assets/icons/navBoards_Dark.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigateToScreen("SearchDM")}>
        <Image source={require('../../assets/icons/searchSymbol_Dark.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigateToScreen("ProfileScreenDM")}>
        <Image source={require('../../assets/icons/accountCircle_Dark.png')} style={styles.icon} />
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

export default NavBarDM;
