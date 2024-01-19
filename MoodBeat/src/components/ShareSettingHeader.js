import React from "react";
import { View, Button, Share } from "react-native";

const ShareSettingHeader = ({ onNavigateSetting }) => {
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
      <Button onPress={onShare} title="Share Icon" />
      <Button onPress={onNavigateSetting} title="Setting Icon" />
    </View>
  );
};

const styles = {
  header: {
    height: 75,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

export default ShareSettingHeader;
