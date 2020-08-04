import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AppButton from './components/AppButton';
import Card from './components/Card';
import AppText from './components/AppText.android';
import ListingDetailsScreen from './screens/ListingDetailsScreen';
import ViewImageScreen from './screens/ViewImageScreen';
import MessagesScreen from './screens/MessagesScreen';
import Screen from './components/Screen';
import Icon from './components/Icon';
import ListItem from './components/ListItem';
import AccountScreen from './screens/AccountScreen';
import ListingsScreen from './screens/ListingsScreen';
import AppTextInput from './components/AppTextInput';
import Switch from './components/Switch';

export default class App extends React.Component {
  render() {
    return (
      // <View style={styles.mainPage}>
      //   {/* <AppButton title="Login" color="primary" op={()=>{
      //     console.log('Touched');
      //   }}>

      //   </AppButton>
      //   <AppButton title="Register" color="secondary" op={()=>{
      //     console.log('Registered');
      //   }}>

      //   </AppButton> */}

      //   {/* <View style={styles.cardView}>
      //     <Card
      //       title = "Ecommerce bucket"
      //       subTitle = "$100"
      //       image = {require("./assets/ecommerce-software.jpg")}
      //     ></Card>
      //     <AppText></AppText>
      //   </View> */}

      //   {/* <ViewImageScreen></ViewImageScreen> */}
      //  {/* 2 <MessagesScreen></MessagesScreen> */}
      // </View>
      // 3<Screen>
      //   <ListItem
      //     title="My title"
      //     subTitle="My subtitle"
      //     ImageComponent={<Icon name="email" size={50} backgroundColor="red" iconColor="white" />}
      //   />
      // </Screen>

      // <AccountScreen/>
      // <ListingsScreen/>
      <Screen>
        {/* <AppTextInput placeholder="Username" icon="email"/> */}
        <Switch/>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  mainPage: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'stretch',
  },
  cardView: {
    marginTop: 40,
    padding: 10,
  },
});
