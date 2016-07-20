import React, { Component } from 'react';
import { AppRegistry, Navigator, StyleSheet, Text, View, ListView, AsyncStorage, TouchableOpacity, LayoutAnimation } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Storage from './../services/Storage'

const ScheduleListView = React.createClass({

  getInitialState () {
    var ds = new ListView.DataSource({
      sectionHeaderHasChanged: (r1, r2) => r1 !== r2,
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    console.log(this.props.screenData)
    return {
       dataSource: [],
       listViewData: [],
       loaded: false,
       dataSource: ds.cloneWithRowsAndSections(this.props.screenData.proposals, this.props.screenData.sections)
    }
  },

  componentDidMount() {
    if(this.props.loadData) {
      this.setState({
        loaded: true
      })
    }
  },

  onEnter() {
    if(!this.state.loaded) {
      this.setState({
        loaded: true
      })
    }
  },

  onLeave() {
    console.log('leave: ' + this.props.i);
  },

  _renderRow(rowData) {

    return (
      <TouchableOpacity style={styles.row}>
      <View style={styles.leftContent}>
        <Text style={styles.startTime}>{rowData.section}</Text>
      </View>
      <View style={styles.centerContent}>
        <Text style={styles.proposalName}>{rowData.name}</Text>
      </View>
      <View style={styles.rightContent}>
        <Icon name="plus" size={20} style={styles.plus} />
      </View>
      </TouchableOpacity>
    )
  },

  _renderSectionHeader(data, sectionId) {
    return (
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>{sectionId}</Text>
      </View>
    );
  },

    render() {
      if(!this.state.loaded) {
        return (
          <Text>Placeholder View</Text>
        )
      }
      return <ListView
        ref="listView"
        automaticallyAdjustContentInsets={false}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        renderSectionHeader={this._renderSectionHeader}
        initialListSize={3}
      />

    }
});

var styles = StyleSheet.create({

  section : {
    flex: 1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    height: 20,
    backgroundColor: "#008a96"
  },
  row: {
    flex: 1,
    flexDirection:'row',
    justifyContent: "flex-start",
    height: 125,
    backgroundColor: "#fff"
  },
  leftContent: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerContent: {
    width: 300,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10
  },
  rightContent: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionLabel: {
    color: "#fff",
    fontWeight: "bold"
  },
  startTime: {

  },
  proposalName: {
    fontWeight: "bold",
    fontSize: 13
  }

});


module.exports = ScheduleListView;
