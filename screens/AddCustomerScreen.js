import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { saveCustomer } from '../database/customerStorage';

export default function AddCustomerScreen() {

  const [name, setName] = useState('');

  const addCustomer = async () => {

    if(name.trim() === '') {
      return;
    }

    await saveCustomer({
      id: Date.now().toString(),
      name: name,
      balance: 0
    });

    setName('');

    alert("Customer Saved");
  };


  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Add Customer
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Customer Name"
        value={name}
        onChangeText={setName}
      />

      <Button
        title="Save Customer"
        onPress={addCustomer}
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

  title:{
    fontSize:28,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:30
  },

  input:{
    borderWidth:1,
    padding:12,
    borderRadius:8,
    marginBottom:20
  }

});