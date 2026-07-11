import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function KhataEntryScreen() {

  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Add Khata Entry
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <TextInput
        style={styles.input}
        placeholder="Note (Udhaar/Jama)"
        value={note}
        onChangeText={setNote}
      />

      <Button
        title="Save Entry"
        onPress={() => alert("Entry Saved")}
      />

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
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },

  input: {
    borderWidth: 1,
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
  },

}); 