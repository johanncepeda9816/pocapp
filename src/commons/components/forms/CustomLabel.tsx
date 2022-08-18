import { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";

interface ICustomLabel {
  children: ReactNode;
}

export default function CustomLabel(props: ICustomLabel) {
  const { children } = props;
  return <Text style={styles.label}>{children}</Text>;
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    textAlign: "center",
    color: "#fff",
  },
});
