import React from 'react';
import { View, TextInput, Platform, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
MaterialCommunityIcons.loadFont();

import colors from '../config/colors'
import defaultStyle from '../config/styles';

export default function AppTextInput({ icon, ...otherProps }) {
    return(
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon}/>}
            <TextInput style={styles.textInput} {...otherProps}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: '100%',
        padding: 15,
        marginVertical: 10
    },
    textInput : defaultStyle.text,
    icon: {
        marginRight: 10
    }
})