import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions
} from "react-native"
import React, { useEffect, useState } from "react"
import { useGetProductByIdQuery } from "../services/shopService"
import { useDispatch } from "react-redux"
import { addCartItem } from "../features/Cart/cartSlice"

const ItemDetail = ({ route, navigation }) => {

  const dispatch = useDispatch()
 
  const [orientation, setOrientation] = useState("portrait")
  const { width, height } = useWindowDimensions()

  const {productId: idSelected} = route.params

  const {data: product, error, isLoading} = useGetProductByIdQuery(idSelected)

  //Landscape = horizontal
  //Portrait = vertical

  useEffect(() => {
    if (width > height) setOrientation("landscape")
    else setOrientation("portrait")
  }, [width, height])

  

  const handleAddCart = () => {
    dispatch(addCartItem({...product, quantity: 1}))
  }

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
            <Button color={"black"} title="Add cart" onPress={handleAddCart}></Button>
             
          </View>
        </View>
      ) : null}
      <View style={styles.BackBtn}>
      <Button color={"black"} onPress={() => navigation.goBack()} title="Go back" />
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
    backgroundColor: "#F9ECBE",
    marginTop: 20,
    width: "100%",
   
  
  },
  mainContainerLandscape: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
    gap: 10,
    backgroundColor: "#F9ECBE",
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 15
    
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
    fontSize: 22,
  
  },
  description :{
    marginTop: 10,
    fontSize: 16,
  },
  title: {
   fontSize: 22,
   borderBottomWidth: 2,
   borderRadius: 20
   

  },
  BackBtn: {
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 30,
    flex: 1,
  
    
   

  }
})
