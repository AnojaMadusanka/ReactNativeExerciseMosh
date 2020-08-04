import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default function AppText({children, style}) {
    //const [value, setValue] = React.useState(0)
    //setValue(1)
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    //color: "tomato",
    fontFamily: 'Avenir',
  },
});
