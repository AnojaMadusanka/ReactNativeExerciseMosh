import React from 'react';
import { View } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
Icons.loadFont();


export default function Icon({name, size=40, backgroundColor='#000', iconColor='#fff'}) {
    return (
         <View style={{ width: size,
            height: size, 
            borderRadius: size / 2, 
            backgroundColor,
            justifyContent: "center",
            alignItems: "center"  }}>
             <Icons name={name} color={iconColor} size={size*0.5} />
         </View>
    );
}