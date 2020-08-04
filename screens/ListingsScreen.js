import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';
const listings = [
    {
        id: 1,
        title: 'Chair for sale',
        price: 100,
        image: require('../assets/chair.jpeg')
    },
    {
        id: 2,
        title: 'Couch for sale',
        price: 100,
        image: require('../assets/couch.jpg')
    }
];

export default function ListingsScreen(props) {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        subTitle={"$" + item.price }
                        image={item.image}
                    />
                )}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    }
})