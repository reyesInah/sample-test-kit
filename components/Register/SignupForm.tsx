import * as React from "react";
import { View, StyleSheet, Text, TextInput, Alert } from "react-native";
import { Button } from 'react-native-elements';


export default function SignupForm()  {
    const [emailtext, setEmailText] = React.useState<string>("");
    const [firstnametext, setFirstnameText] = React.useState<string>("");
    const [midnametext, setMidnameText] = React.useState<string>("");
    const [lastnametext, setLastnameText] = React.useState<string>("");
    const [password, setPasswordText] = React.useState<string>("");
    
    const handleLogin = () => {
      const EMAIL_ADD = " ";
      const FNAME = " ";
      const MIDNAME = " ";
      const LNAME = " ";
      const PASSWORD = " ";
  
      if (emailtext === EMAIL_ADD && firstnametext === FNAME && midnametext === MIDNAME && lastnametext === LNAME && password === PASSWORD) {
        Alert.alert("Sign Up", "Sign Up Successfully");
      } else {
        Alert.alert("Error Sign Up", "Invalid Email and Password");
      }
  }
    return(
    <View style={{
        flex: 0
      }}>
      <View style={{
        flex: 0,
        marginBottom: 10
      }}>
      <Text style={styles.textstyle}>
        Email
      </Text>
      <TextInput 
        style={styles.input}
        onChangeText={setEmailText}
        value={emailtext}
        keyboardType={"email-address"}
      />
    
     </View>
     <View style={{
        flex: 0
      }}>
      <View style={{
        flex: 0,
        marginBottom: 10
      }}>
      <Text style={styles.textstyle}>
        Firstname
      </Text>
      <TextInput 
        style={styles.input}
        onChangeText={setFirstnameText}
        value={firstnametext}
        keyboardType={"default"}
      />
     </View>
     <View style={{
        flex: 0
      }}>
      <View style={{
        flex: 0,
        marginBottom: 10
      }}>
      <Text style={styles.textstyle}>
        Midname
      </Text>
     <TextInput 
        style={styles.input}
        onChangeText={setMidnameText}
        value={midnametext}
        keyboardType={"default"}
      />
     </View>
     <View style={{
        flex: 0
      }}>
      <View style={{
        flex: 0,
        marginBottom: 10
      }}>
      <Text style={styles.textstyle}>
        Lastname
      </Text>
     <TextInput 
        style={styles.input}
        onChangeText={setLastnameText}
        value={lastnametext}
        keyboardType={"default"}
      />
     </View>
     <View style={{
        flex: 0
      }}>
      <View style={{
        flex: 0,
        marginBottom: 10
      }}>
    <Text style={styles.textstyle}>
        Password
    </Text>
    <TextInput 
        style={styles.input}
        onChangeText={setPasswordText}
        value={password}
        secureTextEntry={true}
      />
      </View>
    <View style={{
        flex:0
      }}>
        <View style={{
        flex: 0,
      }}>
      <Button
        title={"Create an account"}
        titleStyle={{
          fontFamily:'poppins-bold',
          fontSize : 20,
          color: 'white'
        }}
        buttonStyle={{
          backgroundColor: '#f4a261',
          padding: 5
        }}
        type={"solid"}
        onPress= {handleLogin}
      />
    </View>
    </View>
    </View>
    </View>
    </View>
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
  