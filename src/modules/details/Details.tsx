import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { IBurger } from "../home/types/IBurger";
import { ActivityIndicator, StyleSheet, Text, View, Image } from "react-native";
import Container from "../../commons/components/Container";
import { PRIMARY, SECONDARY } from "../../commons/constants/Colors";
import CustomLabel from "../../commons/components/forms/CustomLabel";
import { burgerIcon } from "../../../assets/icons";
import CustomButton from "../../commons/components/forms/CustomButton";
import CustomTitle from "../../commons/components/forms/CustomTitle";
import useFavorites from "../favorites/hooks/useFavorites";

export default function Details() {
  const route = useRoute<any>();
  const [burger, setburger] = useState<IBurger>();
  const [isFromFavList, setIsFromFavList] = useState<boolean>(false);
  const [ingredientList, setIngredientList] = useState<string>("");
  const navigation = useNavigation<any>();
  const { addFavorite, isAlreadyFav, removeFavorite } = useFavorites();

  useEffect(() => {
    if (route.params?.burger) {
      let burger: IBurger = route.params.burger;
      setburger(burger);
      let ingredients = "";
      burger.ingredients.forEach((ingredient, i) => {
        ingredients +=
          ingredient + (i + 1 === burger.ingredients.length ? "." : ", ");
      });
      setIngredientList(ingredients);

      if (route.params.isFromFavList === true) setIsFromFavList(true);
    }
  }, []);

  if (burger) {
    return (
      <Container>
        <CustomTitle>Detalles</CustomTitle>
        <View style={styles.container}>
          <Image style={styles.icon} source={burgerIcon} />
          <Text style={styles.title}>{burger.name}</Text>
          <Text style={styles.description}>{burger.description}</Text>
          <Text style={styles.subtitle}>Ingredients:</Text>
          <View style={styles.ingredientContainer}>
            <Text style={styles.ingredient}>{ingredientList}</Text>
          </View>
          <View>
            {!isAlreadyFav(burger) && (
              <CustomButton
                color={PRIMARY}
                onPress={() => addFavorite(burger)}
                title={"Añadir a favoritos"}
              />
            )}
            {isFromFavList && (
              <CustomButton
                color={PRIMARY}
                onPress={() => removeFavorite(burger)}
                title={"Eliminar"}
              />
            )}
            <CustomButton
              color={"#fff"}
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
    width: "90%",
    marginBottom: 50,
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
    textAlign: "justify",
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
