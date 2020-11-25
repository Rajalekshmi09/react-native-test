import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import React, {Component} from 'react';
import { View, Button } from 'react-native';

const styles = {

}

export default class Login extends Component {
    render(){
        return (
            <View>  
        <Input placeholder='SIGNIN' />
        <Input
             placeholder='Enter Your Name'
             leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
        />
        <Input
            placeholder='Enter Email Id'
            leftIcon={
            <Icon
                name='user'
                size={24}
                color='black'
            />}
         />
        <Input
            placeholder="Comment"
            leftIcon={{ type: 'font-awesome', name: 'comment' }}            
            onChangeText={value => this.setState({ comment: value })}
         />
        <Input
             placeholder='INPUT WITH ERROR MESSAGE'
             errorStyle={{ color: 'red' }}
             errorMessage='ENTER A VALID ERROR HERE'
        />
        <Input placeholder="Password" secureTextEntry={true} />
        <Button
            title="Submit"
         />
    </View>
   );
    }
}
