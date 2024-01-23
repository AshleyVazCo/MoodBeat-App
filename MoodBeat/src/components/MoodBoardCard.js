import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MoodBoardCard = ({ imageSource, title, onPress, cardColor }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.cardContainer, { backgroundColor: cardColor }]}>
      <Image source={{ uri: imageSource }} style={styles.cardImage} />
      <View style={styles.cardOverlay}>
        <Text style={styles.cardTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const imageSize = 152;

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 8,
    overflow: 'hidden',
    width: 168,
    height: 220,
  },
  cardImage: {
    width: imageSize,
    height: imageSize,
    borderRadius: 8,
    alignSelf: 'center', // Center the image within the card
    marginTop: 10, // Bring the image down by 10 pixels
  },
  cardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default MoodBoardCard;
