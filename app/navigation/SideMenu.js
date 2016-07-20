'use strict'
import HomeScreen from '../screens/HomeScreen'
import ScheduleScreen from '../screens/ScheduleScreen'
import StatusBarBackground from '../components/StatusBarBackground'

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import NavigationBar from 'react-native-navbar';
import NavBarIcon from '../components/NavBarIcon'
import NavBarTitle from '../components/NavBarTitle'
import API from './../services/API'
import Storage from './../services/Storage'
import LoadingScreen from './../screens/LoadingScreen'
import Utils from './../Utils.js'

const RNSideMenu = require('react-native-side-menu');
const SideMenuContent = require('./../navigation/SideMenuContent');

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


module.exports = class SideMenu extends Component {


  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      showPlaceHolderView: false
    };
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen, });
  }

  toggleMenu = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const menu = <SideMenuContent toggleMenu={this.toggleMenu} changeScreen={this.props.changeScreen} />;

    return (
      <RNSideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={(isOpen) => this.updateMenuState(isOpen)}>
        <StatusBarBackground />
        <NavigationBar
          title={<NavBarTitle navTitle={this.props.navTitle} />}
          leftButton={<NavBarIcon iconName="bars" toggleMenu={this.toggleMenu} />}
          tintColor="#008a96" />
          {this.props.children}
      </RNSideMenu>
    );
  }
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 20,
    padding: 10,
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
