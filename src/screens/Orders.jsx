import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OrderData from '../data/orders.json'
import OrderItem from '../components/OrderItem'

const OrderScreen = () => {
  return (
    <View style={styles.OrdersContainer}>
        <FlatList
            data={OrderData}
            keyExtractor={orderItem => orderItem.id}
            renderItem={({item}) => {
                return (
                    <OrderItem 
                      order={item}
                    />
                )
            }}
        />
    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({

  OrdersContainer: {
    backgroundColor: "#F9E28E",
    flex: 1,

  }
})