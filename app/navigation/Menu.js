
import React, { Component } from 'react';
import { Dimensions, StyleSheet, ScrollView, View, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import StatusBarBackground from './../components/StatusBarBackground'


const window = Dimensions.get('window');
const uri = 'http://pickaface.net/includes/themes/clean/img/slide2.png';

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

module.exports = class Menu extends Component {
  static propTypes = {
    onItemSelected: React.PropTypes.func.isRequired,
  };

  render() {
    return (
    <View>
      <StatusBarBackground />
      <ScrollView scrollsToTop={false} style={styles.menu}>


        <TouchableOpacity style={styles.navRow} onPress={() => this.props.onItemSelected('home', 'Event Guide')}>
          <Icon name="home" style={styles.homeIcon} />
          <Text>OReilly Velocity Conference</Text>
        </TouchableOpacity>

        <View style={styles.navSection}>
          <Text>My Items</Text>
        </View>

        <TouchableOpacity style={styles.navRow} onPress={() => this.props.onItemSelected('My Schedule')}>
          <Icon name="calendar-o" style={styles.homeIcon} />
          <Text>My Schedule</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navRow}>
          <Icon name="commenting" style={styles.homeIcon} />
          <Text>My Messages</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navRow}>
          <Icon name="group" style={styles.homeIcon} />
          <Text>My Contacts</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navRow}>
          <Icon name="bullhorn" style={styles.homeIcon} />
          <Text>My Notes</Text>
        </TouchableOpacity>

        <View style={styles.navSection}>
          <Text>Event Guide</Text>
        </View>

        <TouchableOpacity style={styles.navRow} onPress={() => this.props.onItemSelected('schedule', 'Schedule')}>
          <Icon name="calendar-o" style={styles.homeIcon} />
          <Text>Schedule</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navRow}>
          <Icon name="commenting" style={styles.homeIcon} />
          <Text>Speakers</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navRow}>
          <Icon name="group" style={styles.homeIcon} />
          <Text>Attendees</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navRow}>
          <Icon name="bullhorn" style={styles.homeIcon} />
          <Text>Exhibitors</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navRow}>
          <Icon name="bookmark" style={styles.homeIcon} />
          <Text>Sponsors</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navRow}>
          <Icon name="map-marker" style={styles.homeIcon} />
          <Text>Maps</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navRow}>
          <Icon name="info" style={styles.homeIcon} />
          <Text>Onsite Information</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navRow}>
          <Icon name="comments" style={styles.homeIcon} />
          <Text>Activity Feed</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navRow}>
          <Icon name="search" style={styles.homeIcon} />
          <Text>Search</Text>
        </TouchableOpacity>

      </ScrollView>
      </View>
    );
  }
};
