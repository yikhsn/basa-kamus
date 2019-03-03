import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 45,
        width: 45,
        backgroundColor: '#00B728',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#ffffff',
        fontSize: 15,
    }
})

class SearchBotton extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Cari</Text>
            </View>
        )
    }
}

export default SearchBotton;
