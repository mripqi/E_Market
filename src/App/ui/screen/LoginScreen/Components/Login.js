import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import Button from '../../../component/Button/Index';
import TextInput from '../../../component/TextInput/Index';
import Logo from '../../../assets/react.svg';
const Login = ({navigation}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <View style={{margin: 20}}>
          <Logo height={250} />
        </View>
        <Text style={styles.judul}>Welcome</Text>
        <TextInput
          placeholder="   Email"
          // value={Loginreducer.email}
          // onChangeText={e => onInputChange(e, 'email')}
        />
        <TextInput
          placeholder=" Password"
          // value={Loginreducer.password}
          // onChangeText={e => onInputChange(e, 'password')}
          secureTextEntry={true}
        />
        <Button
          handleClick={() => navigation.navigate('Home')}
          text={'Login'}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#0d1224',
    alignItems: 'center',
  },

  judul: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'roboto',
    padding: 20,
  },

  text: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'roboto',
  },

  textbawah: {
    textAlign: 'center',
    color: 'white',
  },
  textbold: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Login;
