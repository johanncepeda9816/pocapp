import { ReactNode } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

interface IContainer {
  children: ReactNode;
}

export default function Container(props: IContainer) {
  const { children } = props;
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    color: "#000",
  },
});
