import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import Counter from './projects/counter/Counter';
import ToDoApp from './projects/to_do/ToDoApp';

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
      <Stack.Screen name="All Projects" component={HomeScreen} />



      <Stack.Screen name="Counter" component={Counter} />
      <Stack.Screen name="ToDo" component={ToDoApp} />




    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
