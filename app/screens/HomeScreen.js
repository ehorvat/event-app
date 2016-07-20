import React, { Component } from 'react';
import { AppRegistry, Navigator, StyleSheet, Text, View } from 'react-native';
import _ from 'lodash'
import Icon from 'react-native-vector-icons/FontAwesome'

const navigationSquares = [
    {label: "Schedule", icon: "calendar-o", section:"Event Guide"},
    {label: "Speakers", icon: "commenting", section:"Event Guide"},
    {label: "Attendees", icon: "group", section:"Event Guide"},
    {label: "Exhibitors", icon: "bullhorn", section:"Event Guide"},
    {label: "Sponsors", icon: "bookmark", section:"Event Guide"},
    {label: "Maps", icon: "map-marker", section:"Event Guide"},
    {label: "Onsite Information", icon: "info", section:"Event Guide"},
    {label: "Activity Feed", icon: "comments", section:"Event Guide"},
    {label: "Search", icon: "search", section:"Event Guide"}
];

class HomeScreen extends Component {
    render() {

      return (
        <View style={styles.parent}>
          <View style={styles.row}>
            {navigationSquares.slice(0, 3).map((data, key) => {
              return <Square key={key} navigationItems = {data} />
            })}
          </View>
          <View style={styles.row}>
            {navigationSquares.slice(3, 6).map((data, key) => {
              return <Square key={key} navigationItems = {data} />
            })}
          </View>
          <View style={styles.row}>
            {navigationSquares.slice(6, 9).map((data, key) => {
              return <Square key={key} navigationItems = {data} />
            })}
          </View>
        </View>
      );
  }
}

var Square = React.createClass({
  render() {
    return (
      <View style={styles.square}>
        <Icon name={this.props.navigationItems.icon} style={styles.squareIcon} />
        <Text style={styles.squareLabel}>{this.props.navigationItems.label}</Text>
      </View>
    );
  }
})


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
  },
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


module.exports = HomeScreen;
