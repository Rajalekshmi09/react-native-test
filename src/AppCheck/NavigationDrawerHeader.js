// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
// class NavigationDrawerHeader extends Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {

const NavigationDrawerHeader = (props) => {

    const toggleDrawer = () => {
        props.navigationProps.toggleDrawer();
    };

    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={toggleDrawer}>
                <View style={{marginLeft: 15}}> 
                    <Icon name="menu" size={30} color="black" />
                </View>
            </TouchableOpacity>
        </View>
    );
};
export default NavigationDrawerHeader;