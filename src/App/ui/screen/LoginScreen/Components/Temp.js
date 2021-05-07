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
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Constants from '@app/utils/constant';

const Login = ({navigation}) => {
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
            <View style={{marginTop: 30, marginLeft: 20}}>
              <Text style={styles.title}>
                {Constants.Welcome + ' ' + Constants.App}
              </Text>
              <Text style={styles.subtitle}>{Constants.Login_instruction}</Text>
            </View>
            <View style={styles.inner}>
              <View>
                <Text style={styles.textTitle}>{Constants.Email}</Text>
                <TextInput
                  placeholder={Constants.Email}
                  style={styles.input}
                  placeholderTextColor={'black'}
                />
              </View>
              <View>
                <Text style={styles.textTitle}>{Constants.Password}</Text>
                <TextInput
                  placeholder={Constants.Password}
                  style={styles.input}
                  placeholderTextColor={'black'}
                  secureTextEntry={true}
                />
              </View>
              <View style={{alignItems: 'center', marginTop: 20}}>
                <TouchableOpacity
                  onPress={() => console.log()}
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
                  <Text style={{color: 'blue'}} onPress={() => console.log()}>
                    {Constants.Telphone}
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
    marginBottom: 20,
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
