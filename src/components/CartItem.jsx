import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { removeCartItem } from "../features/Cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ cartItem }) => {
   
  dispatch = useDispatch();

  const handleRemoveCart = () => {
    dispatch(removeCartItem({ id: cartItem.id }));
  }


    return (
        <View style={styles.card} onPress={() => {}}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{cartItem.title} ({cartItem.quantity})</Text>
                <Text style={styles.text2}>{cartItem.brand}</Text>
                <Text style={styles.text2}>${cartItem.price}</Text>
            </View>
            <Entypo onPress={handleRemoveCart} name="trash" size={30} color="black" />
        </View>
    );
};


export default CartItem;

const styles = StyleSheet.create({
    card: {
        height: 100,
        backgroundColor: "white",
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textContainer: {
        width: "70%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    text: {
        fontFamily: "Josefin",
        fontSize: 19,
        color: "black",
    },
    text2: {
        fontFamily: "Josefin",
        fontSize: 14,
        color: "black",
    },
});
