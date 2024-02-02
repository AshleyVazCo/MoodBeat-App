import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput } from "react-native"

const CreateSection = ({ onCloseModal }) => {

  const handleBack = () => {
    onCloseModal();
  };

  const [urlInput, setUrlInput] = useState("");

  return (
    <View style={styles.container}>
    <View style={styles.icons}>
        <TouchableOpacity onPress={handleBack}>
          <Text style={styles.settings}>X</Text>
        </TouchableOpacity>
          <Image
          style={styles.logo}
          source={require('../../assets/icons/logoPurple.png')}
        />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Song Details</Text>
      </View>
      <View style={styles.uploadContainer}>
        <TouchableOpacity>
          <Image style={styles.upload}
          source={require('../../assets/images/myloveMinePic.png')} 
          />
        </TouchableOpacity>
        <Text style={styles.upText}>Upload cover image</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Song Title"
          placeholderTextColor="#888"
          value={urlInput}
          onChangeText={text => setUrlInput(text)}
        />
        <TextInput
          style={styles.artist}
          placeholder="Artist Name"
          placeholderTextColor="#888"
          value={urlInput}
          onChangeText={text => setUrlInput(text)}
        />
        <Text style={styles.characters}>Character limit: 30</Text>
        <TextInput
          style={styles.hashtag}
          placeholder="#Enter a hashtag"
          placeholderTextColor="#888"
          value={urlInput}
          onChangeText={text => setUrlInput(text)}
        />
        <Text style={styles.hashInfo}>Hashtags must have a # symbol and no spaces.</Text>
        <Text style={styles.maxHash}>Maximum of 10 hashtags.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.exist}>
          <TouchableOpacity style={styles.buttonExist}>
            <Text style={styles.buttonText}>Existing Board</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.new}>
        <TouchableOpacity style={styles.buttonNew}>
            <Text style={styles.buttonText}>New Board</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: "#fffffc",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  settings: {
    marginRight: 315,
    marginLeft: 10,
    fontSize: 25,
    fontFamily: 'BarlowCondensed_400Regular',
  },
  logo: {
    marginRight: 10,
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  header: {
    fontFamily: 'BarlowCondensed_400Regular',
    fontSize: 35,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  uploadContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  upload: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  upText: {
    marginTop: 10,
    fontFamily: 'BarlowCondensed_400Regular',
  },
  inputContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    fontFamily: 'BarlowCondensed_400Regular',
    fontSize: 20,
  },
  artist: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    fontFamily: 'BarlowCondensed_400Regular',
    fontSize: 20,
  },
  hashtag: {
    height: 80,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    fontFamily: 'BarlowCondensed_400Regular',
    marginTop: 10,
    fontSize: 20,
  },
  characters: {
    fontFamily: 'BarlowCondensed_400Regular',
    fontSize: 15,
    marginTop: -10,
  },
  hashInfo: {
    fontFamily: 'BarlowCondensed_400Regular',
    fontSize: 15,
    marginTop: -10,
  },
  maxHash: {
    fontFamily: 'BarlowCondensed_400Regular',
    fontSize: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 50,
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 10,
    gap: 65,
  },
  buttonExist: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#43357A",
  },
  buttonNew: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#43357A",
  },
  buttonText: {
    color: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: 'BarlowCondensed_400Regular',
    fontSize: 20,
  },
});

export default CreateSection;