import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TextInputProps,
  Text,
} from "react-native";
import { SECONDARY } from "../../constants/Colors";
import CustomError from "./CustomError";
import CustomLabel from "./CustomLabel";

interface ICustomTextInput extends TextInputProps {
  label?: string;
  value?: string;
  onChangeText: any;
  placeholder: string;
}

export default function CustomTextInput(props: ICustomTextInput) {
  const { label, value, onChangeText, placeholder } = props;
  const [hasTouched, setHasTouched] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <CustomLabel>{label}</CustomLabel>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor={"#ccc"}
        onEndEditing={() => setHasTouched(true)}
      />
      {value?.length === 0 && hasTouched && (
        <CustomError>Este campo es obligatorio</CustomError>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    margin: 10,
  },
  input: {
    margin: 10,
    marginBottom: 5,
    padding: 5,
    width: "80%",
    borderRadius: 20,
    borderColor: "#000",
    borderWidth: 1,
    alignSelf: "center",
    textAlign: "center",
    color: SECONDARY,
  },
});
