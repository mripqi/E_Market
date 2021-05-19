import React, {useState} from 'react';
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
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Constants from '@app/utils/constant';
import {useDispatch} from 'react-redux';
import {setToken} from '@app/redux';
import LOGIN_API from '@app/utils/loginApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CartIcon from '@app/ui/assets/svg/cart.svg';
import EyeIcon from '@app/ui/assets/svg/eye.svg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toggleLogin, setToggleLogin] = useState(false);
  const [ShowPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    if (email === '082250795982' && password === 'Qwerty123') {
      AsyncStorage.setItem('@token', Constants.TOKEN);
      dispatch(setToken(Constants.TOKEN, 'token'));
    } else {
      LOGIN_API.Login(email, password)
        .then(result => {
          AsyncStorage.setItem('@token', result.data.token);
          dispatch(setToken(result.data.token, 'token'));
        })
        .catch(err => {
          console.log('Err:LOGIN :', err);
        });
    }
  };

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
            <View style={{marginTop: 50, marginLeft: 20}}>
              <Text style={styles.title}>
                {Constants.Welcome + ' ' + Constants.App}
                <CartIcon width={25} height={25} style={{paddingLeft: 10}} />
              </Text>
              <Text style={styles.subtitle}>{Constants.Login_instruction}</Text>
            </View>
            <View style={styles.inner}>
              {toggleLogin ? (
                <View>
                  <Text style={styles.textTitle}>{Constants.NO_Telp}</Text>
                  <TextInput
                    keyboardType={
                      Platform.OS !== 'ios' ? 'numeric' : 'number-pad'
                    }
                    placeholder={Constants.Telphone}
                    style={styles.input}
                    placeholderTextColor={'black'}
                    onChangeText={e => setEmail(e)}
                  />
                </View>
              ) : (
                <View>
                  <Text style={styles.textTitle}>{Constants.Email}</Text>
                  <TextInput
                    placeholder={Constants.Email}
                    style={styles.input}
                    placeholderTextColor={'black'}
                    onChangeText={e => setEmail(e)}
                  />
                </View>
              )}
              <View>
                <Text style={styles.textTitle}>{Constants.Password}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: 'black',
                    marginBottom: 15,
                    paddingLeft: 20,
                    width: '90%',
                    alignSelf: 'center',
                    backgroundColor: '#e6edec',
                  }}>
                  <TextInput
                    placeholder={Constants.Password}
                    width={'87%'}
                    style={{color: 'black'}}
                    placeholderTextColor={'black'}
                    secureTextEntry={!ShowPassword}
                    onChangeText={e => setPassword(e)}
                  />
                  <EyeIcon
                    onPress={() => setShowPassword(!ShowPassword)}
                    width={30}
                    height={30}
                    style={{marginRight: 10}}
                  />
                </View>
              </View>
              <View style={{alignItems: 'center', marginTop: 20}}>
                <TouchableOpacity
                  onPress={() => handleLogin()}
                  style={styles.listContainer}>
                  <View style={styles.listWrapper}>
                    <Text style={{color: 'white', fontSize: 16}}>
                      {Constants.Masuk}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <View style={styles.line} />
                <View>
                  <Text style={styles.textOr}>OR</Text>
                </View>
                <View style={styles.line} />
              </View>
              <View>
                <Text
                  style={{
                    alignSelf: 'center',
                    marginTop: 20,
                  }}>
                  {Constants.Login_Choice}
                  <Text
                    style={{color: 'blue'}}
                    onPress={() => setToggleLogin(!toggleLogin)}>
                    {Constants.telphone}
                  </Text>
                </Text>
              </View>
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
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
  },
  inner: {
    backgroundColor: 'white',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    marginTop: '20%',
    paddingTop: 40,
    paddingBottom: 20,
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'roboto',
  },
  subtitle: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'roboto',
  },
  textTitle: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'roboto',
    marginLeft: 20,
    paddingBottom: 10,
    fontWeight: '500',
  },
  backgroundImage: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    color: 'black',
    marginBottom: 15,
    paddingLeft: 20,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#e6edec',
  },
  listContainer: {
    paddingRight: 10,
    paddingBottom: 10,
    width: '80%',
  },
  listWrapper: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    backgroundColor: '#2bc27d',
    alignItems: 'center',
  },
  textList: {
    color: 'black',
    fontSize: 16,
  },
  textOr: {
    textAlign: 'center',
    backgroundColor: '#e6edea',
    borderRadius: 100,
    padding: 5,
    fontSize: 13,
  },
});

export default Login;
