import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { dateToFrenchFormat } from '../lib/utils';

const UIEventCard = ({ image, title, date }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{dateToFrenchFormat(date)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    // borderWidth: 1,
    borderWidth: 3,
    borderColor: '#ddd',
    // borderRadius: 8,
    borderRadius: 4,
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    // shadowColor: '#000',
    // shadowOpacity: 0.1,
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  date: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
    textTransform: 'capitalize',
  },
});

export default UIEventCard;
