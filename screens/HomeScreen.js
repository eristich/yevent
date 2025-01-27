import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import UIEventCard from '../components/UIEventCard';
import UISearchBar from '../components/UISearchBar';
import { usePocket } from '../contexts/PocketContext';
import eventList from '../fixtures/events.json';

const HomeScreen = ({ navigation }) => {

  const { login, user, token, pb } = usePocket();
  const [searchQuery, setSearchQuery] = React.useState(''); // État pour la barre de recherche
  const [filteredData, setFilteredData] = React.useState(eventList); // État pour les données filtrées

  // console.log('User : ' + user);
  // console.log('Token : ' + token);

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

  // get events from pocketbase api
  const fetchEvents = async () => {
    const events = await pb.collection('events').getFullList({
      sort: '-startDate'
    });
    console.log(events);
    setFilteredData(events);
  }

  React.useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <View style={styles.container}>

      {/* Barre de recherche */}
      <UISearchBar
        placeholder="Rechercher un événement..."
        onSearch={handleSearch}
      />

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
            <UIEventCard image={item.image} title={item.title} date={item.startDate} />
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
    fontFamily: 'Poppins_400Regular',
  },
});

export default HomeScreen;
