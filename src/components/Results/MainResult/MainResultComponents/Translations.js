import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    translations: {
        marginTop: 5,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    translationContainer: {
        paddingVertical: 3,
        paddingHorizontal: 10,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 15,

        backgroundColor: '#eaeaea',
        justifyContent: 'center',
        alignItems: 'center'

    },
    translation: {
        fontSize: 18,
        color: '#555555',
    }
});

class Translation extends Component{
    render(){

        const renderTranslation = this.props.translations.map( (translation, index ) => {
            return(
                <View key={index} style={styles.translationContainer}>
                    <Text style={styles.translation}>{translation}</Text>
                </View>
            )
        })

        return(
            <View style={styles.translations}>
                { renderTranslation }                
            </View>
        )
    }
}

export default Translation;