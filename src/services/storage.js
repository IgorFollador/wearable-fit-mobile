import AsyncStorage from "@react-native-async-storage/async-storage";

export const setStorageData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  }
  catch (error) {
    console.log("Error on set data", error);
  }
}

export const getStorageData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  }
  catch (error) {
    console.log("Error on get data", error);
  }
}