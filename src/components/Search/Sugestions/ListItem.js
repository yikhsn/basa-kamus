import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: '#eaeaea',
    },
    list: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    textList: {
        color: '#666666',
        fontSize: 20
    }
})

class ListItem extends Component{    
    render(){
        return(
            <View style={styles.container}>
                <TouchableHighlight 
                    style={styles.list}
                    onPress={() => this.props.onListSelected(this.props.word)}
                    underlayColor={'#eaeaea'}
                >
                    <Text style={styles.textList}>{this.props.word}</Text>
                </TouchableHighlight>
            </View>
        )
        
    }
}

export default ListItem;