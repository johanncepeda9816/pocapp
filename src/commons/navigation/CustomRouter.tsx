import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../modules/auth/login/Login";
import CustomTabs from "./CustomTabs";

const Stack = createNativeStackNavigator();

export default function CustomRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={"Login"}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Tabs" component={CustomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
