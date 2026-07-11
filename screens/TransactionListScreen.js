import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { getTransactions, deleteTransaction } from '../services/transactionService';

export default function TransactionListScreen() {

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    loadTransactions();
  }, []);


  const loadTransactions = async () => {
    const data = await getTransactions();
    setTransactions(data || []);
  };


  const removeTransaction = async (id) => {

    await deleteTransaction(id);

    loadTransactions();

  };


  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        📋 Transactions
      </Text>


      <FlatList

        data={transactions}

        keyExtractor={(item) => item.id.toString()}


        ListEmptyComponent={
          <Text style={styles.empty}>
            No Transactions Found
          </Text>
        }


        renderItem={({item}) => (

          <View style={styles.card}>

            <Text style={styles.name}>
              {item.title}
            </Text>

            <Text>
              Amount: {item.amount}
            </Text>

            <Text>
              Type: {item.type}
            </Text>


            <Button
              title="🗑️ Delete"
              onPress={() => removeTransaction(item.id)}
            />


          </View>

        )}

      />

    </View>
  );
}



const styles = StyleSheet.create({

  container:{
    flex:1,
    padding:20,
    backgroundColor:'#fff'
  },


  title:{
    fontSize:28,
    fontWeight:'bold',
    marginBottom:20
  },


  card:{
    padding:15,
    marginBottom:10,
    backgroundColor:'#eee',
    borderRadius:10
  },


  name:{
    fontSize:18,
    fontWeight:'bold'
  },


  empty:{
    textAlign:'center',
    marginTop:50
  }

});