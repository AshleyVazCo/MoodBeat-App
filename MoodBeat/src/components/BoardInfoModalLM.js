import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image} from "react-native";
import { Switch } from "react-native-gesture-handler";
import BoardInfoModalLM from "../components/BoardInfoModalLM";
import BoardTextModalLM from "../components/BoardTextModalLM";
import BoardBackgroundModalLM from "../components/BoardBackgroundModalLM";

const BoardInfo = ({ onCloseModal }) => {
    const [descriptionModalVisible, setDescriptionModalVisible] = useState(false);
    const [textModalVisible, setTextModalVisible] = useState(false);
    const [backgroundModalVisible, setBackgroundModalVisible] = useState(false);

    const handleToggleDescriptionModal = () => {
      setDescriptionModalVisible(!descriptionModalVisible);
    };

    const handleToggleTextModal = () => {
      setTextModalVisible(!textModalVisible);
    };

    const handleToggleBackgroundModal = () => {
      setBackgroundModalVisible(!backgroundModalVisible);
    };

  const [urlInput, setUrlInput] = useState("");

  const [privacy, setPrivacy] = useState(false);
  const toggleSwitch = () => setPrivacy((previousState) => !previousState);

  const handleCloseSectionModal = () => {
    setBoardInfoModalVisible(false);
  };

  const handleBack = () => {
    onCloseModal();
  };

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
      <View style={styles.navigation}>
        <TouchableOpacity onPress={handleToggleDescriptionModal}>
          <Text style={styles.buttonText}>Description</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleToggleTextModal}>
          <Text style={styles.buttonText}>Text</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleToggleBackgroundModal}>
          <Text style={styles.buttonText}>Background</Text>
        </TouchableOpacity>
      </View>
      <View>
      {descriptionModalVisible && (
        <BoardInfoModalLM onCloseModal={handleToggleDescriptionModal} />
      )}
      {textModalVisible && (
        <BoardTextModalLM onCloseModal={handleToggleTextModal} />
      )}
      {backgroundModalVisible && (
        <BoardBackgroundModalLM onCloseModal={handleToggleBackgroundModal} />
      )}
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Board Description</Text>
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
          placeholder="Board Title"
          placeholderTextColor="#888"
          value={urlInput}
          onChangeText={text => setUrlInput(text)}
        />
      </View>
      <Text style={styles.categoryText}>Select a category below</Text>
      <View style={styles.cateGories}>
        <View style={styles.categoriesOne}>
          <TouchableOpacity>
            <Text style={styles.motivation}>Motivation</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.energetic}>Energetic</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.categoriesTwo}>
          <TouchableOpacity>
            <Text style={styles.concentration}>Concentration</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.expressive}>Expressive</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.categoriesThree}>
          <TouchableOpacity>
            <Text style={styles.relaxation}>Relaxation</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.privacy}>
        <Text style={styles.privateBoard}>Private Board</Text>
        <Switch
        trackColor={{ false: "#fffffc", true: "#26282c"}}
        thumbColor={privacy ? "#26282c" : "#fffffc"}
        onValueChange={toggleSwitch}
        value={setPrivacy}
        style={styles.privacyToggle}
        />
      </View>
      <BoardTextModalLM onCloseModal={handleCloseSectionModal} />
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
    marginTop: 60,
  },
  header: {
    fontFamily: 'BarlowCondensed_400Regular',
    fontSize: 35,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  uploadContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  upload: {
    width: 200,
    height: 200,
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
  categoryText: {
    fontFamily: 'BarlowCondensed_400Regular',
    fontSize: 15,
    marginLeft: 10,
  },
  categoriesOne: {
    flexDirection: "row",
  },
  motivation: {
    fontFamily: 'BarlowCondensed_400Regular',
    marginRight: 100,
    marginLeft: 50,
    fontSize: 20,
    color: "#43357A",
    marginTop: 10,
  },
  energetic: {
    fontFamily: 'BarlowCondensed_400Regular',
    marginRight: 25,
    marginLeft: 25,
    fontSize: 20,
    color: "#43357A",
    marginTop: 10,
  },
  categoriesTwo: {
    flexDirection: "row",
  },
  concentration: {
    fontFamily: 'BarlowCondensed_400Regular',
    marginRight: 100,
    marginLeft: 50,
    fontSize: 20,
    color: "#43357A",
    marginTop: 10,
  },
  expressive: {
    fontFamily: 'BarlowCondensed_400Regular',
    marginRight: 25,
    fontSize: 20,
    color: "#43357A",
    marginTop: 10,
  },
  categoriesThree: {
    flexDirection: "row",
  },
  relaxation: {
    fontFamily: 'BarlowCondensed_400Regular',
    marginRight: 100,
    marginLeft: 50,
    fontSize: 20,
    color: "#43357A",
    marginTop: 10,
  },
  privacy: {
    flexDirection: "row",
    marginLeft: 25,
  },
  privateBoard: {
    fontFamily: 'BarlowCondensed_400Regular',
    fontSize: 20,
    marginRight: 150,
    marginTop: 20,
  },
  privacyToggle: {
    marginTop: 20,
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    fontFamily: 'BarlowCondensed_400Regular',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'BarlowCondensed_400Regular',
  },
});

export default BoardInfo;