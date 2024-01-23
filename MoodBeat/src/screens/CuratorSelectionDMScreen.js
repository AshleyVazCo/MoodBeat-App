import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import ShareSettingHeader from "../components/ShareSettingHeader";
import SongSelectionCard from "../components/SongSelectionCard";
import NavBar from "../components/NavBar";

const CuratorSelectionDMScreen = ({ navigation }) => {
  const data = [
    {
      id: "1",
      imageSource:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "My Love Mine all mine",
    },
    // Add more songs as needed
  ];

  const renderItem = ({ item }) => (
    <SongSelectionCard
      imageSource={item.imageSource}
      title={item.title}
      onPress={() => {}}
    />
  );

  return (
    <View style={styles.background}>
      <ShareSettingHeader navigation={navigation} />
      <View style={styles.profile}>
        <Text style={styles.imageText}>Profile</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2} // Display 2 columns
        style={[styles.container, { marginTop: 100 }]}
      />
      <NavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#26282C",
  },
  container: {
    flex: 1,
  },
  profile: {
    height: 166,
    backgroundColor: "#8E8E8E",
    justifyContent: "center",
    alignItems: "center",
  },
  imageText: {
    color: "white",
  },
});

export default CuratorSelectionDMScreen;
