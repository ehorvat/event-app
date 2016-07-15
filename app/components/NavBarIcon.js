import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome'

export default class Icon extends Component {

  static propTypes = {
    toggleMenu: React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props)
  }

  render() {
    return (
        <FAIcon name={this.props.iconName} style={styles.icon} onPress={() => this.props.toggleMenu()}/>
    );
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  icon: {
    alignItems: "center",
    fontSize: 25,
    marginLeft: 15,
    color: "#fff"
  }
});
