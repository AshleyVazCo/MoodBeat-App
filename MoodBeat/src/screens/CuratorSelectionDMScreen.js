import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import ShareSettingHeaderDM from "../components/ShareSettingHeaderDM";
import SongSelectionCard from "../components/SongSelectionCard";
import NavBarDM from "../components/NavBarDM";
import SongModalDM from "../components/SongModalDM"

const CuratorSelectionDMScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const data = [
    {
      id: "1",
      imageSource: require('../../assets/images/myloveMinePic.png'),
      title: "My Love Mine All mine",
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
      <ShareSettingHeaderDM navigation={navigation} />
      <View style={styles.profile}>
        <Image
          source={require('../../assets/images/jolinaProfilePic.png')}
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

      <SongModalDM isVisible={modalVisible} onClose={closeModal} />

      <NavBarDM />
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
    fontFamily: "BarlowCondensed-Regular",
    fontSize: 20,
    color: "#fff",
  },
});

export default CuratorSelectionDMScreen;
