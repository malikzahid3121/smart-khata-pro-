import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AddTransactionScreen from './src/screens/AddTransactionScreen';
import TransactionListScreen from './src/screens/TransactionListScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen 
          name="Add Transaction"
          component={AddTransactionScreen}
        />

        <Stack.Screen
          name="Transactions"
          component={TransactionListScreen}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}