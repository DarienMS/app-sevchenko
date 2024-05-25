import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'

const Header = ({route}) => {
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