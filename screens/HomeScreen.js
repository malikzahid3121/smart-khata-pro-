import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Smart Khata Pro
      </Text>

      <Text style={styles.balance}>
        Total Balance: 0
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          + Add Customer
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  balance: {
    fontSize: 20,
    marginTop: 30,
    textAlign: 'center',
  },

  button: {
    marginTop: 40,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#333',
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});