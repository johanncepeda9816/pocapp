import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TextInputProps,
  Text,
} from "react-native";
import CustomLabel from "./CustomLabel";

interface ICustomTextInput extends TextInputProps {
  label?: string;
  value?: string;
}

export default function CustomTextInput(props: ICustomTextInput) {
  const { label, value } = props;

  return (
    <View style={styles.container}>
      <CustomLabel>{label}</CustomLabel>
      <TextInput
        value={value}
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {value?.length === 0 && <Text>Este campo es obligatorio</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    margin: 20,
  },
  input: {
    margin: 20,
    marginBottom: 5,
    padding: 5,
    width: "80%",
    borderRadius: 20,
    borderColor: "#000",
    borderWidth: 1,
  },
});
