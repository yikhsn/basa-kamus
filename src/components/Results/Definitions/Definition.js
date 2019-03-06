import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    content: {
        paddingVertical: 5,
        flexDirection: 'row'
    },
    noContainer: {
        width: 30,
        // justifyContent: 'center',
    },
    noDefinitions: {
        fontSize: 18,
        paddingVertical: 3,
        color: '#888888' 
    },
    definitions: {
        flex: 1
    },
    definition: {
        fontSize: 18,
        paddingVertical: 3,
        color: '#555555'
    },
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
})

class Definition extends Component{
    render(){

        const renderDefinition = this.props.datas.definitions.map( (definition, index) => <Text key={index} style={styles.definition}> Ini adalah contoh definisi dalam dua baris </Text> )

        const renderTranslation = this.props.datas.translations.map( (translation, index ) => {
            return(
                <View key={index} style={styles.translationContainer}>
                    <Text style={styles.translation}>Artinya</Text>
                </View>
            )
        } )
        
        return(
            <View style={styles.content}>
                <View style={styles.noContainer}>
                    <Text style={styles.noDefinitions}>1</Text>
                </View>
                <View style={styles.definitions}>
                    
                    { renderDefinition }

                    <View style={styles.translations}>
                    
                        { renderTranslation }
                        
                    </View>
                </View>
            </View>
        )
    }
}


export default Definition;
