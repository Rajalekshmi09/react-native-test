import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from "react-navigation";


class Cart extends Component {
    render() {
        return (
            <AppStackNavigator />

        );
    }
}

export default Cart;

const AppStacknavigator = createStackNavigator({
    Home: HomeScreen,
    Fruits: FruitsScreen,
    Vegetables: VegetablesScreen
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})