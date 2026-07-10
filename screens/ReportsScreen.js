import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ReportsScreen() {

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Reports
      </Text>

      <Text style={styles.text}>
        Daily Report: 0
      </Text>

      <Text style={styles.text}>
        Monthly Report: 0
      </Text>

      <Text style={styles.text}>
        Total Transactions: 0
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  text: {
    fontSize: 20,
    margin: 10,
  },

});