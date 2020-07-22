import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import colors from '../config/colors';

export default class Card extends React.Component{
    render() {
        return(
            <View style={[styles.card]}>
               <Image style={styles.image} source={this.props.image}></Image>
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text style={styles.subTitle}>{this.props.subTitle}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden"
    },
    detailsContainer: {
        padding: 20
    },
    title: {
        marginBottom: 7,
        fontSize: 22
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 15
    },
    image: {
        width: "100%",
        height: 300,
        borderRadius: 25
    }
});