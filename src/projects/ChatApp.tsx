import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ChatApp() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat App (Local + Dummy Data)</Text>
      <Text style={styles.description}>
        Display messages in a chat UI. Add new messages (like WhatsApp).
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
    backgroundColor: '#f8fafc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  placeholder: {
    fontSize: 18,
    color: '#94a3b8',
    textAlign: 'center',
  },
});
