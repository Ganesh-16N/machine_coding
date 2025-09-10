import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, commonStyles } from '../../theme';

export default function SocialMediaFeed() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Social Media Feed</Text>
      <Text style={styles.description}>
        Build a social media feed with infinite scroll, pull-to-refresh, and advanced content interactions.
      </Text>
      <Text style={styles.placeholder}>🚧 Implementation Coming Soon 🚧</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'colors.background.primary',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'colors.text.primary',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: 'colors.text.secondary',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  placeholder: {
    fontSize: 18,
    color: 'colors.text.tertiary',
    textAlign: 'center',
  },
});
