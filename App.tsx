import { ImageBackground, View } from 'react-native';

import { Home } from './src/screens/Home';
import { GlobalProvider } from './src/contexts/globalContext';

import BackGroundImg from './src/assets/images/wtsback.png';


export default function App() {
  return (
    <GlobalProvider>
      <View>
        <ImageBackground
          source={BackGroundImg}
          style={{ width: '100%', height: '100%' }}
        >
          <Home />
        </ImageBackground>
      </View>
    </GlobalProvider>
  );
}
