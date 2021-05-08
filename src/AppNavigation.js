import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '@app/ui/screen/HomeScreen/Index';
import AuthCheckScreen from '@app/ui/screen/AuthScreen/index';
import LoginScreen from '@app/ui/screen/LoginScreen/Index';
import ProfileScreen from '@app/ui/screen/ProfileScreen/Index';
import HomeIcon from '@app/ui/assets/svg/Home_Tab.svg';
import ProfileIcon from '@app/ui/assets/svg/Profile_Tab.svg';

import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {setToken} from '@app/redux';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const MyHomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Home'}
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const MyBottomTabs = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name={'Main'}
        component={MyHomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <HomeIcon color={color} width={20} />,
        }}
      />
      <BottomTab.Screen
        name={'Profile'}
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => <ProfileIcon color={color} width={20} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

const AppNavigation = ({isLoading, changeLoading}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    AsyncStorage.getItem('@token').then(result => {
      dispatch(setToken(result, 'token'));
      const timer = setTimeout(() => {
        changeLoading();
      }, 1500);
      return () => clearTimeout(timer);
    });
  }, []);

  const ReduxToken = useSelector(state => state.LoginReducer.token);

  if (isLoading) {
    return <AuthCheckScreen />;
  }
  return (
    <Stack.Navigator>
      {ReduxToken === null ? (
        <Stack.Screen
          name={'Login'}
          component={LoginScreen}
          options={{headerShown: false}}
        />
      ) : (
        <Stack.Screen
          name={'Home'}
          component={MyBottomTabs}
          options={{headerShown: false}}
        />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigation;
