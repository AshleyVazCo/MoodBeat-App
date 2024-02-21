import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SettingScreenDM = () => {
  const navigation = useNavigation();
  const [activeOption, setActiveOption] = useState(null);

  const onClose = () => {
    navigation.goBack();
  };
  const onLogOutPress = () => {
    navigation.navigate("LoginScreenDM");
  };
  const options = [
    { title: "Personal Info", content: "", image: require('../../assets/icons/personalInfoIcon_Dark.png') },
    { title: "About", content: "Content for About", image: require('../../assets/icons/aboutIcon_Dark.png') },
    { title: "Contact", content: "Content for Contact", image: require('../../assets/icons/contactIcon_Dark.png') },
    { title: "Your Account", content: "", image: require('../../assets/icons/accountIcon_Dark.png') },
  ];
  const aboutContent = [
    { topic: "MoodBeat", description: "MoodBeat is an app dedicated to creating music moodboards based on your mood. Using keywords, we help generate the best boards for you.", image: require('../../assets/icons/logoWhite.png') },
    { topic: "Apple Music", description: "Apple Music is an iOS music application that we pull songs from to add to your moodboards. If you have saved songs, feel free to import them here.", image: require('../../assets/icons/appleTinyIcon.png') },
    { topic: "Spotify", description: "Spotify is one of the most popular music applications that we pull songs from to add to your moodboards. If you have saved songs, feel free to import them here.", image: require('../../assets/icons/spotifyTinyIcon.png') },
    { topic: "Soundcloud", description: "Soundcloud is a music application that we pull songs from local artists to add to your moodboards. If you have saved songs, feel free to import them here.", image: require('../../assets/icons/soundcloudTinyIcon.png') },
  ];
  const contactContent = [
    { topic: "Instagram", description: "To check out the latest updates, follow us on Instagram @mood.beat", image: require('../../assets/icons/instagramDM.png') },
    { topic: "Email", description: "For any additional questions or issues with the app, email us at moodbeat@gmail.com.", image: require('../../assets/icons/emailDM.png') },
    { topic: "TikTok", description: "To check out our fun content, follow us on TikTok @mood.beat", image: require('../../assets/icons/tiktokDM.png') },
  ];
const accountContent = [
  { title: "Delete Account", onPress: () => handleDeleteAccount(), color: "#FF3B30" },
  { title: "Light Mode", onPress: () => navigation.navigate("LoginScreenLM"), color: "#FFFFFF" },
];
  const toggleAccordion = (index) => {
    setActiveOption(activeOption === index ? null : index);
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
                    />
                    <TextInput
                      placeholder="Email"
                      style={styles.input}
                      placeholderTextColor={'#909090'}
                    />
                    <TextInput
                      placeholder="Username"
                      style={styles.input}
                      placeholderTextColor={'#909090'}
                    />
                    <TextInput
                      placeholder="Password"
                      secureTextEntry
                      style={styles.input}
                      placeholderTextColor={'#909090'}
                    />
                    <TextInput
                      placeholder="Phone Number"
                      style={styles.input}
                      placeholderTextColor={'#909090'}
                    />
                  </>
                )}
                {option.title === "About" && (
                  <>
                    {aboutContent.map((item, i) => (
                      <View key={i} style={styles.aboutContentItem}>
                        <Image source={item.image} style={styles.aboutContentImage} />
                        <Text style={styles.aboutContentTopic}>{item.topic}</Text>
                        <Text style={styles.aboutContentDescription}>{item.description}</Text>
                      </View>
                    ))}
                  </>
                )}
                {option.title === "Contact" && (
                  <>
                    {contactContent.map((item, i) => (
                      <View key={i} style={styles.contactContentItem}>
                        <Image source={item.image} style={styles.contactContentImage} />
                        <Text style={styles.contactContentTopic}>{item.topic}</Text>
                        <Text style={styles.contactContentDescription}>{item.description}</Text>
                      </View>
                    ))}
                  </>
                )}
                {option.title !== "Personal Info" && option.title !== "About" && option.title !== "Contact" && (
                  <Text style={styles.optionContentText}>{option.content}</Text>
                )}
                              {option.title === "Your Account" && (
                <>
                  {accountContent.map((item, i) => (
                    <TouchableOpacity
                      key={i}
                      style={[
                        styles.button,
                        { backgroundColor: item.color },
                        item.title === "Delete Account" ? styles.deleteButton : styles.deleteButtonText,
                      ]}
                      onPress={item.onPress}
                    >
                      <Text style={[
                        styles.buttonText,
                        item.title === "Delete Account" ? styles.lightButton : styles.lightButtonText,
                        { color: item.title === "Delete Account" ? "#FFFFFF" : "#26282C" },
                      ]}>
                        {item.title}
                      </Text>
                    </TouchableOpacity>
                  ))}
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
            onPress={() => console.log("Save Changes pressed")}
          >
            <Text style={styles.buttonText}>Save Changes</Text>
          </TouchableOpacity>
        </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#26282C",
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
    color: "#CA9CE1",
    fontSize: 24,
  },
  title: {
    alignItems: "center",
    justifyContent: 'center',
    height: 40
  },
  titleText: {
    fontFamily: "BarlowCondensed_400Regular",
    color: "#909090",
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
    color: "#909090",
    fontFamily: "BarlowCondensed_400Regular",
    marginLeft: 20
  },
  optionContent: {
    padding: 10,
  },
  optionContentText: {
    color: "#909090",
  },
  input: {
    borderRadius: 10,
    width: '80%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#909090',
    color: '#909090',
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
    color: "#909090",
    fontFamily: "BarlowCondensed_400Regular",
    marginBottom: 2,
    margin: 20
  },
  aboutContentDescription: {
    color: "#909090",
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
    color: "#909090",
    fontFamily: "BarlowCondensed_400Regular",
    marginBottom: 2,
    margin: 20
  },
  contactContentDescription: {
    color: "#909090",
    margin: 20
  },
    button: {
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: "#26282C",
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
    backgroundColor: '#FFFFF5',
    padding: 10,
    borderRadius: 10,
    width: '65%',
    height:44,
    alignItems: 'center',
    margin: 12,
    justifyContent: 'center'
  },
  saveChangesButton: {
    backgroundColor: '#CA9CE1',
    padding: 10,
    borderRadius: 10,
    width: '65%',
    height: 44,
    alignItems: 'center',
    margin: 7,
    justifyContent: 'center',
  },
});

export default SettingScreenDM;
