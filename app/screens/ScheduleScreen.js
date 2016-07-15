//This import syntax is ES2015
import React, { Component } from 'react';
import { Navigator, StyleSheet, Text, View, ListView, AsyncStorage, TouchableOpacity, InteractionManager } from 'react-native';
import Squares from '../components/Squares'
import ScheduleListView from './../components/ScheduleListView'
import API from './../services/API'
import Storage from './../services/Storage'
import NavigationBar from 'react-native-navbar';
import NavBarIcon from './../components/NavBarIcon'
import NavBarTitle from './../components/NavBarTitle'
import ScheduleTabBar from './../navigation/ScheduleTabBar'

import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view'

var Spinner = require('react-native-spinkit')

class ScheduleScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
          loaded: false,
          page: 0,
          conferenceDates:  [],
          renderPlaceholderOnly: true,
          isVisible: true
        }
    }

    componentDidMount() {

      InteractionManager.runAfterInteractions(() => {

              var conferenceDates = []
              var listViewData = []

              //Fetch data from local storage for list view

              Storage.getCache("scheduleListViewData").then((data) => {
                listViewData = data
              });

              Storage.getCache("conferenceDates").then((data) => {
                conferenceDates = data

                this.setState({
                  loaded: true,
                  isVisible: false,
                  conferenceDates: conferenceDates,
                  listViewData: listViewData,
                  renderPlaceholderOnly: false
                })

              });

      });

    }

    render() {


      if (this.state.renderPlaceholderOnly) {
        return (
          <View style={styles.loadingContainer}>
            <Spinner isVisible={this.state.isVisible} size={100} type={'Bounce'} color={"#008a96"}/>
          </View>
        )
      }

        return(
            <View style={styles.container}>
            <ScrollableTabView
                  initialPage={this.state.page}
                  renderTabBar={() => <ScheduleTabBar />}
                  tabBarBackgroundColor="#eee"
                  tabBarUnderlineColor="#008a96"
                  tabBarActiveTextColor="#008a96"
                  onChangeTab={this.onChange}
                >
                {this.state.conferenceDates.map((date, i) => {
                  return <ScheduleListView tabLabel={date} key={date} dataBlob={this.state.listViewData[i]} initialListSize={this.state.listViewData[i].proposals.length} />
                })}
                </ScrollableTabView>
            </View>
          );
    }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  loadingContainer : {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center',
  }

});

module.exports = ScheduleScreen;
