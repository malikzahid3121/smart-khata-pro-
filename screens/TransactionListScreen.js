import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getTransactions } from '../services/transactionService';

export default function TransactionListScreen() {

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    loadTransactions();
  }, []);

  const loadTransactions = async () => {
    const data = await getTransactions();
    setTransactions(data);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Transactions
      </Text>

      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.card}>

            <Text>
              {item.title}
            </Text>

            <Text>
              {item.amount}
            </Text>

            <Text>
              {item.type}
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
    fontSize:24,
    fontWeight:'bold',
    marginBottom:20
  },

  card:{
    padding:15,
    marginBottom:10,
    backgroundColor:'#eee',
    borderRadius:10
  }

}); 