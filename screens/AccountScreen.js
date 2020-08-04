import React from 'react';
import { View, StyleSheet,FlatList } from 'react-native';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import Icon from '../components/Icon';
import colors from '../config/colors';
import ListItemSeperatorComponent from '../components/ListItemSepeator';

const menuItems = [{
    title: "My Listings",
    icon: {
        name: "format-list-bulleted",
        backgroundColor: colors.primary
    }
},
{
    title: "My Messages",
    icon: {
        name: "format-list-bulleted",
        backgroundColor: colors.secondary
    }
}


]

export default function AccountScreen(props){ 
    return(
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="Anoja Madusanka"
                    subTitle="anojamadusanka7@gmail.com"
                    image={require('../assets/profile.jpeg')}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeperatorComponent}
                    renderItem={({item}) =>(
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                        />
                    )}
                />
            </View>
            <ListItem
                title="Logout"
                IconComponent={
                    <Icon name="logout" backgroundColor="#ffe66d"/>
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light
    },
    container: {
        marginVertical: 30
    }
})