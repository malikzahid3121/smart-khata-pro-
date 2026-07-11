import { saveData, getData } from '../storage';

export const saveTransaction = async (transaction) => {

  let transactions = await getData('transactions');

  if (!transactions) {
    transactions = [];
  }

  transactions.push(transaction);

  await saveData('transactions', transactions);

  return true;
};


export const getTransactions = async () => {

  let transactions = await getData('transactions');

  if (!transactions) {
    transactions = [];
  }

  return transactions;

};