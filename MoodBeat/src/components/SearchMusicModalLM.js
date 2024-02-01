import React, {useState} from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, Modal } from "react-native";
import CreateSectionModalLM from "../components/CreateSectionModalLM";

const SearchMusic = ({ onCloseModal }) => {
  const [urlInput, setUrlInput] = useState("");
  const [createSectionVisible, setCreateSectionModalVisible] = useState(false);

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

  return (
    <View style={styles.container}>
      <View style={styles.icons}>
        <TouchableOpacity onPress={handleBack}>
          <Text style={styles.settings}>X</Text>
        </TouchableOpacity>
          <Image
          style={styles.logo}
          source={require('../../assets/icons/apple_Light.png')}
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
        />
      </View>
      <View style={styles.iconsTwo}>
        <TouchableOpacity>
          <Image source={require('../../assets/icons/apple_Light.png')} 
            style={styles.apple}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../assets/icons/apple_Light.png')} 
            style={styles.spotify}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../assets/icons/apple_Light.png')} 
            style={styles.soundcloud}
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
            style={styles.closeModalButton}
            onPress={handleCloseSectionModal}
          >
            <Text style={styles.closeModalButtonText}>Close Modal</Text>
          </TouchableOpacity>
          {/* Your section modal content here */}
          <CreateSectionModalLM onCloseModal={handleCloseSectionModal} />
        </View>
      </Modal>
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
    marginRight: 275,
    fontSize: 25,
    fontFamily: 'BarlowCondensed_400Regular',
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
  },
  regularText: {
    fontFamily: 'BarlowCondensed_400Regular',
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 20,
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
  },
  iconsTwo: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 100,
    backgroundColor: "#43357A",
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
    color: "#ffffff",
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
  closeModalButton: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginTop: 55,
    marginRight: 250,
  },
  closeModalButtonText: {
    fontFamily: "BarlowCondensed_400Regular",
    fontSize: 18,
  },
});

export default SearchMusic;