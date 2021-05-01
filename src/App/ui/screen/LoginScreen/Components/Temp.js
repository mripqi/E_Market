import React from 'react';
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
  return (
    <ImageBackground
      source={{
        uri: Constants.backgroundLogin,
      }}
      style={styles.backgroundImage}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}>
          <View style={styles.container}>
            <Text style={styles.judul}>{Constants.Login_Title}</Text>
            <View style={styles.containerTextInput}>
              <Text style={styles.judul}>{Constants.Login_Title}</Text>
              <TextInput
                placeholder="Email"
                // value={Loginreducer.email}
                // onChangeText={e => onInputChange(e, 'email')}
              />
              <Text style={styles.judul}>{Constants.Login_Title}</Text>
              <TextInput
                placeholder="Password"
                // value={Loginreducer.password}
                // onChangeText={e => onInputChange(e, 'password')}
                secureTextEntry={true}
              />
              <Button
                handleClick={() => navigation.navigate('Home')}
                text={Constants.Login}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    flexDirection: 'column',
  },
  containerTextInput: {
    flex: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    marginTop: '40%',
  },

  judul: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'roboto',
    padding: 20,
  },

  text: {
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'roboto',
  },

  textbawah: {
    textAlign: 'center',
    color: 'black',
  },
  textbold: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
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
