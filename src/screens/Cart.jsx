import { FlatList, StyleSheet, Text, View, Button  } from "react-native"
import React from "react"
import CartItem from "../components/CartItem"
import { useDispatch, useSelector } from "react-redux"
import { usePostOrderMutation } from "../services/shopService"
import { cleanCart, removeCartItem } from "../features/Cart/cartSlice"



const Cart = () => {

    const HandleRemoveCartItem = () =>{
        useDispatch(removeCartItem())

    }
    const {localId} = useSelector(state => state.auth.value)
    const {items: CartData, total} = useSelector(state => state.cart.value)
    dispatch = useDispatch
    const [triggerPostOrder, result] = usePostOrderMutation()
    

    const onConfirmOrder = () => {
        triggerPostOrder({items: CartData, user: localId, total});
        dispatch(cleanCart());
        
    
    }
  



    return (
        <View style={styles.container}>
            <FlatList
                data={CartData}
                keyExtractor={(pepe) => pepe.id}
                renderItem={({ item }) => {
                    return <CartItem cartItem={item} />
                }}
            />
            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Total: ${total}</Text>
            </View>
            <View>
                <Button color={"black"} onPress={onConfirmOrder} title="Confirm"></Button>
            </View>
        </View>
    )
}


export default Cart

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flex: 1,
        backgroundColor: "#EDD888"
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#EDD888",
        marginBottom: 20,
    },
    totalText: {
        fontFamily: "Josefin",
        fontSize: 20,
        fontWeight: "bold",
    }
})