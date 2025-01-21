import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import BookingScreen from '../screens/BookingScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EventDetailsScreen from '../screens/EventDetailsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import MakeBookingScreen from '../screens/MakeBookingScreen';
import ConfirmationScreen from '../screens/ConfirmationScreen';

// Écrans de l'application
function HomeScreenOld() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Accueil</Text>
    </View>
  );
}

function BookingScreenOld() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profil</Text>
    </View>
  );
}

function ProfileScreenOld() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Paramètres</Text>
    </View>
  );
}

// Création du Tab Navigator
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Accueil' }} />
            <Stack.Screen name="EventDetails" component={EventDetailsScreen} options={{ title: 'Détails de l\'événement' }} />
            <Stack.Screen name="MakeBooking" component={MakeBookingScreen} options={{ title: 'Faire une réservation' }} />
            <Stack.Screen name="Confirmation" component={ConfirmationScreen} options={{ title: 'Confirmation de la réservation' }} />
        </Stack.Navigator>
    );
};

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName='Events'>
      <Tab.Screen name="Booking" component={BookingScreen} />
      <Tab.Screen name="Events" component={HomeStack} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
