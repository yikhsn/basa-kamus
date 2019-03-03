import React, { Component } from 'react'
import { StyleSheet, TextInput } from 'react-native';

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

class SearchBox extends Component{
    render(){
        return <TextInput 
            style={styles.searchBox}
            multiline={false}
            autoCorrect={false}
            autoFocus={false}
            onChangeText={(word) => this.props.onInputChanged(word)}
        />
    }
}

export default SearchBox;