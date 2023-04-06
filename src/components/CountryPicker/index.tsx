import React, { useState } from "react";
import { FlatList, View } from "react-native";

import { Countries, CountryProps } from "../../objects/countries";
import { CountryItem } from "../CountryItem";
import { InputText } from "../InputText";

import { styles } from './styles';


export function CountryPicker() {
  const countryList = Countries;
  const [filteredCountryList, setFilteredCountryList] = useState<Array<CountryProps>>(countryList);

  function filterList(filterText: string) {
    filterText = filterText.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    setFilteredCountryList(filterText !== '' 
      ? countryList.filter(country => country.name.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(filterText))
        : countryList);
  }

  return (
    <View style={styles.mainContainer} >
      <View style={styles.container} >
        <View style={styles.inputContainer} >
          <InputText onChangeText={(value) => filterList(value)} />
        </View>
        <FlatList
          style={styles.list}
          data={filteredCountryList}
          renderItem={
            ({ item }) =>
              <CountryItem
                isoCode={item.id}
                ddi={item.code}
                countryName={item.name}
              />
          }
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}