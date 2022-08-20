import React, { useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import Container from "../../commons/components/Container";
import CustomTitle from "../../commons/components/forms/CustomTitle";
import { SECONDARY } from "../../commons/constants/Colors";
import BurguerItem from "./components/BurguerItem";
import useHomeServices from "./hooks/useHomeServices";
import { IBurger } from "./types/IBurger";

export default function Home() {
  const { loading, getBurgers } = useHomeServices();
  const [limit, setLimit] = useState<number>(20);

  const handleLimit = () => {
    getBurgers(limit + 20);
    setLimit(limit + 20);
  };

  if (!loading) {
    return (
      <Container>
        <FlatList
          style={{ width: "100%" }}
          data={getBurgers(20)}
          renderItem={renderBurger}
          keyExtractor={(item) => item.id}
          onEndReached={() => handleLimit()}
          ListHeaderComponent={<CustomTitle>Burguer Mall</CustomTitle>}
          nestedScrollEnabled={false}
        />
      </Container>
    );
  } else {
    return (
      <Container>
        <ActivityIndicator color={SECONDARY} />
      </Container>
    );
  }
}

const renderBurger = ({ item }: any) => {
  const burguer: IBurger = item;
  return <BurguerItem burguer={burguer} />;
};
