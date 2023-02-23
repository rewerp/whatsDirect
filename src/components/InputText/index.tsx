import React from "react";
import { TextInput } from "react-native";
import { styles } from "./styles";

export function InputText() {
  return (
    <TextInput style={styles.input} placeholder='Pesquisar um país' />
  );
}