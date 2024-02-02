import React, { useCallback } from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
  Share,
  TouchableHighlight,
} from "react-native";

const MyMusicSectionDM = ({ isVisible, onClose }) => {
  const openAppleMusicLink = useCallback(() => {
    const appleMusicLink =
      "https://music.apple.com/us/album/you-not-the-same/1587061964?i=1587061965";
    Linking.openURL(appleMusicLink);
  }, []);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "Share Screen?",
      });
      if (result.action === Share.sharedAction) {
        console.log("Share was successful");
      } else if (result.action === Share.dismissedAction) {
        console.log("Share was dismissed");
      }
    } catch (error) {
      console.error("Error sharing:", error.message);
    }
  };

  return (
    <Modal transparent visible={isVisible} onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <Image
              style={styles.image}
              source={require("../../assets/icons/logoWhite.png")}
            />
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.categoryTitle}>Ambience</Text>
            <Image
              style={styles.coverImage}
              source={require("../../assets/images/YouNotTheSame.png")}
            />
          </View>
          <View style={styles.detailContainer}>
            <View style={styles.textColumn}>
              <Text style={styles.text}>You Not The Same</Text>
              <Text style={styles.text}>TileKid</Text>
            </View>
            <View style={styles.buttonRow}>
              <TouchableHighlight onPress={onShare} underlayColor="transparent">
                <Image
                  style={styles.iconButton}
                  source={require("../../assets/icons/shareIcon_Dark.png")}
                />
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.footerContainer}>
            <TouchableOpacity
              style={[styles.button, styles.linkButton]}
              onPress={openAppleMusicLink}
            >
              <Text style={[styles.buttonText, styles.linkButtonText]}>
                Apple Music
              </Text>
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    height: 760,
    width: 380,
    backgroundColor: "#26282C",
    padding: 20,
    borderRadius: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  closeButton: {
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButtonText: {
    color: "#CA9CE1",
    fontSize: 24,
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: "cover",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryTitle: {
    fontSize: 28,
    color: "#7B7B7B",
  },
  coverImage: {
    width: 260,
    height: 260,
    resizeMode: "cover",
    marginTop: 10,
    borderRadius: 12,
  },
  detailContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textColumn: {
    flex: 1,
    marginRight: 20,
  },
  buttonRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginRight: -20,
  },
  text: {
    fontSize: 18,
    color: "#7B7B7B",
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "#FB233C",
  },
  linkButton: {
    backgroundColor: "#3A3A3A",
    width: 240,
    height: 44,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  linkButtonText: {
    color: "#FB233C",
  },
  footerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
    marginBottom: 40,
  },
  iconButton: {
    width: 35,
    height: 35,
  },
});

export default MyMusicSectionDM;
