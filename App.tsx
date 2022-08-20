import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { AsyncStorage } from "react-native";
import CustomRouter from "./src/commons/navigation/CustomRouter";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <CustomRouter />
    </>
  );
}
