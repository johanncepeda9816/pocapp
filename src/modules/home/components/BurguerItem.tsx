import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { burguerIcon } from "../../../../assets/icons";
import { SECONDARY } from "../../../commons/constants/Colors";
import { IBurger } from "../types/IBurger";

interface IBurgerItem {
  burguer: IBurger;
  onPress: any;
}

export default function BurguerItem(props: IBurgerItem) {
  const { burguer, onPress } = props;

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.infoContainer}>
        <Image style={styles.icon} source={burguerIcon} />
        <View style={{ width: "80%" }}>
          <Text style={styles.title}>{burguer.name}</Text>
          <Text>{burguer.description}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 10,
    width: "90%",
    backgroundColor: SECONDARY,
    borderRadius: 20,
    alignSelf: "center",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    alignSelf: "center",
    width: 60,
    height: 60,
    margin: 10,
  },
  title: {
    fontSize: 18,
  },
});
