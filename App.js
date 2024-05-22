import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity, Modal, } from 'react-native';
import { useState } from 'react';



export default function App() {

  const [textItem, setTextItem] = useState("")
  const [itemList, setItemList] = useState([])

  const [modalVisible, setModalVisible] = useState(false)
  const [itemSelected, setItemSelected] = useState({})

  const handleChangeText = (e) => {
      setTextItem(e)
  }

  const addItem = () => {
    setItemList(currentValue => [
      ...currentValue,
      {id: Math.random() .toString(), value: textItem}
    ])

    setTextItem("")
  }

  const handleModal = (item) => {

    setModalVisible(true)
    setItemSelected(item)
  }
  
  const handleDelete = () => {
    const filter = itemList.filter(task => task !== itemSelected)
    setItemList(filter)
    setModalVisible(false)

  }

  const handleCancelModal = () => {
    setModalVisible(false)
    setItemSelected({})


  }
  
  

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}
        onChangeText={handleChangeText}
        value={textItem} />
        <Button title='ADD' color={"black"} onPress={addItem}/>

      </View>
      <View style={styles.taskContainer}>

        <FlatList style={styles.flatlist} data={itemList}
                  keyExtractor={task => task.id.toString()}
                  renderItem={({ item }) =>
                   <TouchableOpacity style={styles.card}
                   onPress={()=> handleModal(item)}>
                  <Text style={styles.taskText}>{item.value}</Text>
                  </TouchableOpacity>


                  }>
          

        </FlatList>
        
          
        

      </View>
      
            <Modal visible= {modalVisible} animationType='fade' transparent={true}>
                    <View style={styles.modalStyles}>
                      <View style={styles.modalContainer}>
                        <View style={styles.textContainer}>
                          <Text style={styles.taskText}>Borrar?</Text>
                        </View>
                        <View style={styles.textContainer}><Text style={styles.taskText}>{itemSelected.value}</Text>
                        </View>
                            
                        <View style={styles.btnContainer}>
                          <Button title='Borrar' onPress={handleDelete}></Button>
                          <Button title='Cancelar'onPress={handleCancelModal}></Button>
                        </View>
                      </View>
                    </View>

            </Modal>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: "#888888"

  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: "20%"
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    width: 300

  },
  taskContainer: { 
    alignItems: "center",
    paddingTop: 30

  },
  card: {
    marginVertical: 20,
    backgroundColor: "white",
    paddingVertical: 10,
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 6,
    paddingHorizontal: "20%"
    
    
    

  },
  taskText: {
        fontSize: 18,
        fontWeight: "bold",

        

  },
  flatlist: {
      width: "70%",

  },
  modalStyles: {
      backgroundColor: "#cccccc88",
      flex:1,
      alignItems: "center",
      justifyContent: "center"
  },
  modalContainer: {
    backgroundColor: "white",
    width: "80%",
    alignItems: "center",
    gap: 20,
    paddingVertical: 20,
    borderRadius: 7,
  },
  textContainer: {

  },
  btnContainer: {
    flexDirection: "row",
    gap: 20,
  
    

  },
});
