// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';

class SettingsScreen extends Component {

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, padding: 16 }}>
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <Text
                            style={{
                                fontSize: 20,
                                textAlign: 'center',
                                marginBottom: 16,
                            }}>
                                Welcome this is settings screen
                            Example of Splash, Login and Sign Up in React Native
            {'\n\n'}
            This is the Settings Screen
          </Text>
                    </View>
                    <Text
                        style={{
                            fontSize: 18,
                            textAlign: 'center',
                            color: 'grey',
                        }}>
                        Splash, Login and Register Example{'\n'}React Native
        </Text>
                    <Text
                        style={{
                            fontSize: 16,
                            textAlign: 'center',
                            color: 'red',
                        }}>
                        www.aboutreact.com
        </Text>
                </View>
            </SafeAreaView>
        );
    }
};

export default SettingsScreen;