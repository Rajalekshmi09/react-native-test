import React, {Component} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Home from './src/pages/Home';
import SideMenu from './src/Drawer/SideMenu';
import Profile from './src/scenes/Header/Profile';
import List from './src/listPages/List';
import cardScroll from './src/components/Home/CardScroll';
import fruitList from './src/listPages/fruitList';
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
            <Stack.Screen name="History" component={SideMenu} />   
            
        </Stack.Navigator>        
      </NavigationContainer>
    );
   }
}


