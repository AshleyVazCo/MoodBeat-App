import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const SettingScreenDM = () => {
  const navigation = useNavigation();

  const onClose = () => {
    navigation.goBack();
  };

  return (
<View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableOpacity>
      </View>
        <View style={styles.title}>
            <Text style={styles.titleText}>Settings</Text>
        </View>
          </View>
      </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#26282C',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  closeButton: {
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#CA9CE1',
    fontSize: 24,
    },
      title: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  titleText: {
    textAlign: 'center',
    fontFamily: "BarlowCondensed_400Regular",
    color: '#909090',
    fontSize: 30,
  },
});

export default SettingScreenDM;
