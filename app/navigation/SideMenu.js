import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ListView, TouchableOpacity } from 'react-native';
import StatusBarBackground from '../components/StatusBarBackground'
import ViewContainer from '../components/ViewContainer'
import Square from '../components/Square'
import _ from 'lodash'
import Icon from 'react-native-vector-icons/FontAwesome'


var SampleRow = React.createClass({
  render() {
    return (
      <View>
        <View>
          <Text>{this.props.label}</Text>
        </View>
      </View>
    );
  }
});


class SideMenu extends React.Component {

  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({
      sectionHeaderHasChanged: (r1, r2) => r1 !== r2,
      rowHasChanged: (r1, r2) => r1 !== r2
    });

   	var {dataBlob, sectionIds} = this.renderListViewData(this.props.navigationItems);

    this.state = { navigationItems: ds.cloneWithRowsAndSections(dataBlob, sectionIds)}
  }

  render() {
    return (
        <View style={styles.drawerContainer}>
          <View style={styles.navRow}>
            <Icon name="home" style={styles.homeIcon} />
            <Text>{this.props.eventTitle}</Text>
          </View>
          <ListView
            ref="listView"
            automaticallyAdjustContentInsets={false}
            dataSource={this.state.navigationItems}
            renderRow={this._renderRow}
            renderSectionHeader={this.renderSectionHeader}
          />
        </View>
        );
  }


  renderListViewData(navItems) {
      var dataBlob = {};
      var sectionIds = [];

      navItems.map((item) => {
        var section = item.section;
        if (sectionIds.indexOf(section) === -1) {
          sectionIds.push(section);
          dataBlob[section] = [];
        }
        dataBlob[section].push(item);
      });
      return {dataBlob, sectionIds};
    }

  _renderRow(rowData) {
    return (
      <TouchableOpacity style={styles.navRow}>
        <Square navigationItems={rowData} location="sidemenu" />
        <Text style={styles.navLabel}>{rowData.label}</Text>
      </TouchableOpacity>
    )
  }

  renderSectionHeader(data, sectionId) {
    var text;
    return (
      <View style={styles.navSection}>
        <Text style={styles.navSectionLabel}>{sectionId}</Text>
      </View>
    );
  }

}

var styles = StyleSheet.create({

    drawerContainer: {
      flex: 1,
      flexDirection: 'column',
      marginRight: 20,
      backgroundColor: '#D1F4FA',
      width: 250,
      marginTop: 20
    },
    navRow: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      height: 40
    },
    navLabel: {
      marginLeft: 10
    },
    navSection: {
      backgroundColor: "white",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      height: 50
    },
    navSectionLabel: {
      fontWeight: "bold",
      marginLeft: 5
    },
    homeIcon: {
      textAlign: 'center',
      fontSize: 18,
      marginLeft: 10,
      marginRight: 12.
    }

});

module.exports = SideMenu
