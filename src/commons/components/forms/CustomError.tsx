import { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";
import { ERROR } from "../../constants/Colors";

interface ICustomError {
  children: string;
}

export default function CustomError(props: ICustomError) {
  const { children } = props;

  return <Text style={styles.error}>{children}</Text>;
}

const styles = StyleSheet.create({
  error: {
    color: ERROR,
    fontSize: 13,
    fontStyle: "italic",
    textAlign: "center",
  },
});
