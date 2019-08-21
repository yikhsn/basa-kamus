import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    word: {
        fontSize: 45,
        fontFamily: 'SourceSerifPro-Regular',
        fontWeight: '500',
        color: '#333333'
    }
});

class Word extends Component{
    render(){
        return(
            <View>
                <Text style={styles.word}>
                    { this.props.words }
                </Text>
            </View>
        )
    }
}

export default Word;