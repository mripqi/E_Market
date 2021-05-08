import React, {useEffect} from 'react';
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
import {store, product} from '@app/utils/dummyData';
import {useDispatch} from 'react-redux';
import {setData, setProduct} from '@app/redux';

const Index = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProduct(product));
    dispatch(setData(store));
  }, []);

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
