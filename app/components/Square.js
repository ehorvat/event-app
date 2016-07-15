import React, { Component } from 'react';
import { AppRegistry, Navigator, StyleSheet, Text, View } from 'react-native';
import _ from 'lodash'
import Icon from 'react-native-vector-icons/FontAwesome'


var Square = React.createClass({
  render() {
      if(this.props.location === "homescreen") {
        return (<HomeScreenSquare navigationItems={this.props.navigationItems} />);
      } else if(this.props.location === "sidemenu") {
        return (<SlideMenuSquare navigationItems={this.props.navigationItems} />);
      }
  }
});

var HomeScreenSquare = React.createClass({
  render() {
    return (
      <View style={styles.square}>
        <Icon name={this.props.navigationItems.icon} style={styles.squareIcon} />
        <Text style={styles.squareLabel}>{this.props.navigationItems.label}</Text>
      </View>
    );
  }
})

var SlideMenuSquare = React.createClass({
  render() {
    return (
      <View style={styles.sideMenuSquare}>
        <Icon name={this.props.navigationItems.icon} style={styles.sideMenuIcon} />
      </View>
    );
  }
});

var styles = StyleSheet.create({

  square: {
    marginLeft: 10,
    backgroundColor: '#008a96',
    height: 100,
    width: 100
  },
  squareIcon: {
    flex: 1,
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
    marginTop: 20
  },
  squareLabel: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
    marginBottom: 7
  },
  sideMenuSquare: {
    marginLeft: 10,
    backgroundColor: '#008a96',
    height: 35,
    width: 35
  },
  sideMenuIcon: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 8
  }

});

module.exports = Square;
