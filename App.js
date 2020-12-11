
import React, {Component} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Home from './src/pages/Home';
import Cardcontainer from './src/scenes/Cardcontainer';
import SideMenu from './src/Drawer/SideMenu';
import Profile from './src/scenes/Header/Profile';

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
            <Stack.Screen name="History" component={Profile} />   
            
        </Stack.Navigator>        
      </NavigationContainer>
    );
   }
}


