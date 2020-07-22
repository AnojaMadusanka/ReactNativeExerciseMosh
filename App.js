import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AppButton from './components/AppButton';
import Card from './components/Card';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.mainPage}>
        {/* <AppButton title="Login" color="primary" op={()=>{
          console.log('Touched');
        }}>

        </AppButton>
        <AppButton title="Register" color="secondary" op={()=>{
          console.log('Registered');
        }}>

        </AppButton> */}
        <View style={styles.cardView}>
          <Card
            title = "Ecommerce bucket"
            subTitle = "$100"
            image = {require("./assets/ecommerce-software.jpg")}
          ></Card>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // mainPage: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'stretch',
  // },
  cardView: {
    marginTop: 40,
    padding: 10,
  }
});
