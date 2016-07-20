import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
var Spinner = require('react-native-spinkit')

export default class LoadingScreen extends Component {


  constructor(props) {
    super(props)
    this.state = {
      isVisible: true
    }
  }

  render() {
    return (
      <View style={styles.loadingContainer}>
        <Spinner isVisible={this.state.isVisible} size={100} type={'Bounce'} color={"#008a96"}/>
      </View>
    )
  }

}

var styles = StyleSheet.create({

  loadingContainer : {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center',
  }

});
