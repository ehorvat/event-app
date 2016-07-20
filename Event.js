'use strict'
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import API from './app/services/API'
import Storage from './app/services/Storage'
import Utils from './app/Utils.js'
import SideMenu from './app/navigation/SideMenu'
import AppNavigator from './app/navigation/AppNavigator'
import Screen from './app/screens/Screen'

var SplashScreen = require('@remobile/react-native-splashscreen');

module.exports = class Event extends Component {


  constructor(props) {
    super(props)
    this.onChangeScreen = this.onChangeScreen.bind(this)
    this.state = {
      screen: "Event Guide",
      conferenceDates: [],
      screenData: []
    }
  }

  componentDidMount() {

    var conferenceDates = [];

    //Storage.getKeys().then((res) => {
      //if(res.length === 0) {
        API.fetchData().then((res) => {
          var {listViewData, conferenceDates} = Utils.sortScheduleData(res.Schedule.events)
          SplashScreen.hide();
          this.setState ({
            conferenceDates: conferenceDates,
            screenData: listViewData
          });

          /*for(var i = 0; i < listViewData.length; i++) {
            Storage.setCache("day"+i, JSON.stringify(listViewData[i]))
          }
          Storage.setCache("conferenceDates", JSON.stringify(conferenceDates));*/
        })
      //}
    //})
  }

  onChangeScreen = (screen) => {
    this.setState({
      screen: screen
    })
  }

  render() {
    return (
      <SideMenu navTitle={this.state.screen} changeScreen={this.onChangeScreen}>
        <View style={styles.container}>
          <Screen currentScreen={this.state.screen} screenData={this.state.screenData} conferenceDates={this.state.conferenceDates} />
        </View>
      </SideMenu>
    )
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
