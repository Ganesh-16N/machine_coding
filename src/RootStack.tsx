import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import { colors } from './theme';
import Counter from './projects/task-01-counter/Counter';
import ToDoApp from './projects/task-02-todo-app/ToDoApp';
import WeatherHomeScreen from './projects/task-03-weather-app/WeatherHomeScreen';

// Import all screens with updated paths
import Stopwatch from './projects/task-03-stopwatch/Stopwatch';
import LoginForm from './projects/task-04-login-form/LoginForm';
import Calculator from './projects/task-05-calculator/Calculator';
import ExpenseTracker from './projects/task-07-expense-tracker/ExpenseTracker';
import MusicPlayer from './projects/task-08-music-player/MusicPlayer';
import NotesApp from './projects/task-09-notes-app/NotesApp';
import ImageGallery from './projects/task-10-image-gallery/ImageGallery';
import ChatApp from './projects/task-11-chat-app/ChatApp';
import ECommerce from './projects/task-12-ecommerce/ECommerce';
import MovieBooking from './projects/task-13-movie-booking/MovieBooking';
import AuthJWT from './projects/task-14-auth-jwt/AuthJWT';
import MapLocation from './projects/task-15-map-location/MapLocation';
import InstagramClone from './projects/task-16-instagram-clone/InstagramClone';
import UberBooking from './projects/task-17-uber-booking/UberBooking';
import MultiStepForm from './projects/task-18-multistep-form/MultiStepForm';
import FoodDelivery from './projects/task-19-food-delivery/FoodDelivery';
import RealTimeChat from './projects/task-20-realtime-chat/RealTimeChat';

// Import new expert-level screens
import DashboardAnalytics from './projects/task-21-dashboard-analytics/DashboardAnalytics';
import SocialMediaFeed from './projects/task-22-social-media-feed/SocialMediaFeed';
import ELearningPlatform from './projects/task-23-elearning-platform/ELearningPlatform';
import FitnessTracker from './projects/task-24-fitness-tracker/FitnessTracker';
import OnlineBanking from './projects/task-25-online-banking/OnlineBanking';
import TravelBooking from './projects/task-26-travel-booking/TravelBooking';
import JobPortal from './projects/task-27-job-portal/JobPortal';
import RealEstateApp from './projects/task-28-real-estate-app/RealEstateApp';
import HealthcareApp from './projects/task-29-healthcare-app/HealthcareApp';
import GamingApp from './projects/task-30-gaming-app/GamingApp';

export default function RootStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.navigation.header,  
        },
        headerTintColor: colors.text.primary,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 18,
        },
        contentStyle: {
          backgroundColor: colors.background.primary,  
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

      {/* Level 5 - Expert-Level */}
      <Stack.Screen name="DashboardAnalytics" component={DashboardAnalytics} />
      <Stack.Screen name="SocialMediaFeed" component={SocialMediaFeed} />
      <Stack.Screen name="ELearningPlatform" component={ELearningPlatform} />
      <Stack.Screen name="FitnessTracker" component={FitnessTracker} />
      <Stack.Screen name="OnlineBanking" component={OnlineBanking} />
      <Stack.Screen name="TravelBooking" component={TravelBooking} />
      <Stack.Screen name="JobPortal" component={JobPortal} />
      <Stack.Screen name="RealEstateApp" component={RealEstateApp} />
      <Stack.Screen name="HealthcareApp" component={HealthcareApp} />
      <Stack.Screen name="GamingApp" component={GamingApp} />

    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
