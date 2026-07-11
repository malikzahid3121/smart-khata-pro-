import { saveData, getData } from './storage';

export const saveTransaction = async (transaction) => {
  try {
    let transactions = await getData('transactions');

    if (!transactions) {
      transactions = [];
    }

    transactions.push({
      ...transaction,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    });

    await saveData('transactions', transactions);

    return true;
  } catch (error) {
    console.log("Save Transaction Error:", error);
    return false;
  }
};


export const getTransactions = async () => {
  try {
    const transactions = await getData('transactions');
    return transactions || [];
  } catch (error) {
    console.log("Get Transactions Error:", error);
    return [];
  }
};


export const deleteTransaction = async (id) => {
  try {
    let transactions = await getData('transactions');

    const updated = transactions.filter(
      item => item.id !== id
    );

    await saveData('transactions', updated);

    return true;
  } catch (error) {
    console.log("Delete Error:", error);
    return false;
  }
};