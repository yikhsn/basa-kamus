import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: 5,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '500',
        color: '#666666',
        marginBottom: 3
    },
    content: {
        fontSize: 18,
        color: '#666666',
        marginBottom: 3,
        marginTop: 3,
    }
})

class Content extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.subtitle}>Kata Kerja</Text>
                <Text style={styles.content}>ini adalah content dengan baris yang agak panjang, ini dibuat untuk menguji bagaimana tampilan jika content memiliki dua baris</Text>
                <Text style={styles.content}>ini adalah content dengan baris yang agak panjang, ini dibuat untuk menguji bagaimana tampilan jika content memiliki dua baris</Text>
            </View>
        )
    }
}

export default Content;