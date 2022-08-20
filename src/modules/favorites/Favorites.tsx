import React from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import Container from "../../commons/components/Container";
import CustomFlatlist from "../../commons/components/forms/CustomFlatlist";
import CustomTitle from "../../commons/components/forms/CustomTitle";
import BurguerItem from "../home/components/BurguerItem";
import { IBurger } from "../home/types/IBurger";
import useFavorites from "./hooks/useFavorites";

export default function Favorites() {
  const { addFavorite, removeFavorite, favList } = useFavorites();

  const renderBurger = ({ item }: any) => {
    const burguer: IBurger = item;

    return <BurguerItem onPress={null} burguer={burguer} />;
  };

  return (
    <CustomFlatlist
      data={favList}
      renderItem={renderBurger}
      keyExtractor={(item) => item.id}
      onEndReached={null}
      ListHeaderComponent={<CustomTitle>Favorites</CustomTitle>}
      nestedScrollEnabled={true}
    />
  );
}
