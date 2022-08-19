import React from "react";

export default function useStorage() {
  const getStorageData = (key: string) => {
    let item = localStorage.getItem(key);
    if (item) return JSON.parse(item);
    return undefined;
  };

  const storeData = (key: string, obj: any) => {
    localStorage.setItem(key, JSON.stringify(obj));
  };

  return { getStorageData, storeData };
}
