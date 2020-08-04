import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import colors from '../config/colors';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
Icons.loadFont();
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
            <Icons name="trash-can" size={35} />
        </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
