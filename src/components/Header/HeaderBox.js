import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: '#00C749',
        paddingLeft: 10,
        paddingRight: 10,        
        paddingBottom: 10,

        justifyContent: 'center',
    },
    titleContainer: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    searchContainer:{
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleHeader: {
        fontSize: 32,
        fontFamily: 'SourceSansPro-Bold',
        color: '#ffffff',
        justifyContent: 'center'

    },    
})

class HeaderBox extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleHeader}>BASA</Text>
                </View>
                <View  style={styles.searchContainer}>
                    { this.props.children }
                </View>
            </View>
        )
    }
}

export default HeaderBox;