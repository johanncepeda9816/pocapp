import React from "react";
import { AsyncStorage } from "react-native";

export default function useStorage() {
  const getStorageData = async (key: string) => {
    let item = await AsyncStorage.getItem(key);
    if (item) return JSON.parse(item);
    return undefined;
  };

  const storeData = async (key: string, obj: any) => {
    await AsyncStorage.setItem(key, JSON.stringify(obj));
  };

  return { getStorageData, storeData };
}
