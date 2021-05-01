import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
export default function InputText(props) {
  return (
    <TextInput style={styles.input} placeholderTextColor={'black'} {...props} />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'black',
    color: 'black',
    marginBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 20,
    width: '90%',
  },
});
