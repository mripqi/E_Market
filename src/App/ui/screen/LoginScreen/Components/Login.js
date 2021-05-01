import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Button from '@app/ui/component/Button/Index';
import TextInput from '@app/ui/component/TextInput/Index';
import Constants from '@app/utils/constant';
import {Header} from '@react-navigation/stack';

const Login = ({navigation}) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <ImageBackground
      source={{
        uri: Constants.backgroundLogin,
      }}
      style={styles.backgroundImage}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardContainer}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Text style={styles.judul}>
              {Constants.Welcome + ' ' + Constants.App}
            </Text>
            <View style={styles.inner}>
              <Text style={styles.judul}>{Constants.Email}</Text>
              <TextInput
                placeholder={Constants.Email}
                // value={Loginreducer.email}
                // onChangeText={e => onInputChange(e, 'email')}
              />
              <Text style={styles.judul}>{Constants.Password}</Text>
              <TextInput
                placeholder={Constants.Password}
                // value={Loginreducer.password}
                // onChangeText={e => onInputChange(e, 'password')}
                secureTextEntry={true}
              />
              <Button
                handleClick={() => navigation.navigate('Home')}
                text={Constants.Masuk}
                textColor={'white'}
                color={'#3edbf0'}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  inner: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    marginTop: '20%',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
  judul: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'roboto',
  },
  backgroundImage: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Login;
