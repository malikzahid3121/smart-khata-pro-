import { saveData, getData } from '../storage';

export const saveCustomer = async (customer) => {

  let customers = await getData('customers');

  if (!customers) {
    customers = [];
  }

  customers.push(customer);

  await saveData('customers', customers);

  return true;
};


export const getCustomers = async () => {

  let customers = await getData('customers');

  if (!customers) {
    customers = [];
  }

  return customers;

};