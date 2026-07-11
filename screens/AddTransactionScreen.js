import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { saveTransaction } from '../storage';

export default function AddTransactionScreen({ navigation }) {

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');

  const handleSave = async () => {

    const transaction = {
      id: Date.now(),
      title: title,
      amount: amount,
      type: type,
    };

    const result = await saveTransaction(transaction);

    if (result !== false) {
      alert("Transaction Saved ✅");

      setTitle('');
      setAmount('');

      navigation.navigate('Transactions');

    } else {
      alert("Error saving transaction ❌");
    }

  };

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>
        Add Transaction
      </Text>

      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />

      <TextInput
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        style={styles.input}
      />

      <Button
        title="Save Transaction"
        onPress={handleSave}
      />

    </View>
  );
}


const styles = StyleSheet.create({

  container:{
    flex:1,
    padding:20,
    justifyContent:'center'
  },

  heading:{
    fontSize:25,
    fontWeight:'bold',
    marginBottom:20
  },

  input:{
    borderWidth:1,
    borderColor:'#ccc',
    padding:12,
    marginBottom:15,
    borderRadius:8
  }

}); 