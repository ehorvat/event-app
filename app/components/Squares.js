import React, { Component } from 'react';
import { AppRegistry, Navigator, StyleSheet, Text, View } from 'react-native';
import Square from './Square'

var Squares = React.createClass({
  render() {

    var squares = [];

    this.props.eventGuideNavItems.map(function(data, key){
      if(data.section !== "My Items") {
        squares.push(<Square key={key} navigationItems = {data} location="homescreen" />)
      }
    });

    return (
      <View style={styles.parent}>
        <View style={styles.row}>
          {squares.slice(0, 3)}
        </View>
        <View style={styles.row}>
          {squares.slice(3, 6)}
        </View>
        <View style={styles.row}>
          {squares.slice(6, 9)}
        </View>
      </View>
    )
  }
});

var styles = StyleSheet.create({
  parent: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: -10
  }
});

module.exports = Squares
