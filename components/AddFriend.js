import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from "react-native"
import { useState, useContext } from "react"
import { addFriend } from "../utils/api"
import { UserContext } from "../context/userContext"
import { appStyle } from "../styles/appStyle"

export const AddFriend=()=>{
  const { userData } = useContext(UserContext)
  const [phoneNumber, setPhoneNumber] = useState('')
   
  function onPress() {
      if(!phoneNumber){
        showAlert('Please input a phone number')
      } else {
        addFriend(userData.user_id, phoneNumber).then(() => {
          setPhoneNumber('')
          showAlert(`Friend added`)
        })
       .catch((err) => {
          showAlert(err.response.data.msg)
        })
      }
    }
    
  function showAlert(msg) {
      Alert.alert(msg)
  }

  return(
    <View style={appStyle.appBackground}>
      <View style={appStyle.centreContainer}>
          <Text style={appStyle.headingText}>Add Friend</Text>
          <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                value={phoneNumber}
                keyboardType="numeric"
                placeholder="Phone Number"
                placeholderTextColor="#003f5c"
                onChangeText={setPhoneNumber}
                /> 
          </View> 
          <TouchableOpacity style={appStyle.button} onPress={onPress}>
            <Text style={appStyle.buttonText} >Add Friend</Text> 
          </TouchableOpacity> 
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    inputView: {
      backgroundColor: "white",
      borderWidth: 1,
      borderColor: "gray",
      borderRadius: 5,
      width: "60%",
      height: 40,
      marginBottom: 10,
      alignItems: "center",
    },
    TextInput: {
      height: 40,
      flex: 1,
      padding: 5,
      marginLeft: 20,
    },
    
    textView: {
      margin: 10,
    },
})