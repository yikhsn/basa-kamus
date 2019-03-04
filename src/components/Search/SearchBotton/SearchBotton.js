import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    searchBox: {
        flex: 1,
        paddingTop: 10,
        height: 45,
        paddingBottom: 10,
        paddingRight: 10,
        paddingLeft: 10,
        backgroundColor: '#ffffff'
    }
})

class SearchBotton extends Component{
    render(){
        return(
            <TouchableOpacity 
                style={styles.searchBox}
                onPress={() => this.props.navigation.navigate('Search')}
            >
                
            </TouchableOpacity>
        )
    }
}

export default SearchBotton;