import React from 'react';
import { Text, View, TextInput, Sty } from 'react-native';

export default class TextBox extends React.Component{
    render() {
        return(
            <View style={styles.block}>
                <Text>{this.props.label}</Text>
                <TextInput onChangeText={this.props.oct}></TextInput>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    block: {
        margin: 15,
        padding: 10,
        borderWidth: 1,
        borderColor: '#4267b2',
        borderRadius: 10
    }
});