import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, Platform } from "react-native";
import * as ImagePicker from 'expo-image-picker';

const CreateSection = ({ onCloseModal }) => {
  const handleBack = () => {
    onCloseModal();
  };

  const [urlInput, setUrlInput] = useState("");
  const [artistName, setArtistName] = useState("");
  const [hashtag, setHashtag] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handleArtistChange = (text) => {
    if (text.length <= 30) {
      setArtistName(text);
    }
  };

  const handleHashtagChange = (text) => {
    if (text.length === 0 || (text.charAt(0) === '#' && !text.includes(' '))) {
      setHashtag(text);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.icons}>
        <TouchableOpacity onPress={handleBack}>
          <Text style={styles.settings}>X</Text>
        </TouchableOpacity>
        <Image
          style={styles.logo}
          source={require('../../assets/icons/logoWhite.png')}
        />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Song Details</Text>
      </View>
<View style={styles.uploadContainer}>
  <TouchableOpacity onPress={pickImage}>
    {image ? (
      <Image source={{ uri: image }} style={styles.upload} />
    ) : (
      <View style={styles.upload}>
        <Image
          style={styles.upload}
          source={require('../../assets/images/upload.png')}
        />
        <Text style={styles.upText}>Upload cover image</Text>
      </View>
    )}
  </TouchableOpacity>
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
          placeholder="Artist Name (Max 30 characters)"
          placeholderTextColor="#888"
          value={artistName}
          onChangeText={handleArtistChange}
        />
        <Text style={styles.hashtagLimit}>Character limit: 30</Text>
        <TextInput
          style={styles.hashtag}
          placeholder="#Enter a hashtag"
          placeholderTextColor="#888"
          value={hashtag}
          onChangeText={handleHashtagChange}
        />
        <Text style={styles.hashtagInfo}>Hashtags must start with '#' and contain no spaces</Text>
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#26282C',
    height: 760,
    width: 380,
    flex: 1,
    borderRadius: 20,
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
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
    color: "#CA9CE1",
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
    color: "#909090",
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
    color: "#909090"
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
    color: '#909090'
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
  hashtagLimit: {
    fontFamily: 'BarlowCondensed_400Regular',
    fontSize: 15,
    marginTop: -10,
    color: "#909090"
  },
  hashtagInfo: {
    fontFamily: 'BarlowCondensed_400Regular',
    fontSize: 15,
    marginTop: -10,
    color: "#909090",
  },
  maxHash: {
    fontFamily: 'BarlowCondensed_400Regular',
    fontSize: 15,
    color: "#909090",
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
    backgroundColor: "#4f4f4f",
  },
  buttonNew: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4f4f4f",
  },
  buttonText: {
    color: "#CA9CE1",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: 'BarlowCondensed_400Regular',
    fontSize: 20,
  },
});

export default CreateSection;
