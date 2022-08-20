import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { IBurger } from "../home/types/IBurger";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import CustomTitle from "../../commons/components/forms/CustomTitle";
import Container from "../../commons/components/Container";
import { SECONDARY } from "../../commons/constants/Colors";
import CustomLabel from "../../commons/components/forms/CustomLabel";

export default function Details() {
  const route = useRoute<any>();
  const [burguer, setBurguer] = useState<IBurger>();

  useEffect(() => {
    if (route.params?.burguer) {
      setBurguer(route.params.burguer);
    }
  }, []);

  if (burguer) {
    return (
      <Container>
        <View style={styles.container}>
          <CustomTitle>{burguer.name}</CustomTitle>
          <CustomLabel>{burguer.description}</CustomLabel>
          {burguer.ingredients.map((ingredient: string, key: number) => (
            <CustomLabel key={key}>{ingredient}</CustomLabel>
          ))}
        </View>
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: SECONDARY,
    borderRadius: 20,
  },
});
