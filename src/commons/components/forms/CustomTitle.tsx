import { StyleSheet, Text } from "react-native";
import { SECONDARY } from "../../constants/Colors";

interface ICustomTitle {
  children: string;
}

export default function CustomTitle(props: ICustomTitle) {
  const { children } = props;
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    margin: 50,
    fontSize: 40,
    color: SECONDARY,
    fontWeight: "bold",
  },
});
