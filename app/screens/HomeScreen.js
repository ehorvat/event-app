import React, { Component } from 'react';
import { AppRegistry, Navigator, StyleSheet, Text, View } from 'react-native';
import Squares from '../components/Squares'
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
          <Squares eventGuideNavItems={navigationSquares} />
      );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});

module.exports = HomeScreen;
