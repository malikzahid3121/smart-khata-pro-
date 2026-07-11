import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Smart Khata Pro
      </Text>

      <Button
        title="Add Transaction"
        onPress={() => navigation.navigate('Add Transaction')}
      />

      <View style={{height:20}} />

      <Button
        title="View Transactions"
        onPress={() => navigation.navigate('Transactions')}
      />

    </View>

  );
}


const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:'center',
    padding:20
  },

  title:{
    fontSize:28,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:40
  }

});