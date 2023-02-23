import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "./styles";


type ButtonSendProps = TouchableOpacityProps & {
  title: string;
}

export function ButtonSend(props: ButtonSendProps) {
  return (
    <TouchableOpacity 
      style={styles.button} 
      activeOpacity={0.8} 
      onPress={props.onPress}
    >
      <Text style={styles.text} >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}