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
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          style={styles.container}
          data={getBurgers(20)}
          renderItem={renderBurger}
          keyExtractor={(item) => item.id}
          onEndReached={() => handleLimit()}
          ListHeaderComponent={<CustomTitle>Burguer Mall</CustomTitle>}
          nestedScrollEnabled={true}
        />
      </SafeAreaView>
    );
  } else {
    return (
      <Container>
        <ActivityIndicator color={SECONDARY} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY,
    color: "#000",
    width: "100%",
  },
});
