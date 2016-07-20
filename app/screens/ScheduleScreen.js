//This import syntax is ES2015
import React, { Component } from 'react';
import { Navigator, StyleSheet, Text, View, ListView, AsyncStorage, InteractionManager } from 'react-native';
import ScheduleListView from './../components/ScheduleListView'
import API from './../services/API'
import Storage from './../services/Storage'
import ScheduleTabBar from './../navigation/ScheduleTabBar'
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view'
import LoadingScreen from './LoadingScreen'

var Spinner = require('react-native-spinkit')

const ScheduleScreen = React.createClass({

    children: [],

    getInitialState() {
        return {
          loaded: false,
          page: 0,
          isVisible: true
        }
    },

    componentDidMount() {

    /*  InteractionManager.runAfterInteractions(() => {
              var conferenceDates = []
              var listViewData = []

              Storage.getCache("conferenceDates").then((data) => {

                this.setState({
                  loaded: true,
                  isVisible: false,
                  conferenceDates: data,
                })
              });
            });
          */

    },

    handleChangeTab({i, ref, from, }) {
      this.children[i].onEnter();
    },

    render() {



        console.log(this.props.screenData[0])
        return(
            <ScrollableTabView
                  initialPage={this.state.page}
                  renderTabBar={() => <ScheduleTabBar />}
                  tabBarBackgroundColor="#eee"
                  tabBarUnderlineColor="#008a96"
                  tabBarActiveTextColor="#008a96"
                  onChangeTab={this.handleChangeTab}
                >

                {this.props.conferenceDates.map((date, i) => {
                  var loadData = false
                  if(this.state.page == i) {
                    loadData = true
                  }
                    return <ScheduleListView ref={(ref) => this.children[i] = ref} tabLabel={date} key={date} i={i} loadData={loadData} screenData={this.props.screenData[i]} />
                })}
                </ScrollableTabView>
          );
    }
})


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
