import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
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
import CustomTextInput from "../../commons/components/forms/CustomTextInput";
import CustomTitle from "../../commons/components/forms/CustomTitle";
import { PRIMARY, SECONDARY } from "../../commons/constants/Colors";
import BurgerItem from "./components/BurguerItem";
import useHomeServices from "./hooks/useHomeServices";
import { IBurger } from "./types/IBurger";

export default function Home() {
  const { loading, getBurgers, burgers } = useHomeServices();
  const [limit, setLimit] = useState<number>(20);
  const navigation = useNavigation<any>();
  const [burgerList, setburgerList] = useState<IBurger[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    setburgerList(getBurgers(20));
    burgers.forEach((burger) => {
      console.log(burger.name);
    });
  }, [burgers]);

  useEffect(() => {
    let burgersCopy = [...burgers];
    if (searchValue.length > 0) {
      let filtered = burgersCopy.filter((burger) => {
        return burger.name.toLowerCase().includes(searchValue.toLowerCase());
      });
      setburgerList(filtered);
    } else {
      setburgerList(getBurgers(limit));
    }
  }, [searchValue]);

  const handleLimit = () => {
    setburgerList(getBurgers(limit + 20));
    setLimit(limit + 20);
  };

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  const viewDetails = (burger: IBurger) => {
    navigation.navigate("Details", { burger: burger });
  };

  const renderBurger = ({ item }: any) => {
    const burger: IBurger = item;

    return <BurgerItem onPress={() => viewDetails(burger)} burger={burger} />;
  };

  if (!loading) {
    return (
      <CustomFlatlist
        data={burgerList}
        renderItem={renderBurger}
        onEndReached={() => handleLimit()}
        ListHeaderComponent={
          <View>
            <CustomTitle>Burger Mall</CustomTitle>
            <CustomTextInput
              placeholder="Search..."
              value={searchValue}
              onChangeText={(text) => handleSearch(text)}
            />
          </View>
        }
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
