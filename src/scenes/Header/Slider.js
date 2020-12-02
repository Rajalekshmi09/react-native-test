import React, { Component } from 'react';
import { View, Image, Dimensions, Text, StyleSheet, ScrollView } from 'react-native';

const { width } = Dimensions.get("window");
const height = width * 0.6;
const images = [
    'https://images.pexels.com/photos/773594/pexels-photo-773594.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/310386/pexels-photo-310386.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    'https://images.pexels.com/photos/3397935/pexels-photo-3397935.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/2331569/pexels-photo-2331569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
]
export default class Slider extends Component {
    state = {
        active: 0
    }
    change = ({ nativeEvent }) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide !== this.state.active) {
            this.setState({ active: slide });
        }
    }
    render() {
        return (
            <View style={style.container}>
                <ScrollView
                    pagingEnabled
                    horizontal
                    onScroll={this.change}
                    showsHorizontalScrollIndicator={false}
                    style={style.scroll} >
               
                    {
                        images.map((image, index) => (
                            <Image
                                key={index} a
                                source={{ uri: image }}
                                style={style.image} />
                        ))
                    }
                </ScrollView>
                <View style={style.pagination}>
                    {
                        images.map((i, k) => (
                            <Text key={k} style={k == this.state.active ? style.pagingActiveText : style.pagingText}>⬤</Text>
                        ))
                    }
                </View>
            </View>
        )
    }
}
const style = StyleSheet.create({
    container: 
    { 
        marginTop: 50, 
        width, 
        height 
    },
    scroll: 
    { 
        width, 
        height 
    },
    image: 
    { 
        width, 
        height, 
        resizeMode: 'cover' 
    },
    pagination: 
    { 
        flexDirection: 'row', 
        position: 'absolute', 
        bottom: 0, 
        alignSelf: 'center' 
    },
    pagingText: 
    { 
        fontSize: (width / 30), 
        color: '#888', 
        margin: 3 
    },
    pagingActiveText:
    { 
        fontSize: (width / 30), 
        color: '#fff', 
        margin: 3 
    }
})