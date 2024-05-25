import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions
} from "react-native"
import React, { useEffect, useState } from "react"
import allProducts from "../data/products.json"

const ItemDetail = ({ route, navigation }) => {

  const [product, setProduct] = useState(null)
  const [orientation, setOrientation] = useState("portrait")
  const { width, height } = useWindowDimensions()

  const {productId: idSelected} = route.params

  //Landscape = horizontal
  //Portrait = vertical

  useEffect(() => {
    if (width > height) setOrientation("landscape")
    else setOrientation("portrait")
  }, [width, height])

  useEffect(() => {
    //Encontrar el producto por su id
    const productSelected = allProducts.find(
      (product) => product.id === idSelected
    )
    setProduct(productSelected)
  }, [idSelected])

  return (
    <View style={styles.ItemDetailContainer}>
      
      {product ? (
        <View
          style={
            orientation === "portrait"?
            styles.mainContainer
            : styles.mainContainerLandscape
          }
        >
          <Image
            source={{ uri: product.images[0] }}
            style={orientation === "portrait" ? styles.image : styles.imageLandscape}
            resizeMode="cover"
          />
          <View style={orientation === "portrait" ? styles.textContainer : styles.textContainerLandscape}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>${product.price}</Text>
            <Button title="Add cart" color={"black"}></Button>
           
          </View>
          
        </View>
      ) : null}
      <View style={styles.BackBtn}>
        <Button onPress={() => navigation.goBack()} title="Go back" color={"black"} />
        </View>

    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({

  ItemDetailContainer:{
    
    backgroundColor: "#F9E28E",
    flex: 1,
    

  },
  mainContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
    backgroundColor: "#F9E28E",
    marginTop: 20,
    width: "100%"
  
  },
  mainContainerLandscape: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
    gap: 10,
  },
  image: {
    width: '100%',
    height: 250,
    
  },
  imageLandscape: {
    width: '45%',
    height: 200
  },
  textContainer: {
    flexDirection: "column",
    width: "100%"
  },

  textContainerLandscape: {
    width: '50%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
    gap: 10,
  },
  price: {
    textAlign: 'right',
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 18,
  },
  description :{
    marginTop: 10,
    fontSize: 14,
  },
  title: {
   fontSize: 20,

  },
  BackBtn: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,

  }
})
