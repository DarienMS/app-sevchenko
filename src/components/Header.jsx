import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Header = ({route}) => {

  const categorySelected = useSelector(state => state.shop.value.categorySelected)

  
  const {height, width} = useWindowDimensions()
  return (
    <View style = {styles.container}>
      <Text style = {width > 360 ? styles.text: styles.textSm}>{route.name}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    backgroundColor: "black",
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: "white",
    fontFamily: 'Kaushan',
    fontSize: 26
  },
  textSm: {
    color: "white",
    fontFamily: 'Kaushan',
    fontSize: 19
  }
})