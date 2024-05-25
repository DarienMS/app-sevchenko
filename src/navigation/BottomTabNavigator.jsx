import React from "react"
import { StyleSheet, View } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeStackNavigator from "./HomeStackNavigator"
import { colors } from "../constants/colors"
import CartStack from "./CartStackNavigator"
import OrderStack from "./OrderStackNavigator"
import Header from "../components/Header"
import { FontAwesome5, FontAwesome6 } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"
import CartTemp from "../screens/CartTemp"
import OrdersTemp from "../screens/OrdersTemp"

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                header: () => {
                    return <Header route={route} />
                },
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
            })}
        >
            <Tab.Screen
                name="Fast Food"
                component={HomeStackNavigator}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <FontAwesome5
                                    name="store"
                                    size={24}
                                    color={focused ? "white" : "#EDD888"}
                                />
                            </View>
                        )
                    },
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <FontAwesome6
                                    name="cart-shopping"
                                    size={24}
                                    color={focused ? "white" : "#EDD888"}
                                />
                            </View>
                        )
                    },
                }}
            />
            <Tab.Screen 
                name="Orders"
                component={OrderStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <Ionicons name="receipt-outline" size={24} color={ focused ? 'white' : "#EDD888"} />
                            </View>
                        )
                    },
                }}
            />
            

            
        </Tab.Navigator>
    )
}

export default BottomTabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: "black",
        shadowColor: "black",
        elevation: 4,
        borderRadius: 15,
        height: 60,
    },
})
