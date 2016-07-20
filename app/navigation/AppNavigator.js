import React, { Component } from 'react'
import { Navigator, View } from 'react-native';
import HomeScreen from './../screens/HomeScreen';
import ScheduleScreen from './../screens/ScheduleScreen';

class AppNavigator extends Component {


  constructor(props) {
    super(props)
  }

  _renderScene(route, navigator) {

    switch(route.ident) {
      case "Schedule":
        return (
            <ScheduleScreen />
        )
      case "home":
        return (
            <HomeScreen />
        )
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={this.props.initialRoute}
        ref="appNavigator"
        //style="styles.navigatorStyles"
        renderScene={this._renderScene}
      />
    )
  }
}


module.exports = AppNavigator
