import React, { createContext, useState, ReactNode } from "react";
import { Linking } from "react-native";


type Country = {
  code: string;
  id: string;
  name: string;
}

type GlobalContextType = {
  selectedCountry: Country;
  modalVisible: boolean;
  handleModalVisible: (visible: boolean) => void;
  selectCountry: (country: Country) => void;
}

type ProviderType = {
  children: ReactNode;
}

export const GlobalContext = createContext({} as GlobalContextType);

export function GlobalProvider({ children }: ProviderType) {
  const [selectedCountry, setSelectedCountry] = useState({} as Country);
  const [modalVisible, setModalVisible] = useState(false);

  function sendMessage() {
    Linking.openURL(`https://wa.me/${0}${0}`)
  }

  function handleModalVisible(visible: boolean) {
    setModalVisible(visible);
  }

  function selectCountry(country: Country) {
    if (country) {
      setSelectedCountry({
        code: country.code,
        id: country.id,
        name: country.name
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        modalVisible,
        handleModalVisible,
        selectedCountry,
        selectCountry
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}