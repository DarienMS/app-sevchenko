import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native"
import { useFonts } from "expo-font"
import Navigator from "./src/navigation/Navigator"
import { Provider } from "react-redux"
import store from "./src/store"
import { initSQLiteDB} from "./src/persistence"

(async ()=> {
    try {
        const response = await initSQLiteDB()
    } catch (error) {
    }
})



const App = () => {
    const [fontsLoaded, fontError] = useFonts({
        Josefin: require("./assets/JosefinSans-Regular.ttf"),
        Kaushan: require("./assets/KaushanScript-Regular.ttf")
    })

    if (!fontsLoaded || fontError) {
        return null
    }

    if (fontsLoaded && !fontError) {
        return (
            <SafeAreaView style={styles.container}>
                <Provider store={store}>
                    <Navigator />
                </Provider>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: "#F9E28E",
  },
})

export default App

