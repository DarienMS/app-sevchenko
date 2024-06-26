import { FlatList, StyleSheet, View } from "react-native"
import CategoryItem from "../components/CategoryItem"
import { useGetCategoriesQuery } from "../services/shopService"

const Home = ({ route, navigation}) => {
  const {data: categories, error, isLoading} = useGetCategoriesQuery()

  
  return (
    <View style={styles.flatListContainer}>
      
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(elemntoDeMiArray) => elemntoDeMiArray}
        data={categories}
        renderItem={({ item }) => (
          <CategoryItem 
            navigation={navigation} 
            category={item} 
          />
        )}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  flatListContainer: {
    width: "100%",
    backgroundColor: "#F9E28E",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
})
