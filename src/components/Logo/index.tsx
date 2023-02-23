import React from 'react';
import { Image, View } from 'react-native';

import Logo from '../../assets/images/logoMain.png';

import { styles } from './styles';

export function LogoMain() {
  return (
    <Image
      source={Logo}
      style={styles.logo}
    />
  );
}