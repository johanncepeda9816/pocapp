import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import { Updated_FavList } from "../../../commons/constants/Alerts";
import useStorage from "../../../commons/hooks/useStorage";
import { IBurger } from "../../home/types/IBurger";

export default function useFavorites() {
  const [loading, setLoading] = useState<boolean>(false);
  const [favList, setFavList] = useState<IBurger[]>([]);
  const { storeData, getStorageData } = useStorage();
  const STORAGE_KEY = "favList";
  const navigation = useNavigation<any>();

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [favList]);

  const updateStorage = async (value: IBurger[]) => {
    await storeData(STORAGE_KEY, value);
  };

  const init = async () => {
    let favList = await getStorageData(STORAGE_KEY);
    if (favList) setFavList(favList);
  };

  const addFavorite = async (burger: IBurger) => {
    if (!isAlreadyFav(burger)) {
      let copyList = [...favList, burger];
      await updateStorage(copyList);
      setFavList(copyList);
    }
  };

  const removeFavorite = async (burgerToDelete: IBurger) => {
    let updatedList = favList.filter(
      (burger) => burger.id !== burgerToDelete.id
    );
    await updateStorage(updatedList);
    setFavList(updatedList);
    Updated_FavList();
    navigation.navigate("Home");
  };

  const isAlreadyFav = (newburger: IBurger): boolean => {
    let res = false;
    favList.map((burger) => {
      if (burger.id === newburger.id) {
        res = true;
      }
    });

    return res;
  };

  return {
    addFavorite,
    removeFavorite,
    isAlreadyFav,
    init,
    favList,
    loading,
  };
}
