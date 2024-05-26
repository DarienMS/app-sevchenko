import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import React, { useState } from "react"
import { FontAwesome5 } from "@expo/vector-icons"
import { FontAwesome6 } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';

const Search = ({ onSearch = () => {}, error = "", goBack = () => {} }) => {
  const [keyword, setKeyword] = useState("")
  return (
    <View style={styles.container}>
       <Pressable onPress={goBack}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </Pressable>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={keyword}
          onChangeText={setKeyword}
          />
          {error ? <Text style={styles.errorText}>{error}</Text> : null}

      </View>
      <Pressable onPress={() => onSearch(keyword)}>
        <FontAwesome6 name="searchengin" size={24} color="black" />
      </Pressable>
      <Pressable onPress={() => setKeyword("")}>
        <FontAwesome5 name="eraser" size={24} color="black" />
      </Pressable>
     
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 18,
  },
  inputContainer: {
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'start',
    gap: 4,
    width: '70%',
  },
  input: {
    padding: 8,
    fontSize: 18,
    backgroundColor: "white",
    color: "black",
    borderRadius: 10,
  },
  errorText: {
    color: 'tomato',
    fontSize: 14,
    fontFamily: 'Josefin'
  }
})
