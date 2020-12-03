
import React, {Component} from 'react';
import 'react-native-gesture-handler';
import Cardcontainer from './src/scenes/Cardcontainer';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Home from './src/pages/Home';
import List from './src/scenes/List';
import flatList from './src/scenes/flatList';
import SideMenu from './src/Drawer/SideMenu';
import CardDeal from './src/components/Home/CardDeal';
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


