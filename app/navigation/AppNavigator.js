import React, { Component } from 'react'
import { Navigator, StyleSheet, Text, View } from 'react-native';
import PeopleIndexScreen from '../screens/PeopleIndexScreen';
import PersonShowScreen from '../screens/PersonShowScreen';
import HomeScreen from '../screens/HomeScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import Drawer from '../components/Drawer'


  const eventTitle = "O'Reilly Velocity Conference";


  const navigationItems = [

      {label: "My Schedule", icon: "calendar-o", section: "My Items"},
      {label: "My Messages", icon: "commenting", section: "My Items"},
      {label: "My Contacts", icon: "group", section:"My Items"},
      {label: "My Notes", icon: "bullhorn", section:"My Items"},

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

class AppNavigator extends Component {

  constructor(props) {
    super(props)
  }

  _renderScene(route, navigator) {

    var globalNavigatorProps = { navigator }
    var props = { eventTitle: eventTitle, navigationItems: navigationItems }

    switch(route.ident) {
      case "HomeScreen":
        return (
          <Drawer {...props} {...globalNavigatorProps}>
            <HomeScreen {...props} />
          </Drawer>
        )

      case "ScheduleScreen":
        return (
          <Drawer {...props} {...globalNavigatorProps}>
            <ScheduleScreen {...globalNavigatorProps} />
          </Drawer>
        )

      default:
        return (
          <Drawer {...props} {...globalNavigatorProps}>
            <PeopleIndexScreen {...globalNavigatorProps} />
          </Drawer>
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

const styles = StyleSheet.create({
   navigatorStyles : {

   }
});

module.exports = AppNavigator
