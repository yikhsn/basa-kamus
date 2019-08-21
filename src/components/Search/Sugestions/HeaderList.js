import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 2,
        borderColor: '#eaeaea',
        paddingVertical: 5,
        paddingHorizontal: 13,
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    text: {
       fontSize: 18,
       color: '#666666'
    }
})

class HeaderList extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>
                    {this.props.title}
                </Text>
            </View>
        )
    }
}

export default HeaderList;