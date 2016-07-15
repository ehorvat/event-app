import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class Title extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
        <Text style={styles.title}>{this.props.navTitle}</Text>
    );
  }

}

var styles = StyleSheet.create({
  title: {
    alignItems: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#fff"
  }
});
