import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

const BoardText = ({ onCloseModal }) => {

 /* const handleCloseSectionModal = () => {
    setBoardInfoModalVisible(false);
  }; */

  const handleBack = () => {
    onCloseModal();
  };

  return (
    <View style={styles.container}>
      <View style={styles.icons}>
        <TouchableOpacity onPress={handleBack}>
          <Text style={styles.settings}>X</Text>
        </TouchableOpacity>
          <Image
          style={styles.logo}
          source={require('../../assets/icons/logoPurple.png')}
        />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Edit Text</Text>
      </View>
      <View>
        <Text style={styles.regularText}>Select a text color for your moodboard by dragging the circle to the 
        color you want, type in a HEX code, or type in the RGB code.</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  settings: {
    marginRight: 315,
    marginLeft: 10,
    fontSize: 25,
    fontFamily: 'BarlowCondensed_400Regular',
  },
  logo: {
    marginRight: 10,
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
  header: {
    fontFamily: 'BarlowCondensed_400Regular',
    fontSize: 35,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
});

export default BoardText;