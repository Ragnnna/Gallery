/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native'
import { Provider } from 'react-redux';
import Navigation from './components/Navigation';
import { store } from './store/rootReducer';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.main}>
        <Navigation/>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1
  }
})

export default App;
