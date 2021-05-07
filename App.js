import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './src/AppNavigation';
import {Provider} from 'react-redux';
import {store} from '@app/redux';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Provider store={store}>
          <AppNavigation />
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
