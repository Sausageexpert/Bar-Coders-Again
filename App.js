import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Scanner from './Screens/Scanner';

export default class App extends React.Component {
  render(){
    return <AppContainer/>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const radar = createSwitchNavigator({
  Scanner: Scanner
});

const AppContainer = createAppContainer(radar);
