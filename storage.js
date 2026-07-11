import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveData = async (key, value) => {
  try {
    await AsyncStorage.setItem(
      key,
      JSON.stringify(value)
    );
    return true;
  } catch (error) {
    return false;
  }
};


export const getData = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);

    if (data) {
      return JSON.parse(data);
    }

    return [];

  } catch (error) {
    return [];
  }
};