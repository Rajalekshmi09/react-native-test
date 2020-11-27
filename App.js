
import React, {Component} from 'react';
import { View } from 'react-native';
import Cardcontainer from './src/scenes/Cardcontainer';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import List from './src/scenes/List';
import Loginpage from './src/scenes/loginView/Loginpage';
import Slider from './src/scenes/Header/Slider';
const Stack = createStackNavigator();



export default class App extends Component {
  render(){
    return (
      
      <NavigationContainer>      
        <Stack.Navigator>  
            <Stack.Screen
              name="card"
              component={Cardcontainer}
              options={{ title: 'Home' }}
            />
            <Stack.Screen name="List" component={Slider} />   
         
        </Stack.Navigator>        
      </NavigationContainer>
    );
   }
}
