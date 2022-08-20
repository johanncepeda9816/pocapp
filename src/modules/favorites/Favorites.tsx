import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  SafeAreaView,
  View,
} from "react-native";
import Container from "../../commons/components/Container";
import CustomFlatlist from "../../commons/components/forms/CustomFlatlist";
import CustomLabel from "../../commons/components/forms/CustomLabel";
import CustomTitle from "../../commons/components/forms/CustomTitle";
import { SECONDARY } from "../../commons/constants/Colors";
import BurgerItem from "../home/components/BurguerItem";
import { IBurger } from "../home/types/IBurger";
import useFavorites from "./hooks/useFavorites";

export default function Favorites() {
  const { loading, favList, init } = useFavorites();
  const navigation = useNavigation<any>();

  const viewDetails = (burger: IBurger) => {
    navigation.navigate("Details", { burger: burger, isFromFavList: true });
  };

  const renderBurger = ({ item }: any) => {
    const burger: IBurger = item;

    return <BurgerItem onPress={() => viewDetails(burger)} burger={burger} />;
  };

  if (!loading) {
    return (
      <CustomFlatlist
        onRefresh={() => init()}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={init} />
        }
        data={favList}
        renderItem={renderBurger}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<CustomLabel>No tienes favoritos</CustomLabel>}
        onEndReached={null}
        ListHeaderComponent={<CustomTitle>Favorites</CustomTitle>}
        nestedScrollEnabled={true}
      />
    );
  } else {
    return (
      <Container>
        <ActivityIndicator color={SECONDARY} />
      </Container>
    );
  }
}
