import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SettingScreenLM = () => {
  const navigation = useNavigation();
  const [activeOption, setActiveOption] = useState(null);
  const [formValues, setFormValues] = useState({
    fullName: "Alan Giraldo",
    email: "alangiraldo@ucf.edu",
    username: "Alan",
    password: "••••••••",
    phoneNumber: "407-000-0000",
  });

  const onClose = () => {
    navigation.goBack();
  };

  const onLogOutPress = () => {
    navigation.navigate("LoginScreenDM");
  };

  const options = [
    { title: "Personal Info", content: "", image: require('../../assets/icons/personalInfoIcon.png') },
    { title: "About", content: "Content for About", image: require('../../assets/icons/aboutIcon.png') },
    { title: "Contact", content: "Content for Contact", image: require('../../assets/icons/contactIcon.png') },
    { title: "Your Account", content: "", image: require('../../assets/icons/accountIcon.png') },
  ];

  const aboutContent = [
    { topic: "MoodBeat", description: "MoodBeat is an app dedicated to creating music moodboards based on your mood. Using keywords, we help generate the best boards for you.", image: require('../../assets/icons/logoPurple.png') },
    { topic: "Apple Music", description: "Apple Music is an iOS music application that we pull songs from to add to your moodboards. If you have saved songs, feel free to import them here.", image: require('../../assets/icons/appleTinyIcon.png') },
    { topic: "Spotify", description: "Spotify is one of the most popular music applications that we pull songs from to add to your moodboards. If you have saved songs, feel free to import them here.", image: require('../../assets/icons/spotifyTinyIcon.png') },
    { topic: "Soundcloud", description: "Soundcloud is a music application that we pull songs from local artists to add to your moodboards. If you have saved songs, feel free to import them here.", image: require('../../assets/icons/soundcloudTinyIcon.png') },
  ];

  const contactContent = [
    { topic: "Instagram", description: "To check out the latest updates, follow us on Instagram @mood.beat", image: require('../../assets/icons/instagramLM.png') },
    { topic: "Email", description: "For any additional questions or issues with the app, email us at moodbeat@gmail.com.", image: require('../../assets/icons/emailLM.png') },
    { topic: "TikTok", description: "To check out our fun content, follow us on TikTok @mood.beat", image: require('../../assets/icons/tiktokLM.png') },
  ];

  const accountContent = [
    { title: "Delete Account", onPress: () => handleDeleteAccount(), color: "#FF3B30" },
    { title: "Dark Mode", onPress: () => navigation.navigate("LoginScreenDM"), color: "#FFFFFF" },
  ];

  const toggleAccordion = (index) => {
    setActiveOption(activeOption === index ? null : index);
  };

  const handleChange = (key, value) => {
    setFormValues({ ...formValues, [key]: value });
  };

  const saveChanges = () => {
    console.log("Changes saved:", formValues);
  };

  return (
    <KeyboardAwareScrollView
      style={styles.background}
      contentContainerStyle={styles.scrollContainer}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>Settings</Text>
      </View>
      <ScrollView style={styles.accordionContainer}>
        {options.map((option, index) => (
          <View
            key={index}
            style={[
              styles.options,
              {
                borderBottomColor: "#3B3B3B",
                borderBottomWidth: 1,
              },
            ]}
          >
            <TouchableOpacity
              style={styles.optionHeader}
              onPress={() => toggleAccordion(index)}
            >
              <Image source={option.image} style={styles.optionImage} />
              <Text style={styles.optionTitle}>{option.title}</Text>
            </TouchableOpacity>
            {activeOption === index && (
              <View style={styles.optionContent}>
                {option.title === "Personal Info" && (
                  <>
                    <TextInput
                      placeholder="Full Name"
                      style={styles.input}
                      placeholderTextColor={'#909090'}
                      value={formValues.fullName}
                      onChangeText={(text) => handleChange("fullName", text)}
                    />
                    <TextInput
                      placeholder="Email"
                      style={styles.input}
                      placeholderTextColor={'#909090'}
                      value={formValues.email}
                      onChangeText={(text) => handleChange("email", text)}
                    />
                    <TextInput
                      placeholder="Username"
                      style={styles.input}
                      placeholderTextColor={'#909090'}
                      value={formValues.username}
                      onChangeText={(text) => handleChange("username", text)}
                    />
                    <TextInput
                      placeholder="Password"
                      secureTextEntry
                      style={styles.input}
                      placeholderTextColor={'#909090'}
                      value={formValues.password}// Password dots
                      onChangeText={(text) => handleChange("password", text)}
                    />
                    <TextInput
                      placeholder="Phone Number"
                      style={styles.input}
                      placeholderTextColor={'#909090'}
                      value={formValues.phoneNumber}
                      onChangeText={(text) => handleChange("phoneNumber", text)}
                    />
                  </>
                )}
              </View>
            )}
          </View>
        ))}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.logOutButton}
          onPress={onLogOutPress}
        >
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.saveChangesButton}
          onPress={saveChanges}
        >
          <Text style={styles.buttonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#FFFFFC",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: 'center',
    height: 140,
    padding: 30,
  },
  closeButton: {
    borderRadius: 12,
  },
  closeButtonText: {
    color: "#43357A",
    fontSize: 24,
  },
  title: {
    alignItems: "center",
    justifyContent: 'center',
    height: 40
  },
  titleText: {
    fontFamily: "BarlowCondensed_400Regular",
    color: "#26282C",
    fontSize: 30,
  },
  accordionContainer: {
    flex: 1,
    marginTop: 40
  },
  options: {
    marginBottom: 10,
    borderRadius: 8,
    overflow: "hidden",
  },
  optionHeader: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  optionImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  optionTitle: {
    fontSize: 22,
    color: "#26282C",
    fontFamily: "BarlowCondensed_400Regular",
    marginLeft: 20
  },
  optionContent: {
    padding: 10,
  },
  optionContentText: {
    color: "#26282C",
  },
  input: {
    borderRadius: 10,
    width: '80%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#26282C',
    color: '#26282C',
  },
  aboutContentItem: {
    marginBottom: 20,
  },
  aboutContentImage: {
    width: 35,
    height: 35,
    marginBottom: 10,
  },
  aboutContentTopic: {
    fontSize: 18,
    color: "#26282C",
    fontFamily: "BarlowCondensed_400Regular",
    marginBottom: 2,
    margin: 20
  },
  aboutContentDescription: {
    color: "#26282C",
    margin: 20
  },
    contactContentItem: {
    marginBottom: 20,
  },
  contactContentImage: {
    width: 27,
    height: 27,
    marginBottom: 10,
  },
  contactContentTopic: {
    fontSize: 18,
    color: "#26282C",
    fontFamily: "BarlowCondensed_400Regular",
    marginBottom: 2,
    margin: 20
  },
  contactContentDescription: {
    color: "#26282C",
    margin: 20
  },
    button: {
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: "#FFFFFC",
    fontSize: 18,
    fontFamily: "BarlowCondensed_400Regular",
  },
      buttonContainer: {
    width: '100%',
    height: '50%',
    marginBottom: 90,
    marginLeft: 60,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  logOutButton: {
    backgroundColor: '#26282C',
    padding: 10,
    borderRadius: 10,
    width: '65%',
    height:44,
    alignItems: 'center',
    margin: 12,
    justifyContent: 'center'
  },
  saveChangesButton: {
    backgroundColor: '#7700E6',
    padding: 10,
    borderRadius: 10,
    width: '65%',
    height: 44,
    alignItems: 'center',
    margin: 7,
    justifyContent: 'center',
  },
    deleteButton: {
    backgroundColor: "#FF3B30",
  },
  deleteButtonText: {
    color: "#FFFFFF",
  },
  darkModeButton: {
    backgroundColor: "#26282C",
  },
  darkModeButtonText: {
    color: "#FFFFFC",
  },
});

export default SettingScreenLM;