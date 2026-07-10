import { saveData, getData } from './storage';

export const saveTransaction = async (transaction) => {

  let transactions = await getData('transactions');

  transactions.push(transaction);

  await saveData('transactions', transactions);

};


export const getTransactions = async () => {

  return await getData('transactions');

};