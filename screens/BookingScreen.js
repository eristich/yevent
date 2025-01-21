import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BookingScreen = ({ navigation }) => {

  const [searchQuery, setSearchQuery] = useState(''); // État pour la barre de recherche
  const [filteredData, setFilteredData] = useState(ticketList); // État pour les données filtrées

  // Fonction pour filtrer la liste en fonction de la recherche
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredData(ticketList);
    } else {
      const filtered = ticketList.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  return (
    <View style={styles.container}>
      {/* Barre de recherche */}
      <TextInput
        style={styles.searchBar}
        placeholder="Rechercher un événement..."
        value={searchQuery}
        onChangeText={handleSearch}
      />

      {/* Liste des événements */}
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Confirmation', {
                ...item
              })
            }
          >
            <Text>{item.title}</Text>
            {/* <EventCard image={item.image} title={item.title} date={item.date} /> */}
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

export default BookingScreen;
