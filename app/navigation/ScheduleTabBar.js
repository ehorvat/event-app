import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
var moment = require('moment');

const ScheduleTabBar = React.createClass({
  tabIcons: [],

  propTypes: {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array,
  },

  render() {
    return <View style={[styles.tabs, this.props.style, ]}>
      {this.props.tabs.map((tab, i) => {
        var date = new Date(tab);

        day = date.getDate();

        var dayOfWeek = "";

        switch(date.getDay()) {
          case 1:
            dayOfWeek = "Monday"
            break;
          case 2:
            dayOfWeek = "Tuesday"
            break;
          case 3:
            dayOfWeek = "Wednesday"
            break;
          case 4:
            dayOfWeek = "Thursday"
            break;
          case 5:
            dayOfWeek = "Friday"
            break;
          case 6:
            dayOfWeek = "Saturday"
            break;
          case 7:
            dayOfWeek = "Sunday"
            break;

        }

        return <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={tabColor(this.props.activeTab, i)}>
        <Text>{dayOfWeek}</Text>
        <View style={circle(this.props.activeTab, i)}>
          <Text style={textColor(this.props.activeTab, i)}>{day}</Text>
        </View>
        </TouchableOpacity>;
      })}
    </View>;
  },
});


tabColor = (activeTab, i) => {
  if(activeTab == i) {
    return (
      styles.activeTab
    )
  } else {
    return (
      styles.inactiveTab
    )
  }
}

circle = (activeTab, i) => {
  if(activeTab == i) {
    return (
      styles.circle
    )
  }
}

textColor = (activeTab, i) => {
  if(activeTab == i) {
    return (
      styles.activeDay
    )
  } else {
    return (
      styles.inactiveDay
    )
  }
}

const styles = StyleSheet.create({
  inactiveTab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  activeTab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
    backgroundColor: '#fff'
  },
  tabs: {
    height: 75,
    flexDirection: 'row',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 100/2,
    backgroundColor: '#008a96',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  activeDay: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#fff',

  },
  inactiveDay: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#000',
    marginTop: 10
  }
});

export default ScheduleTabBar;
