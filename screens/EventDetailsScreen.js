import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { dateToFrenchFormat } from '../lib/utils';
import MDIDateRange from '../assets/mdi--date-range.svg';
import MDIMapMarker from '../assets/mdi--map-marker.svg';

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
      <View style={styles.detailRow}>
        <Image source={MDIDateRange} />
        <Text style={styles.date}>{dateToFrenchFormat(startDate)}</Text>
      </View>
      <View style={styles.detailRow}>
        <Image source={MDIMapMarker} />
        <Text style={styles.date}>{address}</Text>
      </View>
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
    textAlig: 'left',
    marginBottom: 20,
  },
  date: {
    fontSize: 16,
    fontWeight: 600,
    color: '#000',
    textTransform: 'capitalize',
  },
  buttonContainer: {
    marginTop: 'auto',
    width: '100%',
    paddingVertical: 10,
  },
  description: {
    fontSize: 16,
    color: '#000',
    marginTop: 20,
    textAlign: 'justify',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 4,
    border: '2px solid #ccc',
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});

export default EventDetailsScreen;
