import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation<any>();


  let array = [
    { name: 'Counter', screen: 'Counter' },
    { name: 'To To', screen: 'ToDo' },
    { name: 'Weather App', screen: 'WeatherApp' },
    { name: 'Project 2', screen: 'Project2' },
    // Add more projects here

  ]

  return (
    <View style={styles.container}>

        <FlatList 
        data={array}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={0.9} style={styles.button} onPress={() => navigation.navigate(item.screen)}>
            <Text style={styles.buttonText}> {item.name}</Text>
          </TouchableOpacity>
        )}
        />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#f8fafc', 
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 32,
    textAlign: 'center',
    color: '#1e293b',  
  },
  button: {
    backgroundColor: '#2e394a',  
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
  },
});
