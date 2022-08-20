import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
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

  const updateStorage = async (value: IBurger[]) => {
    setLoading(true);
    await storeData(STORAGE_KEY, value);
    setLoading(false);
  };

  const init = async () => {
    console.log("Initialiting...");
    setLoading(true);
    let favList = await getStorageData(STORAGE_KEY);
    if (favList) setFavList(favList);
    setLoading(false);
  };

  const addFavorite = async (burguer: IBurger) => {
    if (!isAlreadyFav(burguer)) {
      let copyList = [...favList, burguer];
      await updateStorage(copyList);
      setFavList(copyList);
    }
  };

  const removeFavorite = async (burguerToDelete: IBurger) => {
    let updatedList = favList.filter(
      (burguer) => burguer.id !== burguerToDelete.id
    );
    await updateStorage(updatedList);
    setFavList(updatedList);
    Updated_FavList();
  };

  const isAlreadyFav = (newBurguer: IBurger): boolean => {
    let res = false;
    favList.map((burguer) => {
      if (burguer.id === newBurguer.id) {
        res = true;
      }
    });

    return res;
  };

  return {
    addFavorite,
    removeFavorite,
    isAlreadyFav,
    favList,
    loading,
  };
}
