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
});

export default MoodBoardCard;
