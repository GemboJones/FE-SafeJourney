import { StyleSheet } from "react-native";
export const appStyle = StyleSheet.create({
  // default styling

  appBackground:{
    height: "100%",
    backgroundColor: "#fff"
  },
  
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'start',
      zIndex:0,
    },

    centreContainer: {
      display: "flex",
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10
    },

    headingText: {
      fontSize: 20,
      margin: 10,
      // fontFamily:"Didot"
    },
    headingUserText: {
      fontSize: 20,
      marginBottom: 10,
      fontWeight: 'bold',
      // fontFamily:"Didot"
    },

    button:{
      width: "40%",
      borderRadius: 25,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      marginBottom: 60,
      backgroundColor: "#007AFF",
    },

    buttonText: {
      fontSize: 15,
      fontWeight: 'bold',
      color: 'white',
      // fontFamily:"Didot"
  },

  // custom styling

  startJourneyButton:{
    width: "40%",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    padding: 10,
    backgroundColor: "#007AFF",
},
  
  whosJourneyView: {
    width: "15%",
    height: "5%",
    borderWidth: 1,
    borderRadius: 85,
    borderColor: "white",
    position: "absolute",
    top:"7%",
    left:"40%"
  },

  nameText:{
    backgroundColor: "blue",
    color: "white",
    textAlign: "center",
    padding:"2%",
    margin:'auto',
    fontFamily:"Didot"
  },
  pressable: {
    backgroundColor: "green"
  },

    // journeyMap component
  map:{
    width: "100%",
    height: "90%",
  },
 
  userContent:{
    flex: 0.1,
    paddingLeft:20,
    paddingTop: 20,
    //backgroundColor:"#E5D0E3",
    marginLeft:10,
    marginRight:10,
   
  }
});