import { Pressable, StyleSheet, Text } from "react-native";
import { PRIMARY, SECONDARY } from "../../constants/Colors";

interface ICustomButton {
  onPress: any;
  title: string;
}

export default function CustomButton(props: ICustomButton) {
  const { onPress, title } = props;
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.label}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: SECONDARY,
    width: "80%",
    margin: 20,
    borderRadius: 20,
    padding: 10,
    alignSelf: "center",
  },
  label: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
  },
});
