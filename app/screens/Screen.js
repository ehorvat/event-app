'use strict'
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import HomeScreen from './HomeScreen'
import ScheduleScreen from './ScheduleScreen'


class Screen extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    switch(this.props.currentScreen) {
      case "Schedule":
        return (
            <ScheduleScreen screenData={this.props.screenData} conferenceDates={this.props.conferenceDates} />
        )
      case "Event Guide":
        return (
            <HomeScreen screenData={this.props.screenData} />
        )
    }

  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }

})

module.exports = Screen
