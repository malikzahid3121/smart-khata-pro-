import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getKhataEntries } from '../database/khataStorage';

export default function KhataListScreen() {

  const [entries, setEntries] = useState([]);

  useEffect(() => {
    loadEntries();
  }, []);

  const loadEntries = async () => {

    const data = await getKhataEntries();

    setEntries(data || []);

  };


  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        📒 Khata History
      </Text>


      <FlatList

        data={entries}

        keyExtractor={(item) => item.id.toString()}


        ListEmptyComponent={
          <Text style={styles.empty}>
            No Khata Entries
          </Text>
        }


        renderItem={({item}) => (

          <View style={styles.card}>

            <Text>
              💰 Amount: {item.amount}
            </Text>

            <Text>
              📝 {item.note}
            </Text>

            <Text>
              📅 {item.date}
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
    backgroundColor:'#eee',
    borderRadius:10,
    marginBottom:10
  },


  empty:{
    textAlign:'center',
    marginTop:50
  }

});