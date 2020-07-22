import React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import colors from '../config/colors';

export default class AppButton extends React.Component {
  render() {
    return (
      <View style={styles.block}>
        <TouchableOpacity style={[styles.button, { backgroundColor: colors[this.props.color] }]} onPress={this.props.op}>
          <Text style={styles.text}>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    //backgroundColor: colors.primary,
    borderRadius: 25,
    padding: 15,
    margin:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
