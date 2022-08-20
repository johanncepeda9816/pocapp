import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Container from "../../commons/components/Container";
import CustomFlatlist from "../../commons/components/forms/CustomFlatlist";
import CustomTitle from "../../commons/components/forms/CustomTitle";
import { PRIMARY, SECONDARY } from "../../commons/constants/Colors";
import BurguerItem from "./components/BurguerItem";
import useHomeServices from "./hooks/useHomeServices";
import { IBurger } from "./types/IBurger";

export default function Home() {
  const { loading, getBurgers } = useHomeServices();
  const [limit, setLimit] = useState<number>(20);
  const navigation = useNavigation<any>();

  const handleLimit = () => {
    getBurgers(limit + 20);
    setLimit(limit + 20);
  };

  const viewDetails = (burguer: IBurger) => {
    navigation.navigate("Details", { burguer: burguer });
  };

  const renderBurger = ({ item }: any) => {
    const burguer: IBurger = item;

    return (
      <BurguerItem onPress={() => viewDetails(burguer)} burguer={burguer} />
    );
  };

  if (!loading) {
    return (
      <CustomFlatlist
        data={getBurgers(20)}
        renderItem={renderBurger}
        onEndReached={() => handleLimit()}
        ListHeaderComponent={<CustomTitle>Burguer Mall</CustomTitle>}
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
