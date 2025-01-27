import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import UISearchBar from '../components/UISearchBar';

const BookingScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState(''); // État pour la barre de recherche
  const [filteredData, setFilteredData] = React.useState(ticketList); // État pour les données filtrées

  return (
    <View style={styles.container}>
      {/* Barre de recherche */}
      <UISearchBar
        placeholder="Rechercher une reservation"
        onSearch={handleSearch}
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
