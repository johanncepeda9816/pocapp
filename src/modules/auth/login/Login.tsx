import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import Container from "../../../commons/components/Container";
import CustomButton from "../../../commons/components/forms/CustomButton";
import CustomTextInput from "../../../commons/components/forms/CustomTextInput";
import CustomTitle from "../../../commons/components/forms/CustomTitle";
import { Required_fields } from "../../../commons/constants/Alerts";
import { SECONDARY } from "../../../commons/constants/Colors";
import { initialStateAuth } from "../../../commons/constants/Contants";
import { IAuthData } from "../../../commons/types/CommonTypes";
import useAuth from "../hooks/useAuth";

export default function Login() {
  const navigation = useNavigation<any>();
  const [authData, setAuthData] = useState<IAuthData>(initialStateAuth);
  const { loading, loginWithUsernameAndPassword, userAuth } = useAuth();

  useEffect(() => {
    if (userAuth && userAuth.isAuth) navigation.navigate("Home");
  }, [userAuth]);

  const onLogin = () => {
    if (authData.username.trim() === "" || authData.password?.trim() === "") {
      Required_fields();
    } else {
      loginWithUsernameAndPassword(authData.username, authData.password || "");
    }
  };

  if (!loading) {
    return (
      <Container>
        <CustomTitle>Bienvenido</CustomTitle>
        <CustomTextInput
          label="Username *"
          onChangeText={(text: string) =>
            setAuthData({ ...authData, username: text })
          }
          value={authData.username}
          placeholder="your-username"
        />
        <CustomTextInput
          label="Password *"
          onChangeText={(text: string) =>
            setAuthData({ ...authData, password: text })
          }
          value={authData.password}
          secureTextEntry={true}
          placeholder="**********"
        />
        <CustomButton onPress={onLogin} title="Login" />
      </Container>
    );
  } else {
    return (
      <Container>
        <ActivityIndicator color={SECONDARY} />
      </Container>
    );
  }
}
