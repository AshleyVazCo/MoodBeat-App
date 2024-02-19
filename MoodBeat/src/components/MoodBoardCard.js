import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MoodBoardCard = ({ id, imageSource, title, onPress, cardColor }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.cardContainer, { backgroundColor: cardColor, height: 211 }]}>
      <Image source={imageSource} style={styles.cardImage} />
      <View style={styles.cardOverlay}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardId}>{id}</Text>
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
    alignSelf: 'center',
    marginTop: 10,
  },
  cardOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardId: {
    fontSize: 14,
    color: '#fff',
  },
});

export default MoodBoardCard;

