import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput ,TouchableOpacity , Header } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/AntDesign';

export default class SearchBar extends Component {
  constructor (props){
    super(props)
  }
  render() {
    const { navigation } = this.props;
   
    return (

      <View style={styles.container}>
        
        <TouchableOpacity onPress={() =>  this.props.navigation.openDrawer('SideMenu')}>
        <Icon name="menu" size={30} color="#222" />
        </TouchableOpacity>
        <View style={styles.searchBar}>
          <Icon name="search" size={20} color="gray" />
          <TextInput placeholder="Search" style={styles.input} />
        </View>
        <View style={styles.cart}>
          <Icon1 name="shoppingcart" size={30} color="gray" />
          <View style={styles.badge}>
            <Text style={styles.badgeText}></Text>
          </View>
        </View>
     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchBar: {
    flexDirection: 'row',
    flex: 1,
    borderWidth: 1,
    borderColor: '#EFEFEF',
    borderRadius: 8,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginHorizontal: 12,
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    paddingVertical: 5,
  },
  badge: {
    position: 'absolute',
    backgroundColor: '#E6848C',
    width: 18,
    height: 18,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    right: -4,
    top: -4,
  },
  badgeText: {
    color: '#fff',
  },
});