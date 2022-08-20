import React from "react";
import { View, Text } from "react-native";
import Container from "../../commons/components/Container";
import CustomTitle from "../../commons/components/forms/CustomTitle";
import useHomeServices from "./hooks/useHomeServices";

export default function Home() {
  const { getBurgers } = useHomeServices();
  return (
    <Container>
      <CustomTitle>Hanburguesas</CustomTitle>
    </Container>
  );
}
