import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import AddTransactionScreen from './screens/AddTransactionScreen';
import TransactionListScreen from './screens/TransactionListScreen';
import ReportsScreen from './screens/ReportsScreen';
import SettingsScreen from './screens/SettingsScreen';
import AddCustomerScreen from './screens/AddCustomerScreen';
import CustomerListScreen from './screens/CustomerListScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="Add Transaction"
          component={AddTransactionScreen}
        />

        <Stack.Screen
          name="Transactions"
          component={TransactionListScreen}
        />

        <Stack.Screen
          name="Add Customer"
          component={AddCustomerScreen}
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