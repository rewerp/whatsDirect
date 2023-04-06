import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";


type InpurtTextProps = TextInputProps;

export function InputText(props: InpurtTextProps) {
  return (
    <TextInput 
      style={styles.input} 
      placeholder='Pesquisar um país' 
      onChangeText={props.onChangeText} 
    />
  );
}