import React from 'react';
import {
  SafeAreaView,
  useColorScheme,
  ImageBackground,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import FocusStatusBar from '@app/ui/component/StatusBar/Index';
import Home from './Components/Home';
import Header from './Components/Header';
import Constants from '@app/utils/constant';

const Index = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={(backgroundStyle, {flex: 1})}>
      <ImageBackground
        source={{
          uri: Constants.backgroundLogin,
        }}
        style={styles.backgroundImage}>
        <FocusStatusBar
          translucent={false}
          backgroundColor={!isDarkMode ? 'white' : 'black'}
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        />
        <Header navigation={navigation} />
        <Home />
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
export default Index;
