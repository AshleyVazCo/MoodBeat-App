import React from "react";
import { View, TouchableHighlight, Share, Image } from "react-native";

const ShareSettingHeaderLM = ({ onNavigateSetting }) => {
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

  return (
    <View style={styles.header}>
      <TouchableHighlight onPress={onShare} underlayColor="transparent">
        <Image source={require('../../assets/icons/shareIcon_Light.png')} style={styles.icon} />
      </TouchableHighlight>
      <TouchableHighlight onPress={onNavigateSetting} underlayColor="transparent">
        <Image source={require('../../assets/icons/settingsIcon_Light.png')} style={styles.icon} onPress={onNavigateSetting} />
      </TouchableHighlight>
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

export default ShareSettingHeaderLM;

