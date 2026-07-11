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



export const deleteTransaction = async (id) => {

  let transactions = await getData('transactions');

  if (!transactions) {
    transactions = [];
  }


  const updatedTransactions = transactions.filter(
    item => item.id !== id
  );


  await saveData('transactions', updatedTransactions);

  return true;

};