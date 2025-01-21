import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const EventDetailsScreen = ({ route, navigation }) => {
  // Récupération des paramètres passés via la navigation
  const { image, title, description, startDate, endDate, address, maxTickets, ticketsSold } = route.params;
  console.log(route.params);

  // Verifier s'il reste des tickets
  const isSoldOut = !(maxTickets - ticketsSold > 0);

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>Date : {startDate}</Text>
      <Text style={styles.date}>Adresse : {address}</Text>
      <Text style={styles.description}>{description}</Text>

      <View style={styles.buttonContainer}>
        <Button
          title={isSoldOut ? 'Evenement complet :(' : 'Réserver des billets'}
          onPress={() => navigation.navigate('MakeBooking', {...route.params})}
          color="#007BFF"
          disabled={isSoldOut}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'left',
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlig: 'left'
  },
  date: {
    fontSize: 16,
    color: '#000',
    marginTop: 4,
  },
  buttonContainer: {
    marginTop: 'auto',
    width: '100%',
    paddingVertical: 10,
  },
  description: {
    fontSize: 16,
    color: '#000',
    marginTop: 10,
    textAlign: 'justify'
  },
});

export default EventDetailsScreen;
