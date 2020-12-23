import React from 'react'
import { View, Text, Image, ImageBackground, Button } from 'react-native'
import { TextInput, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

const CardView = ({ navigation }) => {
    return (
        <View >

            {/* <View style={{
               backgroundColor:"#00a46c",
               height:"28%",
               borderBottomLeftRadius:20,
               borderBottomRightRadius:20,
               paddingHorizontal:20
           }}>
               <Image
                    source={require('../../assets/image/mango.png')}
                    style={{
                        height:40,
                        width:40,
                        marginTop:50
                    }}
               />
               <View style={{
                   flexDirection:"row",
                   alignItems:"center",
                   marginTop:25,
                   width:"100%"
               }}>
                   <View style={{width:"50%"}}>
                        <Text style={{
                            fontSize:28,
                            color:"#FFF",
                            fontWeight:"bold"
                        }}>Hi Uishopy</Text>
                   </View>
                   <View style={{width:"50%",alignItems:"flex-end"}}>
                        <Image
                            source={require('../../assets/image/veg.png')}
                            style={{height:60,width:60}}
                        />
                   </View>
               </View>
           </View> */}
            {/* <LinearGradient
            colors={["rgba(0,164,109,0.4)", "transparent"]}
            style={{
                left:0,
                right:0,
                height:90,
                marginTop:-45
            }}
           >
               <View style={{
                   backgroundColor:"#FFF",
                   paddingVertical:8,
                   paddingHorizontal:20,
                   marginHorizontal:20,
                   borderRadius:15,
                   marginTop:25,
                   flexDirection:"row",
                   alignItems:"center"
               }}>
                   <TextInput
                        placeholder="Search"
                        placeholderTextColor="#b1e5d3"
                        style={{
                            fontWeight:"bold",
                            fontSize:18,
                            width:260
                        }}
                   />
                   <Image
                    source={require('../../assets/image/img7.jpeg')}
                    style={{height:20,width:20}}
                   />
               </View>
            </LinearGradient> */}


            {/* <View style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                width: "100%",
                alignItems: "center"
            }}>
                <View style={{ width: "50%" }}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 17,
                        color: "#585a61"
                    }}>Recommended</Text>
                    <View style={{
                        height: 4,
                        backgroundColor: "#b1e5d3",
                        width: 115,
                        marginTop: -5
                    }}>

                    </View>

                </View>
                <View style={{ width: "50%", alignItems: "flex-end" }}>
                    <View style={{
                        backgroundColor: "#00a46c",
                        paddingHorizontal: 20,
                        paddingVertical: 5,
                        borderRadius: 15
                    }}>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 13,
                            color: "#FFF"
                        }}>More</Text>
                    </View>
                </View>
            </View> */}

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ height: 400 }}

            >
                <LinearGradient
                    colors={["rgba(0,164,109,0.09)", "transparent"]}
                    style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        height: 100,
                        marginTop: 140,
                        top: 0
                    }}
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate("Detail")}
                    style={{
                        height: 250,
                        elevation: 2,
                        backgroundColor: "#FFF",
                        marginLeft: 20,
                        marginTop: 20,
                        borderRadius: 15,
                        marginBottom: 10,
                        width: 160
                    }}
                >
                    <Image
                        source={require('../../assets/image/strawberry.png')}
                        style={{ height: 120, width: 140, borderRadius: 8 }}
                    />
                    <View style={{
                        flexDirection: "row",
                        paddingTop: 10,
                        paddingHorizontal: 10
                    }}>
                        <Text style={{
                            fontWeight: "bold"
                        }}>STRAWBERRY</Text>
                        <Text style={{
                            fontWeight: "bold",
                            color: "#00a46c",
                            paddingLeft: 35
                        }}>$400</Text>
                    </View>
                    <Text style={{
                        paddingHorizontal: 10,
                        fontWeight: "bold",
                        color: "#b1e5d3",
                        paddingTop: 3
                    }}>
                        Fruits
                        </Text>
                    <View style={{ paddingTop: 30 }}>
                        <Button
                            icon={
                                <Icon
                                    name="cart"
                                    size={15}
                                    color="white"
                                />
                            }
                            title="Add"
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    // onPress={()=>navigation.navigate("Detail")}
                    style={{
                        height: 250,
                        elevation: 2,
                        backgroundColor: "#FFF",
                        marginLeft: 20,
                        marginTop: 20,
                        borderRadius: 15,
                        marginBottom: 10,
                        width: 160
                    }}
                >
                    <Image
                        source={require('../../assets/image/Apple.png')}
                        style={{ height: 120, width: 140, borderRadius: 8 }}
                    />
                    <View style={{
                        flexDirection: "row",
                        paddingTop: 10,
                        paddingHorizontal: 10
                    }}>
                        <Text style={{
                            fontWeight: "bold"
                        }}>APPLE</Text>
                        <Text style={{
                            fontWeight: "bold",
                            color: "#00a46c",
                            paddingLeft: 45
                        }}>$400</Text>
                    </View>
                    <Text style={{
                        paddingHorizontal: 10,
                        fontWeight: "bold",
                        color: "#b1e5d3",
                        paddingTop: 3
                    }}>
                        Fruits
                        </Text>
                    <View style={{ paddingTop: 30 }}>
                        <Button
                            icon={
                                <Icon
                                    name="cart"
                                    size={15}
                                    color="white"
                                />
                            }
                            title="Add"
                        />
                    </View>
                    </TouchableOpacity>

                <View
                    // onPress={()=>navigation.navigate("Detail")}
                    style={{
                        height: 250,
                        elevation: 2,
                        backgroundColor: "#FFF",
                        marginLeft: 20,
                        marginTop: 20,
                        borderRadius: 15,
                        marginBottom: 10,
                        width: 160
                    }}
                >
                    <Image
                        source={require('../../assets/image/mango2.png')}
                        style={{ height: 120, width: 140, borderRadius: 8 }}
                    />
                    <View style={{
                        flexDirection: "row",
                        paddingTop: 10,
                        paddingHorizontal: 10
                    }}>
                        <Text style={{
                            fontWeight: "bold"
                        }}>MANGO</Text>
                        <Text style={{
                            fontWeight: "bold",
                            color: "#00a46c",
                            paddingLeft: 35
                        }}>$400</Text>
                    </View>
                    <Text style={{
                        paddingHorizontal: 10,
                        fontWeight: "bold",
                        color: "#b1e5d3",
                        paddingTop: 3
                    }}>
                        Fruits
                        </Text>
                    <View style={{ paddingTop: 30 }}>
                        <Button
                            icon={
                                <Icon
                                    name="cart"
                                    size={15}
                                    color="white"
                                />
                            }
                            title="Add"
                        />
                    </View>
                </View>

                <View
                    // onPress={()=>navigation.navigate("Detail")}
                    style={{
                        height: 250,
                        elevation: 2,
                        backgroundColor: "#FFF",
                        marginLeft: 20,
                        marginTop: 20,
                        borderRadius: 15,
                        marginBottom: 10,
                        width: 160
                    }}
                >
                    <Image
                        source={require('../../assets/image/banana.png')}
                        style={{ height: 120, width: 140, borderRadius: 8 }}
                    />
                    <View style={{
                        flexDirection: "row",
                        paddingTop: 10,
                        paddingHorizontal: 10
                    }}>
                        <Text style={{
                            fontWeight: "bold"
                        }}>BANANA</Text>
                        <Text style={{
                            fontWeight: "bold",
                            color: "#00a46c",
                            paddingLeft: 35
                        }}>$400</Text>
                    </View>
                    <Text style={{
                        paddingHorizontal: 10,
                        fontWeight: "bold",
                        color: "#b1e5d3",
                        paddingTop: 3
                    }}>
                        Fruits
                        </Text>
                    <View style={{ paddingTop: 30 }}>
                        <Button
                            icon={
                                <Icon
                                    name="cart"
                                    size={15}
                                    color="white"
                                />
                            }
                            title="Add"
                        />
                    </View>
                </View>

                <View
                    // onPress={()=>navigation.navigate("Detail")}
                    style={{
                        height: 250,
                        elevation: 2,
                        backgroundColor: "#FFF",
                        marginLeft: 20,
                        marginTop: 20,
                        borderRadius: 15,
                        marginBottom: 10,
                        width: 160
                    }}
                >
                    <Image
                        source={require('../../assets/image/grapes.png')}
                        style={{ height: 120, width: 140, borderRadius: 8 }}
                    />
                    <View style={{
                        flexDirection: "row",
                        paddingTop: 10,
                        paddingHorizontal: 10
                    }}>
                        <Text style={{
                            fontWeight: "bold"
                        }}>GRAPES</Text>
                        <Text style={{
                            fontWeight: "bold",
                            color: "#00a46c",
                            paddingLeft: 35
                        }}>$400</Text>
                    </View>
                    <Text style={{
                        paddingHorizontal: 10,
                        fontWeight: "bold",
                        color: "#b1e5d3",
                        paddingTop: 3
                    }}>
                        Fruits
                        </Text>
                    <View style={{ paddingTop: 30 }}>
                        <Button
                            icon={
                                <Icon
                                    name="cart"
                                    size={15}
                                    color="white"
                                />
                            }
                            title="Add"
                        />
                    </View>
                </View>

            </ScrollView>




            <View style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                width: "100%",
                alignItems: "center",
                marginTop: -80,
            }}>
                {/* <View style={{width:"50%"}}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:17,
                            color:"#585a61"
                        }}>Featured Plants</Text>
                        <View style={{
                            height:4,
                            backgroundColor:"#b1e5d3",
                            width:115,
                            marginTop:-5
                        }}>

                        </View>

                   </View> */}
                <View style={{ width: "50%", alignItems: "flex-end" }}>
                    {/* <View style={{
                            backgroundColor:"#00a46c",
                            paddingHorizontal:20,
                            paddingVertical:5,
                            borderRadius:15
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:13,
                                color:"#FFF"
                            }}>More</Text>
                        </View> */}
                </View>
            </View>

            {/* <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{marginBottom:-100}}
                >
                    <Image
                        source={require("./assets/image/veg.png")}
                        style={{marginTop:20,marginHorizontal:20}}
                    />
                     <Image
                        source={require("./assets/image/veg.png")}
                        style={{marginTop:20,borderRadius:10}}
                    />
                </ScrollView> */}
        </View>

    )
}
export default CardView;