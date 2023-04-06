import React, { createContext, useState, ReactNode } from "react";


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
  const [selectedCountry, setSelectedCountry] = useState({ code: 'br', id: '55', name: 'Brasil' } as Country);
  const [modalVisible, setModalVisible] = useState(false);

  function handleModalVisible(visible: boolean) {
    setModalVisible(visible);
  }

  function selectCountry(country: Country) {
    country && setSelectedCountry({ code: country.code, id: country.id, name: country.name })
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