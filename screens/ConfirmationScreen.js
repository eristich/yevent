import React from 'react';
import { View, StyleSheet, Text, Image, Button } from 'react-native';

const ConfirmationScreen = ({ route, navigation }) => {

  console.log(route.params)
  const event = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirmation</Text>
      <View style={styles.imageContainer}>
        <Image source={{ uri: event.booking.qrCodeLink }} style={styles.qrCodeImage} />
      </View>
      <Text style={styles.eventText}>Tickets: N°{event.booking.id}</Text>
      <Text style={styles.eventText}>Event: {event.title}</Text>
      <Text style={styles.eventText}>Start Date: {event.startDate}</Text>
      <Text style={styles.eventText}>End Date: {event.endDate}</Text>
      <Text style={styles.eventText}>Address: {event.address}</Text>

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
  },
  buttonContainer: {
    marginTop: 'auto',
    width: '100%',
    paddingVertical: 10,
  },
});

export default ConfirmationScreen;
