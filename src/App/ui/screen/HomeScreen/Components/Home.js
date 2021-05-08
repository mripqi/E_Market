import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ProductScreen from '@app/ui/screen/HomeScreen/Screen/ProductScreen';
import StoreScreen from '@app/ui/screen/HomeScreen/Screen/StoreScreen';

const Home = () => {
  const Toptab = createMaterialTopTabNavigator();

  return (
    <View style={{flex: 1}}>
      <Toptab.Navigator
        style={{borderRadius: 30}}
        tabBarOptions={{
          labelStyle: {
            color: 'blue',
          },
          indicatorStyle: {
            backgroundColor: '#2bc27d',
          },
        }}>
        <Toptab.Screen name={'Product'} component={ProductScreen} />
        <Toptab.Screen name={'Warung'} component={StoreScreen} />
      </Toptab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
