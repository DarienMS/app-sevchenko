import { Platform, SafeAreaView, StatusBar, StyleSheet, View } from "react-native"
import Home from "./src/screens/Home"
import Header from "./src/components/Header"
import ItemListCategory from "./src/screens/ItemListCategory"
import { useState } from "react"
import {useFonts} from "expo-font"
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from "react"
import ItemDetail from "./src/screens/ItemDetail"


const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    Josefin: require("./assets/JosefinSans-Regular.ttf"),
  })

  const [categorySelected, setCategorySelected] = useState("")
  const [itemIdSelected, setItemIdSelected] = useState("")

  if (!fontsLoaded || fontError) {
    return null
  }



  if (fontsLoaded && !fontError) {
    return (
      <View style={styles.container}>
        <Header title={"Titulo de la app"} />
        {!categorySelected ? (
          <Home setCategorySelected={setCategorySelected} />
        ) : 

        !itemIdSelected ?
          <ItemListCategory
            categorySelected={categorySelected}
            setCategorySelected={setCategorySelected}
            setItemIdSelected={setItemIdSelected}
          />
          :
          <ItemDetail 
            idSelected={itemIdSelected}
            setProductSelected={setItemIdSelected}
          />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      flex: 1,
      alignItems: "center",
      backgroundColor: "#FDEBD0",
    },
  })

export default App
