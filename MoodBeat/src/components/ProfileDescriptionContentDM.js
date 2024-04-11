import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image, TextInput, Switch } from "react-native";
import * as ImagePicker from 'expo-image-picker';

const ProfileDescriptionContentDM = () => {
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const [selectedTab, setSelectedTab] = useState("Description");
  const [text, setFocusedText] = useState("Edit Username");
  const [privacy, setPrivacy] = useState(false);
  const toggleSwitch = () => setPrivacy((previousState) => !previousState);

  return (
      <View style={styles.container}>
          <View style={styles.tabContainer}>
                    <Text style={styles.header}>Edit Profile Info</Text>
      <View style={styles.uploadContainer}>
        <TouchableOpacity style={styles.imageContainer} onPress={pickImage}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} />
          ) : (
            <>
              <Image
                style={styles.uploadImage}
                source={require('../../assets/images/upload.png')}
              />
              <Text style={styles.upText}>Upload cover image</Text>
            </>
          )}
        </TouchableOpacity>
      </View>
                <View>
            <TextInput
              style={styles.textInputBox}
              setFocusedText={setFocusedText}
              value={Text}
            />
          </View>
          <View style={styles.privacyDiv}>
            <Text style={styles.privacyText}>Privacy</Text>
            <Switch
              trackColor={{ false: "#FFFFFC", true: "#4F4F4F" }}
              thumbColor={privacy ? "#4F4F4F" : "#FFFFFC"}
              onValueChange={toggleSwitch}
              value={setPrivacy}
              style={styles.privacyToggle}
            />
          </View>
          <View>
            <Text style={styles.privacyTextDescription}>
              Enabling privacy settings will allow your account to be hidden
              from other users, and will not be searchable.
            </Text>
          </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 100,
    },
  tabContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginLeft: 16,
    marginRight: 16,
    },
  text: {
    color: '#909090',
    fontSize: 17,
    marginBottom: 20,
    },
textInputBox: {
    backgroundColor: "#26282C",
    width: 327,
    height: 44,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#909090",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 40,
    color: "#909090",
    padding: 10,
    fontFamily: "BarlowCondensed_400Regular",
    fontSize: 20,
    },
    uploadImage: {
        alignSelf: "center",
        borderRadius: "100",
        width: 152,
        height: 152,
    },
    header: {
        alignSelf: "center",
        color: '#909090',
        fontSize: 28,
    },
    upText: {
        alignSelf: "center",
        color: '#909090',
        fontSize: 14,
  },
  privacyDiv: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 150,
  },
  privacyToggle: {
    alignSelf: "flex-end",
  },
  privacyText: {
    fontFamily: "BarlowCondensed_400Regular",
    color: "#909090",
    fontSize: 20,
  },
  privacyTextDescription: {
    fontFamily: "BarlowCondensed_400Regular",
    color: "#909090",
    fontSize: 20,
    alignSelf: "center",
    marginTop: 30,
  }
});

export default ProfileDescriptionContentDM;
