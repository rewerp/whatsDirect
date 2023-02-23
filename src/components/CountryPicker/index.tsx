import React from "react";
import { FlatList, View } from "react-native";

import { Countries } from "../../objects/countries";
import { CountryItem } from "../CountryItem";
import { InputText } from "../InputText";

import { styles } from './styles';


export function CountryPicker() {
  return (
    <View style={styles.mainContainer} >
      <View style={styles.container} >
        <View style={styles.inputContainer} >
          <InputText />
        </View>
        <FlatList
          style={styles.list}
          data={Countries}
          renderItem={
            ({ item }) =>
              <CountryItem
                isoCode={item.id}
                ddi={item.code}
                countryName={item.name}
                // onPress={() => }
              />
          }
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}