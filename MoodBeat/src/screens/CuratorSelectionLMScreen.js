import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import ShareSettingHeader from "../components/ShareSettingHeader";
import SongSelectionCard from "../components/SongSelectionCard";
import NavBar from "../components/NavBar";
import SongModalLM from "../components/SongModalLM"

const CuratorSelectionLMScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const data = [
    {
      id: "1",
      imageSource: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "My Love Mine all mine",
    },
    // Add more songs as needed
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => setModalVisible(true)}>
      <SongSelectionCard
        imageSource={item.imageSource}
        title={item.title}
        onPress={() => setModalVisible(true)}
      />
    </TouchableOpacity>
  );

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.background}>
      <ShareSettingHeader navigation={navigation} />
      <View style={styles.profile}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
          style={styles.profileImage}
        />
        <Text style={styles.profileTitle}>Jolijass</Text>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        style={[styles.container, { marginTop: 100 }]}
      />

      <SongModalLM isVisible={modalVisible} onClose={closeModal} />

      <View style={styles.navBar }>
        <NavBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#FFFFFC",
  },
  container: {
    flex: 1,
  },
  profile: {
    flexDirection: 'row',
    height: 166,
    backgroundColor: "#8E8E8E",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  profileImage: {
    width: 152,
    height: 152,
    borderRadius: 100,
    marginRight: 16,
  },
  profileTitle: {
    fontFamily: "BarlowCondensed_400Regular",
    fontSize: 20,
    color: "#fff",
  },
  navBar: {
    backgroundColor: "#FFFFFC",
  }
});

export default CuratorSelectionLMScreen;