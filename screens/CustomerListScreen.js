import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function CustomerListScreen() {

  const customers = [
    { id: '1', name: 'Example Customer', balance: '0' }
  ];

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Customer List
      </Text>

      <FlatList
        data={customers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>
              {item.name}
            </Text>

            <Text>
              Balance: {item.balance}
            </Text>
          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  card: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },

});