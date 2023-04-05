import React from 'react';
import { View, Modal } from 'react-native';

import { ButtonSend } from '../../components/ButtonSend';
import { LogoMain } from '../../components/Logo';
import { InputNumber } from '../../components/InputNumber';
import { ButtonCountry } from '../../components/ButtonCountry';
import { CountryPicker } from '../../components/CountryPicker';
import { useGlobal } from '../../hooks/useGlobal';

import { styles } from './styles';


type Country = {
  code: string;
  id: string;
  name: string;
}

export function Home() {
  const { modalVisible, handleModalVisible, selectedCountry } = useGlobal();
  const country: Country = {
    code: selectedCountry.code,
    id: selectedCountry.id,
    name: selectedCountry.name
  }

  return (
    <View style={styles.screen} >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => handleModalVisible(false)}
      >
        <CountryPicker />
      </Modal>
      <LogoMain />
      <View style={styles.container} >
        <ButtonCountry
          isoCode={country.code}
          ddi={country.id}
          countryName={country.name}
          onPress={() => handleModalVisible(true)}
        />
        <InputNumber />
        <ButtonSend
          title='Enviar'
        />
      </View>
    </View>
  );
}