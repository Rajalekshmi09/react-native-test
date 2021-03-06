import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { productList } from "../app-utils";
import Cardcontainer from '../components/Home/Cardcontainer';
import SearchBar from '../components/Home/SearchBar';
import Slider from '../components/Home/Slider';
import CardScroll from '../components/Home/CardScroll';
import Card from '../components/Home/Card';
import CardDeal from '../components/Home/CardDeal';
import CardView from '../listPages/CardView';

const data = [
    'Vegetables',
    'Fruits',
    'Dry fruits',
    'Dairy',
    'Beverages',
    'Staples',
    'Home Care',
    'Baby Care',
];

export default class Home extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { navigation } = this.props;
        return (
            <SafeAreaView style={styles.container}>

                {/* <View style={styles.header}>
                    <SearchBar />
                </View> */}
                <ScrollView style={styles.scrollView}>

                    <Slider />
                    <Cardcontainer />
                    <CardView />
                    <CardScroll />
                    <View style={styles.listcardTop}>
                        <Text style={styles.titleCatalogue}>Categories</Text>

                        <View style={styles.listcard}>
                            {data.map(collections => {
                                return (
                                    <Card onPress={() => navigation.navigate('History')} title={collections} />
                                );
                            })}
                        </View>
                    </View>
                    <View style={styles.listdeal}>
                        <View style={styles.titlecontainer}>
                            <Text style={styles.title}>Deal of the Day</Text>
                            <View style={styles.chevron}>
                                <Text style={styles.seemore}>See more</Text>
                                <Icon name="chevron-thin-right" size={18} />
                            </View>
                        </View>

                        <View>
                            {productList.map(product => {

                                return (
                                    <CardDeal
                                        type={product.name}
                                        item={product.item}
                                        price={product.price}
                                    />
                                )
                            })}

                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    };
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //padding: 5,
        backgroundColor: '#fff',
    },
    header: {
        paddingTop: 10,
        height: 70,
        //backgroundColor: '#3f8fd1',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    listcardTop: {
        backgroundColor: '#fff',
    },
    listcard: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        // justifyContent: 'space-between',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },

    titleCatalogue: {
        fontWeight: 'bold',
        fontSize: 18,
        marginVertical: 16,
    },

    seemore: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'gray',
    },
    chevron: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    titlecontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});