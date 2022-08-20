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
import BurguerItem from "./components/BurguerItem";
import useHomeServices from "./hooks/useHomeServices";
import { IBurger } from "./types/IBurger";

export default function Home() {
  const { loading, getBurgers, burgers } = useHomeServices();
  const [limit, setLimit] = useState<number>(20);
  const navigation = useNavigation<any>();
  const [burguerList, setBurguerList] = useState<IBurger[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    setBurguerList(getBurgers(20));
    burgers.forEach((burguer) => {
      console.log(burguer.name);
    });
  }, [burgers]);

  useEffect(() => {
    let burguers = [...burgers];
    if (searchValue.length > 0) {
      let filtered = burguers.filter((burguer) => {
        return burguer.name.toLowerCase().includes(searchValue.toLowerCase());
      });
      setBurguerList(filtered);
    } else {
      setBurguerList(getBurgers(limit));
    }
  }, [searchValue]);

  const handleLimit = () => {
    setBurguerList(getBurgers(limit + 20));
    setLimit(limit + 20);
  };

  const handleSearch = (value: string) => {
    setSearchValue(value);
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
        data={burguerList}
        renderItem={renderBurger}
        onEndReached={() => handleLimit()}
        ListHeaderComponent={
          <View>
            <CustomTitle>Burguer Mall</CustomTitle>
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
