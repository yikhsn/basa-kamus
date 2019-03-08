import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginBottom: 3,
        marginTop: 3,
    },
    words:{
        fontSize: 18,
        color: '#444444'
    },
    translation: {
        fontSize: 18,
        color: '#777777'
    }
})

class Example extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.words}>
                    {this.props.example.word}
                </Text>
                
                <Text style={styles.translation }>
                    "{this.props.example.translation}"
                </Text>
            </View>    
        )
    }
}

export default Example;