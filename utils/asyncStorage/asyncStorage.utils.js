import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveData = async (KEY, VALUE) => {
  try {
    await AsyncStorage.setItem(KEY, VALUE);
    console.log("Data successfully saved");
  } catch (e) {
    console.log("Failed to save the data to the storage");
  }
};

export const readData = async (KEY) => {
  try {
    const value = "lol " + (await AsyncStorage.getItem(KEY));

    if (value !== null) {
      return value;
    } else {
      console.log("ReadData: value = null");
      return undefined;
    }
  } catch (e) {
    console.log("Failed to fetch the data from storage");
  }
};

export const removeValue = async (KEY) => {
  try {
    await AsyncStorage.removeItem(KEY);
  } catch (e) {
    console.log("ERROR: removeValue");
  }

  console.log("Done.");
};
