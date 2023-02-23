import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import CountryFlag from "react-native-country-flag";

import { useGlobal } from "../../hooks/useGlobal";

import { styles } from "./styles";


type CountryItemProps = TouchableOpacityProps & {
  isoCode: string;
  ddi: string;
  countryName: string;
};

type Country = {
  code: string;
  id: string;
  name: string;
};

export function CountryItem(props: CountryItemProps) {
  const { handleModalVisible, selectCountry } = useGlobal();
  const itemCountry: Country = {
    code: props.isoCode,
    id: props.ddi,
    name: props.countryName
  }

  function handleSelectCountry(country: Country) {
    console.log(country);

    // selectCountry(country);
    // handleModalVisible(false);
  }

  return (
    <TouchableOpacity
      style={styles.input}
      activeOpacity={0.8}
      onPress={() => handleSelectCountry(itemCountry)}
    >
      <View style={styles.flagContainer} >
        <CountryFlag isoCode={props.isoCode} size={18} />
      </View>
      <View style={styles.textContainer} >
        <Text style={styles.text} >{`(+${props.ddi}) ${props.countryName}`} </Text>
      </View>
    </TouchableOpacity>
  );
}