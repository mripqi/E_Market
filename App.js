import React, {useState} from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './src/AppNavigation';
import {Provider} from 'react-redux';
import {store} from '@app/redux';

const App = () => {
  const [TokenCheck, setTokenCheck] = useState(true);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Provider store={store}>
          <AppNavigation
            isLoading={TokenCheck}
            changeLoading={() => setTokenCheck(false)}
          />
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
