import React from "react";
import { View, Image, TextInput, Dimensions,Text, StyleSheet, Alert } from "react-native";
import { Button } from 'react-native-elements';
import Header from "../components/Register/Header";
import SignupForm from "../components/Register/SignupForm";

export default function TabOneScreen() {

  return (
    <View style={styles.container}>
      <View style={{
        flex : 0,
        height: Dimensions.get('screen').height * 0.5,
        width: '80%',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10
      }}>
         < Header />
         < SignupForm />
        </View>
        </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textstyle:{
    fontFamily: 'poppins-bold',
    fontSize: 13
  },
  input: {
    height: 50,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  }
})
