import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import TicketSelectorCount from '../components/TicketCountSelector';
import { usePocket } from '../contexts/PocketContext';

const MakeBookingScreen = ({ navigation, route }) => {

  console.log(route.params);
  const { pb } = usePocket();
  const { id, maxTickets, ticketsSold } = route.params;

  const [ticketCount, setTicketCount] = React.useState(0);
  const [name, setName] = React.useState('Estéban Ristich');
  const [email, setEmail] = React.useState('esteban.ristich@protonmail.com');

  const confirmBooking = async () => {
    console.log('Réservation confirmée !');
    // 1. request to pocketbase api to create booking and tickets
    // 1.1. update event ticket sold count
    // await pb.collection('events').update(id, {
    //   ticketsSold: ticketsSold + ticketCount,
    // });

    // // 1.2. create ticket(s)
    // const tickets = [];
    // for (let i = 0; i < ticketCount; i++) {
    //   const ticket = await pb.collection('tickets').create({});
    //   tickets.push(ticket);
    // }

    // // 1.3. create booking
    // const booking = await pb.collection('bookings').create({
    //   purchaserName: name,
    //   purchaserEmail: email,
    //   orderedTickets: tickets.map((ticket) => ticket.id),
    //   event: id,
    // }, { expand: 'orderedTickets' });

    // *1. generate fake booking id, qr code
    const bookingId = Math.floor(Math.random() * 1000000000000)
    const booking = {
      id: bookingId,
      qrCodeLink: 'https://api.qrserver.com/v1/create-qr-code/?size=240x240&data='+bookingId,
    }

    // 2. then finish -> navigate to confirmation screen
    navigation.navigate('Confirmation', {
      // infos de la réservation/confirmation récupéré depuis l'API
      ...route.params,
      booking: booking,
    });
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Réservation d'événement</Text>
      <TicketSelectorCount 
        ticketCount={ticketCount} 
        onIncrement={() => setTicketCount(prev => prev + 1)} 
        onDecrement={() => setTicketCount(prev => prev - 1)} 
      />
      
      <TextInput 
        placeholder="Nom" 
        style={styles.input} 
        onChangeText={setName} 
        value={name} 
      />
      <TextInput 
        placeholder="Email" 
        style={styles.input} 
        onChangeText={setEmail} 
        value={email} 
        keyboardType="email-address" 
      />

      <View style={styles.buttonContainer}>
        <Button 
          title="Confirmer la réservation" 
          onPress={confirmBooking} 
          disabled={ticketCount <= 0 || (ticketsSold + ticketCount) > maxTickets}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    marginTop: 'auto',
    width: '100%',
    paddingVertical: 10,
  },
});

export default MakeBookingScreen;
