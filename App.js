import React, {Component} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Home from './src/pages/Home';
import Cardcontainer from './src/scenes/Cardcontainer';
import Profile from './src/scenes/Header/Profile';
import List from './src/listPages/List';
import CardView from './src/listPages/CardView';

import ProductCard from './src/listPages/ProductCard';
const Stack = createStackNavigator();

export default class App extends Component {
  render(){
    return (
    
      <NavigationContainer>      
       
        <Stack.Navigator headerMode="none">  
            <Stack.Screen
              name="Card"
              component={Home}
              options={{ title: 'Home' }}
            />
            <Stack.Screen name="History" component={ProductCard} />   
            
        </Stack.Navigator>        
      </NavigationContainer>
    );
   }
}


