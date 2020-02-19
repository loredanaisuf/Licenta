import React, { Component } from 'react';
import { StyleSheet,View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {Login} from './components/Login';
import {Signup} from './components/Signup';
import {Home}  from './components/Home';
import {Map} from './components/Map';
import {AddInformations} from './components/AddInformations';


const MainNavigator = createStackNavigator({
  Home: {
    screen: Home, navigationOptions: {
      header: null,
    }
  },
  Map: {
    screen: Map, navigationOptions: {
      header: null,
    }
  },
  AddInformations: {
    screen: AddInformations, navigationOptions: {
      header: null,
    }
  },
  Login: {
    screen: Login, navigationOptions: {
      header: null,
    }
  },
  Signup: {
    screen: Signup, navigationOptions: {
      header: null,
    }
  }
});

const App = createAppContainer(MainNavigator);

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7f0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
