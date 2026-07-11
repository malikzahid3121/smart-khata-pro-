import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { saveCustomer } from '../database/customerStorage';

export default function AddCustomerScreen({ navigation }) {

  const [name, setName] = useState('');

  const addCustomer = async () => {

    if (name.trim() === '') {
      alert('Please enter customer name');
      return;
    }

    const customer = {
      id: Date.now().toString(),
      name: name.trim(),
      balance: 0,
      createdAt: new Date().toISOString(),
    };

    const result = await saveCustomer(customer);

    if (result !== false) {
      alert('✅ Customer Saved');

      setName('');

      if (navigation) {
        navigation.navigate('Customers');
      }
    } else {
      alert('❌ Error saving customer');
    }
  };


  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        👤 Add Customer
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Customer Name"
        value={name}
        onChangeText={setName}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={addCustomer}
      >
        <Text style={styles.buttonText}>
          Save Customer
        </Text>
      </TouchableOpacity>

    </View>
  );
}


const styles = StyleSheet.create({

  container:{
    flex:1,
    padding:20,
    justifyContent:'center',
    backgroundColor:'#fff'
  },

  title:{
    fontSize:28,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:30
  },

  input:{
    borderWidth:1,
    borderColor:'#ccc',
    padding:12,
    borderRadius:10,
    marginBottom:20
  },

  button:{
    backgroundColor:'#0A84FF',
    padding:15,
    borderRadius:10
  },

  buttonText:{
    color:'#fff',
    textAlign:'center',
    fontWeight:'bold',
    fontSize:16
  }

});