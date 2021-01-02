import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Home from './src/pages/Home';
import Cardcontainer from './src/components/Home/Cardcontainer';
import Profile from './src/scenes/Header/Profile';


import List from './src/listPages/List';
import ProductCard from './src/listPages/ProductCard';
import fruitList from './src/listPages/fruitList';
import collapseList from './src/listPages/collapseList';
import Loginpage from './src/scenes/loginView/Loginpage';
import DetailsScreen from './src/listPages/DetailsScreen';
import DrawerMenu from './src/listPages/DrawerMenu';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (

      <NavigationContainer>

        <Stack.Navigator headerMode="none">
          <Stack.Screen
            name="Card"
            component={Home}
            options={{ title: 'Home' }}
          />
          <Stack.Screen name="History" component={List} />


        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


