import React, { useEffect, useState } from "react";
import useStorage from "../../../commons/hooks/useStorage";
import { IBurger } from "../../home/types/IBurger";

export default function useFavorites() {
  const [favList, setFavList] = useState<IBurger[]>([]);
  const { storeData, getStorageData } = useStorage();
  const STORAGE_KEY = "favList";

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    if (favList.length) updateStorage(favList);
  }, [favList]);

  const updateStorage = async (value: IBurger[]) => {
    await storeData(STORAGE_KEY, value);
  };

  const init = async () => {
    let favList = await getStorageData(STORAGE_KEY);
    if (favList) setFavList(favList);
  };

  const addFavorite = (burguer: IBurger) => {
    setFavList([...favList, burguer]);
  };

  const removeFavorite = (burguerToDelete: IBurger) => {
    let updatedList = favList.filter(
      (burguer) => burguer.id !== burguerToDelete.id
    );
    setFavList(updatedList);
  };

  return { addFavorite, removeFavorite, favList };
}
