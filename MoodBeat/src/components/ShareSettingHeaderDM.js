import React from "react";
import { View, TouchableOpacity, Share, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ShareSettingHeaderDM = () => {
  const navigation = useNavigation();

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Share Screen?',
      });
      if (result.action === Share.sharedAction) {
        console.log('Share was successful');
      } else if (result.action === Share.dismissedAction) {
        console.log('Share was dismissed');
      }
    } catch (error) {
      console.error('Error sharing:', error.message);
    }
  };

  const onNavigateSetting = () => {
    navigation.navigate('SettingDM');
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onShare} underlayColor="transparent">
        <Image source={require('../../assets/icons/shareIcon_Dark.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onNavigateSetting} underlayColor="transparent">
        <Image source={require('../../assets/icons/settingsIcon_Dark.png')} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  header: {
    height: 109,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20
  },
  icon: {
    width: 30,
    height: 30,
  },
};

export default ShareSettingHeaderDM;
