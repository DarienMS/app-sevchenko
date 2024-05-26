import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native"
import React from "react"
import { colors } from "../constants/colors"
import Card from "./Card"
import {useDispatch} from 'react-redux'
import { setCategorySelected } from "../features/Shop/shopSlice"

const CategoryItem = ({ category, navigation }) => {

  const dispatch = useDispatch()

  const handleNavigate = () => {
    dispatch(setCategorySelected(category))
    navigation.navigate('ItemListCategory', {category})
  }

  return (
    <Card style={styles.CategoryCard}>
      <Pressable onPress={handleNavigate}>
        <Text style={styles.text}>{category}</Text>
      </Pressable>
    </Card>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 25,
  },
  CategoryCard: {
    marginVertical: 15,
    
    
  }
})
