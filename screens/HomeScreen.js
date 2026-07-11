import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        💰 Smart Khata Pro
      </Text>

      <Button
        title="➕ Add Customer"
        onPress={() => navigation.navigate('Add Customer')}
      />

      <View style={{height:15}} />

      <Button
        title="👥 Customer List"
        onPress={() => navigation.navigate('Customers')}
      />

      <View style={{height:15}} />

      <Button
        title="💰 Add Transaction"
        onPress={() => navigation.navigate('Add Transaction')}
      />

      <View style={{height:15}} />

      <Button
        title="📋 View Transactions"
        onPress={() => navigation.navigate('Transactions')}
      />

      <View style={{height:15}} />

      <Button
        title="📒 Khata Entry"
        onPress={() => navigation.navigate('Khata Entry')}
      />

      <View style={{height:15}} />

      <Button
        title="📊 Reports"
        onPress={() => navigation.navigate('Reports')}
      />

      <View style={{height:15}} />

      <Button
        title="⚙️ Settings"
        onPress={() => navigation.navigate('Settings')}
      />

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
    marginBottom:40
  }

});