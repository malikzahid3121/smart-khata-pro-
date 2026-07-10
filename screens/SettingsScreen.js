import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

export default function SettingsScreen() {

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Settings
      </Text>

      <Text style={styles.option}>
        Language: Urdu / English
      </Text>

      <View style={styles.row}>
        <Text style={styles.option}>
          Dark Mode
        </Text>

        <Switch />
      </View>

      <Text style={styles.option}>
        Backup: Coming Soon
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },

  option: {
    fontSize: 18,
    margin: 15,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

});