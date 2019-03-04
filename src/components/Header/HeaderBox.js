import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 110,
        backgroundColor: '#00C749',
        paddingLeft: 10,
        paddingRight: 10,        
        paddingTop: 10,
        paddingBottom: 10,

        justifyContent: 'center',
    },
    titleContainer: {
        height: 40,
        justifyContent: 'center'
    },
    searchContainer:{
        height: 60,
        flexDirection: 'row'
    },
    titleHeader: {
        fontSize: 25,
        fontWeight: '500',
        color: '#ffffff',
    },    
})

class HeaderBox extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleHeader}>Basa</Text>
                </View>
                <View  style={styles.searchContainer}>
                    { this.props.children }
                </View>
            </View>
        )
    }
}

export default HeaderBox;