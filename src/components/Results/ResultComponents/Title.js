import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        borderColor: '#eaeaea',
        borderBottomWidth: 1,
        paddingBottom: 10,
        flexDirection: 'row'
    },
    title: {
        fontSize: 18,
        fontWeight: '400',
    },
    splitter:{
        fontSize: 18,      
        paddingHorizontal: 5
    },
    words: {
        fontSize: 18,
        fontWeight: '400',
        color: '#00C749'
    },
})

class Title extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>DEFINISI</Text>
                <Text style={styles.splitter}>|</Text>
                <Text style={styles.words}>adat</Text>
            </View>
        )
    }
}

export default Title;