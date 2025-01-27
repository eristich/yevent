import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { usePocket } from '../contexts/PocketContext';

const ProfileScreen = ({ navigation }) => {
  const { logout, user } = usePocket();

  const handleLogout = () => {
    // Ajouter ici la logique pour la déconnexion utilisateur
    logout();
    console.log('Déconnexion réussie !!!');
    navigation.navigate('LoginScreen');
  };

  const userFake = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    avatar: 'https://i.pravatar.cc/150?img=4', // URL de l'avatar
    events: [
      { id: '1', title: 'Concert Rock', date: '2025-02-15' },
      { id: '2', title: 'Conférence AI', date: '2025-03-10' },
    ],
  };

  const renderEvent = ({ item }) => (
    <View style={styles.eventCard}>
      <Text style={styles.eventTitle}>{item.title}</Text>
      <Text style={styles.eventDate}>Date : {item.date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Avatar et Informations utilisateur */}
      <View style={styles.profileContainer}>
        <Image source={{ uri: userFake.avatar }} style={styles.avatar} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>

      {/* Liste des événements */}
      <View style={styles.eventsContainer}>
        <Text style={styles.sectionTitle}>Événements réservés</Text>
        {userFake.events.length > 0 ? (
          <FlatList
            data={userFake.events}
            keyExtractor={(item) => item.id}
            renderItem={renderEvent}
            style={styles.eventList}
          />
        ) : (
          <Text style={styles.noEventsText}>Aucun événement réservé.</Text>
        )}
      </View>

      {/* Bouton pour déconnexion */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleLogout}
      >
        <Text style={styles.logoutText}>Se déconnecter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  profileContainer: {
    marginTop: 24,
    marginBottom: 24,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    color: '#666',
  },
  eventsContainer: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  eventList: {
    marginTop: 8,
  },
  eventCard: {
    padding: 12,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    marginBottom: 8,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  eventDate: {
    fontSize: 14,
    color: '#666',
  },
  noEventsText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    marginTop: 16,
  },
  logoutButton: {
    marginTop: 24,
    padding: 12,
    backgroundColor: '#ff4d4d',
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
