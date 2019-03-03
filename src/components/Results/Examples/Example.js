import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginBottom: 3,
        marginTop: 3,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 2
    },
    words:{
        fontSize: 18,
        color: '#666666'
    },
    translation: {
        fontSize: 18,
        color: '#888888'
    }
})

class Example extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.words}>Ini adalah contoh text</Text>
                    <Text style={styles.translation }>"Ini adalah terjemahan dari contoh text"</Text>
                </View>
            </View>    
        )
    }
}

export default Example;