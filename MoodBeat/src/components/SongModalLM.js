import React, { useCallback } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, Image, Linking } from 'react-native';

const SongModal = ({ isVisible, onClose }) => {

    const openSpotifyLink = useCallback(() => {
    const spotifyLink = 'https://open.spotify.com/track/3vkCueOmm7xQDoJ17W1Pm3?si=b6716e711ad641ce';
    Linking.openURL(spotifyLink);
        
  }, []);

  return (
    <Modal
      transparent
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <Image
              style={styles.image}
              source={{
                uri: 'https://images.unsplash.com/photo-1572916289328-eca59d6903ae?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              }}
            />
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.categoryTitle}>Classical</Text>
            <Image
              style={styles.coverImage}
              source={{
                uri: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=2819&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              }}
            />
          </View>
          <View style={styles.detailContainer}>
            <View style={styles.textColumn}>
              <Text style={styles.text}>My Love Mine all mine</Text>
              <Text style={styles.text}>Mitski</Text>
            </View>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button} onPress={() => console.log("Save pressed")}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => console.log("Share pressed")}>
                    <Text style={styles.buttonText}>Share</Text>
                </TouchableOpacity>
            </View>
            </View>
            <View style={styles.footerContainer}>
                <TouchableOpacity style={[styles.button, styles.linkButton]} onPress={openSpotifyLink}>
                    <Text style={[styles.buttonText, styles.linkButtonText]}>Spotify</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    height: 760,
    width: 380,
    backgroundColor: '#FFFFFC',
    padding: 20,
    borderRadius: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  closeButton: {
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#43357A',
    fontSize: 24,
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
    borderRadius: 15,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryTitle: {
    fontSize: 28,
    color: '#26282C',
  },
  coverImage: {
    width: 260,
    height: 260,
    resizeMode: 'cover',
    marginTop: 10, 
    borderRadius: 12,
  },
  detailContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textColumn: {
    flex: 1,
    marginRight: 20,
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: 18,
    color: '#26282C',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#43357A',
  },
  linkButton: {
    backgroundColor: '#EDEDED',
    width: 240,
    height: 44,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkButtonText: {
    color: '#3DAB50',
      
    },
  footerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 40
  }
});

export default SongModal;