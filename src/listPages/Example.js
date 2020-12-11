import React, { Component } from 'react';
import {
    Text,
    FlatList,
    Image,
    StyleSheet,
   
    View,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Animated,
    TouchableWithoutFeedback
} from 'react-native';
// import Animated from 'react-native-reanimated';

export default class App extends Component {
    state = {
        animatePress: new Animated.Value(1)
    }

    animatedIn() {
        Animated.timing(this.state.animatePress,
            {
                toValue: 0.8,
                duration: 200
            }).start()
    }
    animateout() {
        Animated.timing(this.state.animatePress,
            {
                toValue: 1,
                duration: 200
            }).start()
    }

    render() {
        return (
            // <TouchableWithoutFeedback
            //     onPressIn={() => this.animatedIn()}
            //     onPressOut={() => this.animatedOut()}
            // >
            //     <Animated.View style={{
            //         margin: 5,
            //         transform: [
            //             {
            //                 scale: this.state.animatePress
            //             }
            //         ]

            //     }}>
            <TouchableOpacity>
                    <View  style={styles.container}>
                    <Image style={{ margin: 5,flex:1 ,width: 100, height: 100 }} source={this.props.image}></Image>
                    </View>
                    </TouchableOpacity>
            //     </Animated.View>
            // </TouchableWithoutFeedback>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      paddingTop:40,
      flex: 1,
      flexDirection: 'column',
      //justifyContent: 'center',
      //alignItems: 'center',
      marginLeft:10
    },
})
  