'use strict'
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import HomeScreen from '../screens/HomeScreen'
import ScheduleScreen from '../screens/ScheduleScreen'
import StatusBarBackground from './StatusBarBackground'


class ViewContainer extends Component {



  constructor(props) {
    super(props)
  }

  render() {

    switch(this.props.selectedItem) {
      case "schedule":
        return (
            <ScheduleScreen />
        )
      case "home":
        return (
          <View style={styles.container}>
            <HomeScreen />
          </View>
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

module.exports = ViewContainer
