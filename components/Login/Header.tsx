import * as React from "react";
import { View, Image } from "react-native";

export default function Header() {
    return(
        <View
          style={{
              flex: 1,
              backgroundColor: '#ffffff',
              marginBottom: 10,
              overflow: 'visible'
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
    )
}
