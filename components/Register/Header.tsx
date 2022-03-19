import * as React from 'react';
import { View, Text } from "react-native";

export default function Header() {
    return(
        <View
          style={{
              flex: 0,
              backgroundColor: '#ffffff',
              marginBottom: 10,
              overflow: 'visible',
              alignItems: 'center'
          }}
        >
          <Text style={{
            fontFamily: 'poppins-bold',
            fontSize: 25,
            color: 'orange'
          }}>
          Create an Account
          </Text>
        </View>
    )
}
