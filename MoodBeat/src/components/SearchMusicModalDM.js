import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, Modal } from "react-native";
import CreateSectionModalDM from "../components/CreateSectionModalDM";

const SearchMusic = ({ onCloseModal }) => {
  const [urlInput, setUrlInput] = useState("");
  const [createSectionVisible, setCreateSectionModalVisible] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);

  const ImportingSongs = () => {
    setCreateSectionModalVisible(true);
    console.log("Import Songs pressed");
  };

  const handleCloseSectionModal = () => {
    setCreateSectionModalVisible(false);
  };

  const handleBack = () => {
    onCloseModal();
  };

  const handleIconPress = (iconName) => {
    setSelectedIcon(iconName === selectedIcon ? null : iconName);
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
        <Text style={styles.header}>Find Your Songs</Text>
      </View>
      <View>
        <Text style={styles.regularText}>Already have songs on another platform? No worries!
        Just import them here with a simple URL link, click the app it’s on, and have a better mood!</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="URL"
          placeholderTextColor="#888"
          value={urlInput}
          onChangeText={text => setUrlInput(text)}
          keyboardType="url"
        />
      </View>
      <View style={styles.iconsTwo}>
        <TouchableOpacity onPress={() => handleIconPress('apple')}>
          <Image source={require('../../assets/icons/appleTinyIcon.png')} 
            style={[styles.apple, selectedIcon === 'apple' ? styles.selectedIcon : null]}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIconPress('spotify')}>
          <Image source={require('../../assets/icons/spotifyTinyIcon.png')} 
            style={[styles.spotify, selectedIcon === 'spotify' ? styles.selectedIcon : null]}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIconPress('soundcloud')}>
          <Image source={require('../../assets/icons/soundcloudTinyIcon.png')} 
            style={[styles.soundcloud, selectedIcon === 'soundcloud' ? styles.selectedIcon : null]}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button}
          onPress={ImportingSongs}>
          <Text style={styles.buttonText}>Import Songs</Text>
        </TouchableOpacity>

        <Modal
          animationType="none"
          transparent={true}
          visible={createSectionVisible}
          onRequestClose={handleCloseSectionModal}
        >
          <View style={styles.modalContainer}>
            <TouchableOpacity
              onPress={handleCloseSectionModal}
            >
              <Text style={styles.closeModalButtonText}>X</Text>
            </TouchableOpacity>
            {/* Your section modal content here */}
            <CreateSectionModalDM onCloseModal={handleCloseSectionModal} />
          </View>
        </Modal>
      </View>
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: "#26282C",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  settings: {
    marginRight: 275,
    fontSize: 25,
    fontFamily: 'BarlowCondensed_400Regular',
    color: "#CA9CE1"
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  header: {
    fontFamily: 'BarlowCondensed_400Regular',
    fontSize: 35,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
    color: "#909090",
  },
  regularText: {
    fontFamily: 'BarlowCondensed_400Regular',
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 20,
    color: "#909090",
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
  iconsTwo: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 100,
    backgroundColor: "#4f4f4f",
    marginLeft: 100,
    marginRight: 100,
    borderRadius: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#CA9CE1",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: 'BarlowCondensed_400Regular',
    fontSize: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  selectedIcon: {
    width: 40, // slightly bigger
    height: 40, // slightly bigger
  }
});

export default SearchMusic;

