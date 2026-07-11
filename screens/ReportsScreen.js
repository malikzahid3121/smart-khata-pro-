import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getTransactions } from '../services/transactionService';

export default function ReportsScreen() {

  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    loadReport();
  }, []);

  const loadReport = async () => {

    const transactions = await getTransactions();

    let totalIncome = 0;
    let totalExpense = 0;

    transactions.forEach(item => {

      if (item.type === 'income') {
        totalIncome += Number(item.amount);
      } else {
        totalExpense += Number(item.amount);
      }

    });

    setIncome(totalIncome);
    setExpense(totalExpense);
    setTotal(transactions.length);

  };


  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        📊 Reports
      </Text>

      <View style={styles.card}>
        <Text style={styles.text}>
          💰 Total Income: {income}
        </Text>

        <Text style={styles.text}>
          💸 Total Expense: {expense}
        </Text>

        <Text style={styles.text}>
          📋 Total Transactions: {total}
        </Text>

        <Text style={styles.text}>
          🏦 Balance: {income - expense}
        </Text>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:'center',
    padding:20,
    backgroundColor:'#fff'
  },

  title:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:30
  },

  card:{
    padding:20,
    borderRadius:12,
    borderWidth:1,
    borderColor:'#ddd'
  },

  text:{
    fontSize:20,
    marginBottom:15
  }

});