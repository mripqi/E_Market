import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

export default function ButtonComponent({handleClick, text, color}) {
  return (
    <TouchableOpacity
      onPress={() => handleClick(text)}
      style={styles.listContainer}>
      <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 15,
          borderColor: 'black',
          borderWidth: 1,
          borderRadius: 5,
          backgroundColor: color,
          alignItems: 'center',
        }}>
        <Text style={styles.textList}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingRight: 10,
    paddingBottom: 10,
    width: '80%',
  },
  listWrapper: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  textList: {color: 'black', fontSize: 16},
});
