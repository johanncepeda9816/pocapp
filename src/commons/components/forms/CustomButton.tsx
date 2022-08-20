import { Pressable, StyleSheet, Text } from "react-native";
import { PRIMARY, SECONDARY } from "../../constants/Colors";

interface ICustomButton {
  onPress: any;
  title: string;
  color?: string;
}

export default function CustomButton(props: ICustomButton) {
  const { onPress, title, color = SECONDARY } = props;
  return (
    <Pressable
      style={[styles.container, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.label}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    margin: 20,
    borderRadius: 20,
    padding: 10,
    alignSelf: "center",
  },
  label: {
    textAlign: "center",
    color: "#000",
    fontSize: 16,
  },
});
