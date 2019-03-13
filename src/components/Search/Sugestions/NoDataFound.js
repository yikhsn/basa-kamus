import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import HeaderList from './HeaderList';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#666666',
        fontSize: 18
    }
})

class SearchLoading extends Component{
    render(){
        return(
            <View>
                <HeaderList title='Pencarian' />

                <View style={styles.container}>
                    <Text style={styles.text}>
                        Kata tidak ditemukan!
                    </Text>
                </View>
            </View>
        )
    }
}

export default SearchLoading;