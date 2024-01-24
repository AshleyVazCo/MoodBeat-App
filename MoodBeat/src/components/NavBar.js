import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

const NavBar = () => {
  return (
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.navText}>Create</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.navText}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.navText}>Profile</Text>
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

export default NavBar;
