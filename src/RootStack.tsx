import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import Counter from './projects/task-01-counter/Counter';
import ToDoApp from './projects/task-02-todo-app/ToDoApp';
import WeatherHomeScreen from './projects/task-03-weather-app/WeatherHomeScreen';

// Import all new screens
import Stopwatch from './projects/Stopwatch';
import LoginForm from './projects/LoginForm';
import Calculator from './projects/Calculator';
import ExpenseTracker from './projects/ExpenseTracker';
import MusicPlayer from './projects/MusicPlayer';
import NotesApp from './projects/NotesApp';
import ImageGallery from './projects/ImageGallery';
import ChatApp from './projects/ChatApp';
import ECommerce from './projects/ECommerce';
import MovieBooking from './projects/MovieBooking';
import AuthJWT from './projects/AuthJWT';
import MapLocation from './projects/MapLocation';
import InstagramClone from './projects/InstagramClone';
import UberBooking from './projects/UberBooking';
import MultiStepForm from './projects/MultiStepForm';
import FoodDelivery from './projects/FoodDelivery';
import RealTimeChat from './projects/RealTimeChat';

export default function RootStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1e293b',  
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 18,
        },
        contentStyle: {
          backgroundColor: '#f8fafc',  
        },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />

      {/* Level 1 - Basic */}
      <Stack.Screen name="Counter" component={Counter} />
      <Stack.Screen name="ToDo" component={ToDoApp} />
      <Stack.Screen name="Stopwatch" component={Stopwatch} />
      <Stack.Screen name="LoginForm" component={LoginForm} />
      <Stack.Screen name="Calculator" component={Calculator} />

      {/* Level 2 - Intermediate */}
      <Stack.Screen name="WeatherApp" component={WeatherHomeScreen} />
      <Stack.Screen name="ExpenseTracker" component={ExpenseTracker} />
      <Stack.Screen name="MusicPlayer" component={MusicPlayer} />
      <Stack.Screen name="NotesApp" component={NotesApp} />
      <Stack.Screen name="ImageGallery" component={ImageGallery} />

      {/* Level 3 - Advanced */}
      <Stack.Screen name="ChatApp" component={ChatApp} />
      <Stack.Screen name="ECommerce" component={ECommerce} />
      <Stack.Screen name="MovieBooking" component={MovieBooking} />
      <Stack.Screen name="AuthJWT" component={AuthJWT} />
      <Stack.Screen name="MapLocation" component={MapLocation} />

      {/* Level 4 - Interview-Level */}
      <Stack.Screen name="InstagramClone" component={InstagramClone} />
      <Stack.Screen name="UberBooking" component={UberBooking} />
      <Stack.Screen name="MultiStepForm" component={MultiStepForm} />
      <Stack.Screen name="FoodDelivery" component={FoodDelivery} />
      <Stack.Screen name="RealTimeChat" component={RealTimeChat} />

    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
