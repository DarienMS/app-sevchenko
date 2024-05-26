import { StyleSheet, View } from 'react-native'
import React from 'react'


const Card = ({children, style}) => {
  return (
    <View style={{...styles.container, ...style}}>
        {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        width: 370,
        height: 60,
        shadowColor: "white",
        shadowOffset: {
          width: 6,
          height: 6,
        },
        shadowOpacity: 0.30,
        shadowRadius: 8,
        elevation: 4,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 15,
        borderBottomWidth: 5,
        borderColor: "white",
        
      
        
      
        
    }
})
