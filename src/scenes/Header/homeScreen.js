import { Header} from 'react-native-elements';
import React, {Component} from 'react';
import { View  } from 'react-native';

export default class homeScreen extends Component {
    render(){
      return (            
            <View>
               <Header
                  leftComponent={{ icon: 'menu', color: '#fff' }}
                  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                  rightComponent={{ icon: 'home', color: '#fff' }}
                />
            </View>
        )
    }    
}



