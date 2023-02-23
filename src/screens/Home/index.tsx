import React, { useState } from 'react';
import { View, Linking, Modal } from 'react-native';

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
  const [modalVisible, setModalVisible] = useState(false);
  // const { modalVisible, handleModalVisible, selectedCountry } = useGlobal();
  // const country: Country = {
  //   code: selectedCountry ? selectedCountry.code : 'br',
  //   id: selectedCountry ? selectedCountry.id : '55',
  //   name: selectedCountry ? selectedCountry.name : 'Brasil'
  // }

  return (
    <View style={styles.screen} >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <CountryPicker />
      </Modal>
      <LogoMain />
      <View style={styles.container} >
        <ButtonCountry
          // isoCode={country.code}
          // ddi={country.id}
          // countryName={country.name}
          isoCode='br'
          ddi='55'
          countryName='Brasil'
          onPress={() => setModalVisible(true)}
        />
        <InputNumber />
        <ButtonSend
          title='Enviar'
        />
      </View>
    </View>
  );
}