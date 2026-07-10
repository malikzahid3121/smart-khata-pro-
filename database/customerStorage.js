import { saveData, getData } from './storage';

export const saveCustomer = async (customer) => {
  let customers = await getData('customers');

  customers.push(customer);

  await saveData('customers', customers);
};


export const getCustomers = async () => {
  return await getData('customers');
};