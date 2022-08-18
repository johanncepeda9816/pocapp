import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import Container from "../../../commons/components/Container";
import CustomTextInput from "../../../commons/components/forms/CustomTextInput";
import { initialStateAuth } from "../../../commons/constants/Contants";
import { IAuthData } from "../../../commons/types/CommonTypes";

export default function Login() {
  const navigation = useNavigation<any>();
  const [authData, setAuthData] = useState<IAuthData>(initialStateAuth);

  return (
    <Container>
      <CustomTextInput
        label="hola"
        onChangeText={(text) => setAuthData({ ...authData, username: text })}
      />
      <CustomTextInput
        onChangeText={(text) => setAuthData({ ...authData, password: text })}
      />
    </Container>
  );
}
