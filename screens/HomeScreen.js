import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import EventCard from '../components/EventCard';
import { usePocket } from '../contexts/PocketContext';

const eventList = [
  {
    id: '1',
    image: 'https://res.cloudinary.com/shotgun/image/upload/c_limit,w_1200,h_627,g_center/f_jpg/q_auto/production/artworks/UVF_banni%C3%A8re_g4lhqp.png', // Image placeholder
    title: 'Ultravirage Festival 2025',
    description: 'Après une première édition incroyable, ultravirage festival revient du 21 au 23 mars 2025 pour transformer le Stade des Alpes en l’épicentre des musiques électroniques...',
    address: 'Stade des Alpes, 38000 Grenoble',
    startDate: '2025-03-21 - 23h',
    endDate: null,
    maxTickets: 1000,
    ticketsSold: 750
  },
  {
    id: '2',
    image: 'https://res.cloudinary.com/shotgun/image/upload/c_limit,w_1200,h_627,g_center/f_jpg/q_auto/production/artworks/SHOTGUN_SUNDAY_VINYL_SESSION_29_DEC_zlh9uh.jpg',
    title: 'Sunday Vinyle Session #2',
    description: 'Après une première édition réussie, Shotgun revient au Pop-Up du Label pour une nouvelle Sunday Vinyle Session le 29 décembre 2024...',
    address: 'Le Pop-Up du Label, 69011 Lyon',
    startDate: '2024-12-29 - 18h',
    endDate: null,
    maxTickets: 200,
    ticketsSold: 200
  },
  {
    id: '3',
    image: 'https://images-cdn.openxcell.com/wp-content/uploads/2024/07/25082439/reactnative-inner.svg',
    title: 'Conférence React Native',
    description: 'Conférence dédiée à React Native, le framework de développement mobile multiplateforme créé par Facebook...',
    address: 'Palais des Congrès, 75017 Paris',
    startDate: '2024-08-15 - 9h',
    endDate: null,
    maxTickets: 500,
    ticketsSold: 498
  },
];

const HomeScreen = ({ navigation }) => {

  const { login, user, token, pb } = usePocket();
  const [searchQuery, setSearchQuery] = useState(''); // État pour la barre de recherche
  const [filteredData, setFilteredData] = useState(eventList); // État pour les données filtrées

  console.log('User : ' + user);
  console.log('Token : ' + token);

  // Fonction pour filtrer la liste en fonction de la recherche
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredData(eventList);
    } else {
      const filtered = eventList.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  // test
  const handleTestRequest = async () => {
    await login('esteban.ristich@protonmail.com', 'pocketbase')
  }

  // get events from pocketbase api
  const fetchEvents = async () => {
    const events = await pb.collection('events').getFullList({
      sort: '-startDate'
    });
    console.log(events);
    setFilteredData(events);
  }

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <View style={styles.container}>

      {/* Barre de recherche */}
      <TextInput
        style={styles.searchBar}
        placeholder="Rechercher un événement..."
        value={searchQuery}
        onChangeText={handleSearch}
      />

      <TouchableOpacity onPress={handleTestRequest}>
        <Text>Test</Text>
      </TouchableOpacity>

      {/* Liste des événements */}
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('EventDetails', {
                ...item
              })
            }
          >
            <EventCard image={item.image} title={item.title} date={item.startDate} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    margin: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
