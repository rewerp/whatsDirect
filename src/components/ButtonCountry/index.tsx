import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import CountryFlag from "react-native-country-flag";

import { useGlobal } from "../../hooks/useGlobal";

import { styles } from "./styles";


type ButtonCountryPros = TouchableOpacityProps & {
  isoCode: string;
  ddi: string;
  countryName: string;
};

export function ButtonCountry(props: ButtonCountryPros) {
  const { modalVisible, handleModalVisible, selectedCountry, selectCountry } = useGlobal();

  return (
    <TouchableOpacity 
      style={styles.input} 
      activeOpacity={0.8} 
      onPress={props.onPress}
    >
      <View style={styles.flagContainer} >
        <CountryFlag isoCode={props.isoCode} size={25} />
      </View>
      <View style={styles.textContainer} >
        <Text style={styles.text} >{`(+${props.ddi}) ${props.countryName}`} </Text>
      </View>
    </TouchableOpacity>
  );
}