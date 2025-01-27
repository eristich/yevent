import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import BookingScreen from '../screens/BookingScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EventDetailsScreen from '../screens/EventDetailsScreen';
import MakeBookingScreen from '../screens/MakeBookingScreen';
import ConfirmationScreen from '../screens/ConfirmationScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
// import MapScreen from '../screens/MapScreen';

// Création du Tab Navigator
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="LoginScreen" 
      component={LoginScreen} 
      options={{ headerShown: false }} 
    />
    <Stack.Screen 
      name="RegisterScreen" 
      component={RegisterScreen} 
      options={{ headerShown: false }} 
    />
  </Stack.Navigator>
);

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Auth" 
        component={AuthStack} 
        options={{ headerShown: false }} 
      />

      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Accueil' }} />
      <Stack.Screen name="EventDetails" component={EventDetailsScreen} options={{ title: 'Détails de l\'événement' }} />
      <Stack.Screen name="MakeBooking" component={MakeBookingScreen} options={{ title: 'Faire une réservation' }} />
      <Stack.Screen name="Confirmation" component={ConfirmationScreen} options={{ title: 'Confirmation de la réservation' }} />
      {/* <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ title: 'Inscription' }} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Connexion' }} /> */}
    </Stack.Navigator>
  );
};

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName='Events'>
      {/* <Tab.Screen name="Booking" component={BookingScreen} /> */}
      {/* <Tab.Screen name="Map" component={MapScreen} /> */}
      <Tab.Screen name="Events" component={HomeStack} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
