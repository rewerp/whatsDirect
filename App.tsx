import { ImageBackground, View } from 'react-native';

import { Home } from './src/screens/Home';

import BackGroundImg from './src/assets/images/wtsback.png';


export default function App() {

  return (
    <View>
      <ImageBackground
        source={BackGroundImg}
        style={{ width: '100%', height: '100%' }}
      >
        <Home />
      </ImageBackground>
    </View>
  );
}
