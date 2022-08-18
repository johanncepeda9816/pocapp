import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import Container from "../../../commons/components/Container";
import CustomButton from "../../../commons/components/forms/CustomButton";
import CustomTextInput from "../../../commons/components/forms/CustomTextInput";
import CustomTitle from "../../../commons/components/forms/CustomTitle";
import { initialStateAuth } from "../../../commons/constants/Contants";
import { IAuthData } from "../../../commons/types/CommonTypes";

export default function Login() {
  const navigation = useNavigation<any>();
  const [authData, setAuthData] = useState<IAuthData>(initialStateAuth);

  return (
    <Container>
      <CustomTitle>Bienvenido</CustomTitle>
      <CustomTextInput
        label="Nombre de usuario*"
        onChangeText={(text: string) =>
          setAuthData({ ...authData, username: text })
        }
        value={authData.username}
        placeholder="your-username"
      />
      <CustomTextInput
        label="Contraseña*"
        onChangeText={(text: string) =>
          setAuthData({ ...authData, password: text })
        }
        value={authData.password}
        secureTextEntry
        placeholder="**********"
      />
      <CustomButton onPress={null} title="Ingresar" />
    </Container>
  );
}
