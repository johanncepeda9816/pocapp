import { Pressable, StyleSheet, Text } from "react-native";

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
  container: {},
  label: {},
});
