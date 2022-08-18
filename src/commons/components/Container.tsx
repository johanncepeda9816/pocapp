import { ReactNode } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { PRIMARY } from "../constants/Colors";

interface IContainer {
  children: ReactNode;
}

export default function Container(props: IContainer) {
  const { children } = props;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY,
    alignItems: "center",
    justifyContent: "center",
    color: "#000",
  },
});
