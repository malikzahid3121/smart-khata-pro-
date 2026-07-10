import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import AddCustomerScreen from './screens/AddCustomerScreen';
import KhataEntryScreen from './screens/KhataEntryScreen';
import CustomerListScreen from './screens/CustomerListScreen';
import ReportsScreen from './screens/ReportsScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {

  return (
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen 
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen 
          name="Add Customer"
          component={AddCustomerScreen}
        />

        <Stack.Screen 
          name="Khata Entry"
          component={KhataEntryScreen}
        />

        <Stack.Screen 
          name="Customers"
          component={CustomerListScreen}
        />

        <Stack.Screen 
          name="Reports"
          component={ReportsScreen}
        />

        <Stack.Screen 
          name="Settings"
          component={SettingsScreen}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}