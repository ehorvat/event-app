
import React, { Component } from 'react';
import { Dimensions, StyleSheet, ScrollView, View, Image, Text, TouchableOpacity, InteractionManager } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import StatusBarBackground from './../components/StatusBarBackground'
import TimerMixin from 'react-timer-mixin';

const window = Dimensions.get('window');
const uri = 'http://pickaface.net/includes/themes/clean/img/slide2.png';


const myItems = [
  {label: "My Schedule", icon: "calendar-o"},
  {label: "My Messages", icon: "commenting"},
  {label: "My Contacts", icon: "group"},
  {label: "My Notes", icon: "bookmark"}
]

const eventGuide = [
    {label: "Schedule", icon: "calendar-o"},
    {label: "Speakers", icon: "commenting"},
    {label: "Attendees", icon: "group"},
    {label: "Exhibitors", icon: "bullhorn"},
    {label: "Sponsors", icon: "bookmark"},
    {label: "Maps", icon: "map-marker"},
    {label: "Onsite Information", icon: "info"},
    {label: "Activity Feed", icon: "comments"},
    {label: "Search", icon: "search"}
];

var SideMenuContent = React.createClass ({

  mixins: [TimerMixin],

  render() {
    return (
    <View>
      <StatusBarBackground />
      <ScrollView scrollsToTop={false} style={styles.menu}>

        <TouchableOpacity style={styles.navRow} onPress={() => this._changeScreen("Event Guide")}>
          <Icon name="home" style={styles.homeIcon} />
          <Text>OReilly Velocity Conference</Text>
        </TouchableOpacity>

        <View style={styles.navSection}>
          <Text>My Items</Text>
        </View>

        {myItems.map((data, key) => {
          return <SideMenuItem key={key} icon={data.icon} label={data.label} changeScreen={this._changeScreen} />
        })}

        <View style={styles.navSection}>
          <Text>Event Guide</Text>
        </View>

        {eventGuide.map((data, key) => {
          return <SideMenuItem key={key} icon={data.icon} label={data.label} changeScreen={this._changeScreen} />
        })}

      </ScrollView>
      </View>
    );
  },

  _changeScreen(screenName) {
    this.props.toggleMenu()
    this.props.changeScreen(screenName)
  }

});

var SideMenuItem = React.createClass({
  render() {
    return (
      <TouchableOpacity style={styles.navRow} onPress={() => this.props.changeScreen(this.props.label)}>
        <Icon name={this.props.icon} style={styles.homeIcon} />
        <Text>{this.props.label}</Text>
      </TouchableOpacity>
    )
  }
})

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#D1F4FA',
  },
  homeIcon: {
    textAlign: 'center',
    fontSize: 18,
    marginLeft: 10,
    marginRight: 12.
  },
  navRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 40
  },
  navSection: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    height: 50
  }
});

module.exports = SideMenuContent;
