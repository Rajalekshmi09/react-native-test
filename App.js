import Login from './src/scenes/loginView/Login';
import React, {Component} from 'react';
import { View } from 'react-native';
import Cardcontainer from './src/scenes/Cardcontainer';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import List from './src/scenes/list';
import homeScreen from './src/scenes/Header/homeScreen';
import { Header} from 'react-native-elements';
import LoginScreen from './src/scenes/Header/LoginSrceen';

const Stack = createStackNavigator();

const styles = { 
  MainContainer :{      
      flex:1,
      paddingTop: 50,
     
  }};


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
            <Stack.Screen name="List" component={LoginScreen} />   
         
        </Stack.Navigator>        
      </NavigationContainer>
    );
   }
}

     


