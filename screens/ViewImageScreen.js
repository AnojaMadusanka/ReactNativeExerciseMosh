import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../config/colors';

export default function ViewImageScreen(props) {
    return(
       <View style={styles.container}>
            <Image 
                resizeMode="contain"
                style={styles.image} 
                source={require('../assets/chair.jpeg')}
            />
            <View style={styles.closeIcon}>
               <Icon name="close" size={30} color="white"/>
            </View>
            <View style={styles.deleteIcon}>
                <Icon name="delete" size={30} color="white"/>
            </View>
       </View>
    );
}

const styles = StyleSheet.create({
    closeIcon: {
        // width: 50,
        // height: 50,
        // backgroundColor: colors.primary,
        position: "absolute",
        top: 40,
        left: 30,
    },
    deleteIcon: {
        // width: 50,
        // height: 50,
        // backgroundColor: colors.secondary,
        position: "absolute",
        top: 40,
        right: 30,
    },
    container: {
        backgroundColor: "#000",
        flex: 1
    },
    image: {
        width: "100%",
        height: "100%",
    }
})