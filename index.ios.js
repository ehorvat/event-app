import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import AppNavigator from './app/navigation/AppNavigator'
import Event from './Event.js'

AppRegistry.registerComponent('eventapp', () => Event);
