import { StatusBar } from "expo-status-bar";
import CustomRouter from "./src/commons/navigation/CustomRouter";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <CustomRouter />
    </>
  );
}
