import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image, TextInput, Switch } from "react-native";
import * as ImagePicker from 'expo-image-picker';

const DescriptionContent = () => {
  const [image, setImage] = useState(null);
  const [boardDescription, setBoardDescription] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [isPrivate, setIsPrivate] = useState(false);

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

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
    
  const togglePrivacy = () => {
    setIsPrivate((prev) => !prev);
  };


  return (
      <View style={styles.container}>
              <View style={styles.tabContainer}>
      <Text style={styles.header}>Board Description</Text>
    
      <View style={styles.uploadContainer}>
        <TouchableOpacity style={styles.imageContainer} onPress={pickImage}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} />
          ) : (
            <>
              <Image
                style={styles.uploadIcon}
                source={require('../../assets/images/upload.png')}
              />
              <Text style={styles.upText}>Upload cover image</Text>
            </>
          )}
        </TouchableOpacity>
      </View>
    
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Board Title"
          placeholderTextColor="#909090"
          value={boardDescription}
          onChangeText={(text) => setBoardDescription(text)}
        />
      </View>
      
      <View style={styles.optionsContainer}>
  <Text style={styles.text}>Select a category below</Text>
  {[
    "Motivation",
    "Energetic",
    "Concentration",
    "Expressive",
    "Relaxation",
  ].map((option) => (
    <TouchableOpacity
      key={option}
      style={[
        styles.option,
        selectedOption === option && styles.selectedOption,
      ]}
      onPress={() => handleOptionSelect(option)}
    >
      {/* Update the Text component style conditionally */}
      <Text style={[
        styles.optionText,
        selectedOption === option ? { color: '#FFFFFC' } : {},
      ]}>
        {option}
      </Text>
    </TouchableOpacity>
  ))}
</View>

                <View style={styles.privacyContainer}>
        <Text style={styles.text}>Private Board</Text>
        <Switch
          trackColor={{ false: "#4F4F4F", true: "#4F4F4F" }}
          thumbColor={isPrivate ? "#FFFFFC" : "#4F4F4F"}
          ios_backgroundColor="#FFFFFC"
          onValueChange={togglePrivacy}
          value={isPrivate}
        />
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
    color: '#43357A',
    fontSize: 17,
    marginBottom: 20,
    },
  header: {
    color: '#43357A',
    fontSize: 17,
    marginBottom: 20,
    marginLeft: 100
  },
  uploadContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderRadius: 10,
    width: 327,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#26282C',
    color: '#909090',
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 152,
    height: 152,
    marginBottom: 0,
  },
  uploadIcon: {
    width: 152,
    height: 152,
    marginBottom: 0,
  },
  upText: {
    color: '#909090',
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 0,
  },
  option: {
    width: '45%',
    margin: 5,
    padding: 10,
    borderRadius: 5,
  },
  selectedOption: {
    backgroundColor: '#7700E6',
    color: '#FFFFFC',
  },
  optionText: {
    color: '#43357A',
    },
  privacyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    },
});

export default DescriptionContent;
