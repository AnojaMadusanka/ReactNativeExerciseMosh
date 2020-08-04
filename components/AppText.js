import React from 'react';
import { Text, Platform } from 'react-native';

import defaultStyles from '../config/styles';

export default function AppText({ children, style }) {
    return(
    <Text style={[defaultStyles.text, style]}>{children}</Text>
    );
}


// const styles = StyleSheet.create({
//     text: {
//         fontSize: 18,
//         color: "tomato",
//         // fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir" 1
//         ...Platform.select({
//             ios: {
//                 fontSize: 20,
//                 fontFamily: "Avenir"
//             },
//             android: {
//                 fontSize: 18,
//                 fontFamily: "Roboto",
//             }
//         })
//     }
// })