import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    definitions: {
        paddingVertical: 3,
    },

    definition: {
        flexWrap: 'wrap',
        fontSize: 18,
        paddingVertical: 3,
        color: '#555555'
    }
})

class Definitions extends Component{    
    render(){
        const renderDefinition = this.props.definitions.map( (definition, index) => {
            return(
                <Text key={index} style={styles.definition}>
                    { definition }
                </Text>
            )
        })

        return(
            <View style={styles.definitions}>
                { renderDefinition }
            </View>
        )
    }
}

export default Definitions;