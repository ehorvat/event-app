import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import HomeScreen from './HomeScreen'
import ScheduleScreen from './ScheduleScreen'
import ViewContainer from './../components/ViewContainer'
import StatusBarBackground from './../components/StatusBarBackground'
import NavigationBar from 'react-native-navbar';
import NavBarIcon from './../components/NavBarIcon'
import NavBarTitle from './../components/NavBarTitle'
import API from './../services/API'
import Storage from './../services/Storage'

const SideMenu = require('react-native-side-menu');
const Menu = require('./../navigation/Menu');

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


module.exports = class Main extends Component {


  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      selectedItem: 'home',
      navTitle: "Event Guide",
      navIcon: "bars"
    };
  }


  updateMenuState(isOpen) {
    this.setState({ isOpen, });
  }

  toggleMenu = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  onMenuItemSelected = (item, title) => {
    this.setState({
      isOpen: false,
      selectedItem: item,
      navTitle: title
    });
  }

  componentDidMount() {

    //Fetch data from server

    API.fetchData().then((res) => {
      var proposals = res.Schedule.events

      //Put proposals in chron order
      proposals.sort(function(a,b) {
        return new Date(a.time_start).getTime() - new Date(b.time_start).getTime()
      });

      //Organize proposal data
      var listViewData = []
      var conferenceDates = []

      for(var proposal of proposals) {
        var proposalStartDate = new Date(proposal.time_start);
        var stringDate = monthNames[proposalStartDate.getMonth()]+ " "+ proposalStartDate.getDate() + ", " + proposalStartDate.getFullYear();
        var stringTime = proposalStartDate.getHours()+":00";
        var dateIndex = conferenceDates.indexOf(stringDate)

        proposal["section"] = stringTime;

        if(dateIndex <= -1) {
          conferenceDates.push(stringDate)
          listViewData.push({"proposals" : {}, "sections" : [stringTime] })
          listViewData[listViewData.length-1].proposals[stringTime] = []
        } else {
          if(listViewData[dateIndex].proposals[stringTime] == undefined || listViewData[dateIndex].proposals[stringTime] == null){
            listViewData[dateIndex].proposals[stringTime] = []
          }
          listViewData[dateIndex].proposals[stringTime].push(proposal)
          if(listViewData[dateIndex].sections.indexOf(stringTime) <= -1) {
            listViewData[dateIndex].sections.push(stringTime)
          }
        }

      }

      //Store locally
      Storage.setCache("scheduleListViewData", JSON.stringify(listViewData));
      Storage.setCache("conferenceDates", JSON.stringify(conferenceDates));
    })
  }

  render() {


    const menu = <Menu onItemSelected={this.onMenuItemSelected} />;

    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={(isOpen) => this.updateMenuState(isOpen)}>
        <StatusBarBackground />
        <NavigationBar
          title={<NavBarTitle navTitle={this.state.navTitle} />}
          leftButton={<NavBarIcon iconName={this.state.navIcon} toggleMenu={this.toggleMenu} />}
          tintColor="#008a96" />
        <ViewContainer selectedItem={this.state.selectedItem} />
      </SideMenu>
    );
  }
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 20,
    padding: 10,
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
