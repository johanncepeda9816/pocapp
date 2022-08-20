import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { IBurger } from "../home/types/IBurger";
import { ActivityIndicator, StyleSheet, Text, View, Image } from "react-native";
import Container from "../../commons/components/Container";
import { PRIMARY, SECONDARY } from "../../commons/constants/Colors";
import CustomLabel from "../../commons/components/forms/CustomLabel";
import { burguerIcon } from "../../../assets/icons";
import CustomButton from "../../commons/components/forms/CustomButton";
import CustomTitle from "../../commons/components/forms/CustomTitle";

export default function Details() {
  const route = useRoute<any>();
  const [burguer, setBurguer] = useState<IBurger>();
  const [ingredientList, setIngredientList] = useState<string>("");
  const navigation = useNavigation<any>();

  useEffect(() => {
    if (route.params?.burguer) {
      let burguer: IBurger = route.params.burguer;
      setBurguer(burguer);
      let ingredients = "";
      burguer.ingredients.forEach((ingredient, i) => {
        ingredients +=
          ingredient + (i + 1 === burguer.ingredients.length ? "." : ", ");
      });
      setIngredientList(ingredients);
    }
  }, []);

  if (burguer) {
    return (
      <Container>
        <CustomTitle>Detalles</CustomTitle>
        <View style={styles.container}>
          <Image style={styles.icon} source={burguerIcon} />
          <Text style={styles.title}>{burguer.name}</Text>
          <Text style={styles.description}>{burguer.description}</Text>
          <Text style={styles.subtitle}>Ingredientes:</Text>
          <View style={styles.ingredientContainer}>
            <Text style={styles.ingredient}>{ingredientList}</Text>
          </View>
          <View>
            <CustomButton
              color={PRIMARY}
              onPress={undefined}
              title={"Añadir a favoritos"}
            />
            <CustomButton
              color={SECONDARY}
              onPress={() => navigation.goBack()}
              title={"Regresar"}
            />
          </View>
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
    padding: 10,
  },
  icon: {
    width: 50,
    height: 50,
    alignSelf: "center",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 20,
    margin: 20,
  },
  description: {
    margin: 20,
  },
  ingredientContainer: {
    flexDirection: "column",
    justifyContent: "center",
    width: "80%",
  },
  ingredient: {
    marginLeft: 20,
    margin: 5,
    fontSize: 15,
    fontStyle: "italic",
  },
});
