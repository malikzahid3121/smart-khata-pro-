import { saveData, getData } from '../storage';

export const saveKhataEntry = async (entry) => {

  let entries = await getData('khataEntries');

  if (!entries) {
    entries = [];
  }

  entries.push(entry);

  await saveData('khataEntries', entries);

  return true;
};


export const getKhataEntries = async () => {

  let entries = await getData('khataEntries');

  if (!entries) {
    entries = [];
  }

  return entries;
};