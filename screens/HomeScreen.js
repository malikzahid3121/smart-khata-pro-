import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen() {

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Smart Khata Pro
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          Total Udhaar
        </Text>
        <Text style={styles.amount}>
          Rs 0
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          Total Jama
        </Text>
        <Text style={styles.amount}>
          Rs 0
        </Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          + Add Customer
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Add Khata Entry
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },

  card: {
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#f2f2f2',
    marginBottom: 15,
  },

  cardTitle: {
    fontSize: 18,
  },

  amount: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
  },

  button: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#333',
    marginTop: 15,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },

});