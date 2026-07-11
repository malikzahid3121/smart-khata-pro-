import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>💰 Smart Khata Pro</Text>
      <Text style={styles.subtitle}>Manage your daily business easily</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Add Transaction')}>
        <Text style={styles.buttonText}>➕ Add Transaction</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Transactions')}>
        <Text style={styles.buttonText}>📋 View Transactions</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Reports')}>
        <Text style={styles.buttonText}>📊 Reports</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Settings')}>
        <Text style={styles.buttonText}>⚙️ Settings</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#F5F7FA',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#0A84FF',
  },

  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 35,
    color: '#666',
  },

  button: {
    backgroundColor: '#0A84FF',
    padding: 16,
    borderRadius: 10,
    marginBottom: 15,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
  },
}); 