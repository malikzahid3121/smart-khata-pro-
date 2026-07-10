import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { getCustomers } from '../database/customerStorage';

export default function CustomerListScreen() {

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {
    const data = await getCustomers();
    setCustomers(data);
  };


  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Customer List
      </Text>

      <FlatList
        data={customers}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (

          <View style={styles.card}>
            <Text style={styles.name}>
              {item.name}
            </Text>

            <Text>
              Balance: Rs {item.balance}
            </Text>
          </View>

        )}
      />

    </View>
  );
}


const styles = StyleSheet.create({

  container:{
    flex:1,
    padding:20
  },

  title:{
    fontSize:28,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:20
  },

  card:{
    padding:15,
    borderWidth:1,
    borderRadius:10,
    marginBottom:10
  },

  name:{
    fontSize:18,
    fontWeight:'bold'
  }

});