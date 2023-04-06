import React from 'react';
import { TextInputProps } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import { styles } from './styles';


type InputNumberProps = TextInputProps;

export function InputNumber(props: InputNumberProps) {
  return (
    <TextInputMask
      style={styles.input}
      placeholder="Digite o número"
      clearButtonMode="while-editing"
      keyboardType="phone-pad"
      type={'cel-phone'}
      options={{
        maskType: 'BRL',
        withDDD: true,
        dddMask: '(99) '
      }}
      value={props.value}
      onChangeText={props.onChangeText}
    />
  );
}