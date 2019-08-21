import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import HeaderList from './HeaderList';
import FooterList from './FooterList';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
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
                <FooterList />
            </View>
        )
    }
}

export default SearchLoading;