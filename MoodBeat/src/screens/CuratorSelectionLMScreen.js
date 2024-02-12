import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import ShareSettingHeaderLM from "../components/ShareSettingHeaderLM";
import SongSelectionCard from "../components/SongSelectionCard";
import NavBarLM from "../components/NavBarLM";
import SongModalLM from "../components/SongModalLM"

const CuratorSelectionLMScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const data = [
    {
      id: "1",
      imageSource: require('../../assets/images/myloveMinePic.png'),
      title: "My Love Mine All mine",
    },
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
      <ShareSettingHeaderLM navigation={navigation} />
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

      <SongModalLM isVisible={modalVisible} onClose={closeModal} />

      <View style={styles.navBar }>
        <NavBarLM />
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
    fontFamily: "BarlowCondensed-Regular",
    fontSize: 20,
    color: "#fff",
  },
  navBar: {
    backgroundColor: "#FFFFFC",
  }
});

export default CuratorSelectionLMScreen;
