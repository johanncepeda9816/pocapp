import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, Text, View } from "react-native";

export default function Login() {
  const navigation = useNavigation<any>();

  return (
    <View style={{ backgroundColor: "red", flex: 1 }}>
      <Text style={{ color: "#0000", fontSize: 80 }}>HOla</Text>
      <Pressable onPress={() => navigation.navigate("Home")}>
        <Text>Home</Text>
      </Pressable>
    </View>
  );
}
