import * as React from "react";
import { View, Text } from "react-native";
import { fonts } from "react-native-elements/dist/config";



export default function Footer()  {
    return(
        <View style={{
            flex: 1,
            height: 50,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            paddingBottom: 20,
        }}>
          <Text style={{
              fontSize: 14,
              fontFamily: 'poppins-regular'
          }}>
            Create an account?
          </Text>
        </View>
    )
}