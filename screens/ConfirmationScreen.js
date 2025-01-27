import React from 'react';
import { View, StyleSheet, Text, Image, Button } from 'react-native';
import { dateToFrenchFormat } from '../lib/utils';
import MDIDateRange from '../assets/mdi--date-range.svg';
import MDIMapMarker from '../assets/mdi--map-marker.svg';
import { FlatList } from 'react-native-web';

const ConfirmationScreen = ({ route, navigation }) => {

  console.log(route.params)
  const event = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{event.title}</Text>
      <View style={styles.detailRow}>
        <Image source={MDIDateRange} />
        <Text style={styles.date}>{dateToFrenchFormat(event.startDate)}</Text>
      </View>
      <View style={styles.detailRow}>
        <Image source={MDIMapMarker} />
        <Text style={styles.date}>{event.address}</Text>
      </View>

      <FlatList
        data={event.booking.orderedTickets}
        style={{ marginTop: 20 }}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Text style={styles.eventText}>Ticket: N°{item}</Text>
            <Image source={{ uri: 'https://api.qrserver.com/v1/create-qr-code/?size=240x240&data='+item }} style={styles.qrCodeImage} />
          </View>
        )}
      />

      <View style={styles.buttonContainer}>
        <Button
          title="Continuer"
          onPress={() => navigation.navigate('Home')}
          color="#007BFF"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrCodeImage: {
    height: 240,
    width: 240,
    // borderWidth: 4,
    // borderColor: '#ccc',
    // borderRadius: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 20,
  },
  eventText: {
    fontSize: 16,
    color: '#000',
    marginTop: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 'auto',
    width: '100%',
    paddingVertical: 10,
  },
  date: {
    fontSize: 16,
    fontWeight: 600,
    color: '#000',
    textTransform: 'capitalize',
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});

export default ConfirmationScreen;
