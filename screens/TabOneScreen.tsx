import React, { useState } from "react";
import { View, Image, TextInput, Dimensions, TouchableOpacity, Text } from "react-native";

export default function TabOneScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <View style={{
        height: Dimensions.get('screen').height * 0.5,
        width: '80%',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10
      }}>
        <View
          style={{
              flex: 1,
              backgroundColor: '#ffffff',
              marginBottom: 10,
              borderRadius: 10,
              overflow: 'hidden'
          }}
        >
          <Image
            style={{
              height: '100%',
              width: '100%',
              resizeMode: 'center'
            }}
            source={{uri:'https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-orange.png'}}
          />
          </View>
          <View
          style={{
            flex: 0,
            backgroundColor: '#f7ede2',
            paddingVertical: 10,
            paddingHorizontal: 10,
            marginBottom: 10,
            borderRadius: 10,
          }}
        >
          <TextInput
            style={{
              color: '#877D7B',
              fontFamily: 'poppins-bold',
              fontSize: 18,
              borderColor: '#ade8f4',
            }}
            numberOfLines={1}
          >
            Email
          </TextInput>
        </View>
        <View
          style={{
            flex: 0,
            backgroundColor: '#f7ede2',
            paddingVertical: 10,
            paddingHorizontal: 10,
            marginBottom: 10,
            borderRadius: 10,
          }}
        >
          <TextInput
            style={{
              color: '#877D7B',
              fontFamily: 'poppins-bold',
              fontSize: 18,
              borderColor: '#ade8f4'
            }}
            numberOfLines={1}
          >
            Password
          </TextInput>
        </View>
        <View style={{
          flex: 0.10,
          justifyContent: "center",
          paddingHorizontal: 10,
          borderRadius: 10
        }}>
          </View>
          <TouchableOpacity
        style={{
          alignItems: "center",
          backgroundColor: "#ffd6a5",
          padding: 10,
          borderRadius: 10
        }}
      >
        <Text>Log In</Text>
      </TouchableOpacity>
      </View>
    </View>
  
  );
}