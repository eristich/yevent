// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import BottomTabNavigator from './navigation/BottomTabNavigator';
// import EventDetailsScreen from './screens/EventDetailsScreen';
// import BookingScreen from './screens/BookingScreen';
// import ConfirmationScreen from './screens/ConfirmationScreen';
// import HomeScreen from './screens/HomeScreen';

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen 
//           name="BottomTabs" 
//           component={BottomTabNavigator} 
//           options={{ headerShown: false }} 
//         />
//         <Stack.Screen name="EventDetails" component={EventDetailsScreen} />
//         <Stack.Screen name="Booking" component={BookingScreen} />
//         <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import { PocketProvider } from './contexts/PocketContext';

export default function App() {
  return (
    <PocketProvider>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </PocketProvider>
  );
}
