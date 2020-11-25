import { ListItem, Avatar} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {Component} from 'react';
import { View  } from 'react-native';

const list = [
    {
      name: 'Amy Farha',
      avatar_url: '',
      subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: '',
        subtitle: 'Vice Chairman'
    },
    {
         name: 'Chris Jackson',
         avatar_url: '',
         subtitle: 'Vice Chairman'
    },
    {
        name: 'Chris Jackson',
        avatar_url: '',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Chris Jackson',
        avatar_url: '',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Chris Jackson',
        avatar_url: '',
        subtitle: 'Vice Chairman'
    },
    
  ]
const styles = {
    container: {
        
        marginTop: 100,
        //alignItems: 'center',
        paddingLeft: 30,
    }}
export default class List extends Component {
    render(){
      return (            
            <View styles={styles.container}>
                {list.map((item, index) => (
                        <ListItem key={index} bottomDivider>
                        <Avatar source={{uri: item.avatar_url}} />
                        <ListItem.Content>
                        <ListItem.Title>{item.name}</ListItem.Title>
                        <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                ))}
            </View>
        )
    }    
}
