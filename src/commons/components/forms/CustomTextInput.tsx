import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TextInputProps,
  Text,
} from "react-native";

interface ICustomTextInput extends TextInputProps {
  label?: string;
}

export default function CustomTextInput(props: ICustomTextInput) {
  const { label } = props;
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  input: {},
});
