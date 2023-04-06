import React, { useState } from 'react';
import { View, Modal, Linking } from 'react-native';

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
  const [phoneNumber, setPhoneNumber] = useState('');
  const country: Country = {
    code: selectedCountry.code,
    id: selectedCountry.id,
    name: selectedCountry.name
  }

  function sendMessage() {
    if ((country.id !== '') && (phoneNumber !== '')) {
      Linking.openURL(`https://wa.me/${country.id}${phoneNumber}`)
    }
  }

  function handlePhoneNumberMask(phoneNumber: string) {
    setPhoneNumber(phoneNumber.replace(/\D/g, ""));
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
        <InputNumber
          value={phoneNumber}
          onChangeText={(value) => handlePhoneNumberMask(value)}
        />
        <ButtonSend
          title='Enviar'
          onPress={() => sendMessage()}
        />
      </View>
    </View>
  );
}