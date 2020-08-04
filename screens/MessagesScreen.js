import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Platform, StatusBar, View } from 'react-native';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeperator from '../components/ListItemSepeator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/profile.jpeg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/profile.jpeg')
    },
    {
        id: 3,
        title: 'T3',
        description: 'D3',
        image: require('../assets/profile.jpeg')
    }
];

export default function MessagesScreen(props) {
    // const array = useState(0);
    // const count = array[0];
    // const setCount = array[1];  //like setState in class component

    // const [count, setCount] = useState(0);

    const [messages, setMessages] = useState(initialMessages);

    //pull to refresh
   const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        //Delete the message from messages
        //const newMessages = message.filter(m => m.id !== message.id);
        setMessages(messages.filter(m => m.id !== message.id));
    }


    // const handleDelete = message => {
    //     //Delete the messages from messages
    //     //Delete messages from the server
    // }

    return(
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={()=>console.log("Message selected", item)}
                        renderRightActions={()=>
                            <ListItemDeleteAction onPress={()=> handleDelete(item)}/>
                        }
                    />
                )}
                ItemSeparatorComponent={ListItemSeperator}
                refreshing={refreshing}
                onRefresh = {() => {  //refreshing backend code
                    setMessages([
                        {
                            id: 3,
                            title: 'T3',
                            description: 'D3',
                            image: require('../assets/profile.jpeg')
                        }
                    ])
                }}
            />
        </Screen>
    );
} 