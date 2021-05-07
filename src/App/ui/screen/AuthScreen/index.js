import React from 'react';
import {View, StatusBar, StyleSheet, Text} from 'react-native';
import SplashLogo from '@app/ui/assets/react.svg';
import Constants from '@app/utils/constant';

const AuthCheckScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#f2f5f7'} barStyle="dark-content" />
      <View style={styles.loginTopView}>
        <SplashLogo width={100} height={100} />
      </View>
      <Text style={styles.textAuth}>{Constants.Authenticating}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f5f7',
  },
  loginTopView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 194,
    marginBottom: 60,
  },
  textAuth: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  // modal styles
  containerModal: {
    backgroundColor: 'white',
    borderRadius: 6,
  },
  contentModal: {
    paddingBottom: 12,
    paddingTop: 32,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  messageModal: {
    textAlign: 'center',
    fontSize: 17,
    color: '#333333',
    fontWeight: '400',
  },
  actionsModal: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  updateModal: {
    width: 134,
    height: 44,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(250, 92, 102)',
  },
  cancelModal: {
    width: 114,
    borderRadius: 6,
    borderWidth: 1,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgb(112, 112, 112)',
    height: 44,
    backgroundColor: 'white',
  },
  cancelTextModal: {
    fontSize: 16,
    fontWeight: '500',
    color: 'rgb(112, 112, 112)',
  },
  updateTextModal: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default AuthCheckScreen;
