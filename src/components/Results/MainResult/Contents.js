import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Translations from './MainResultComponents/Translations';
import Definitions from './MainResultComponents/Definitions';

const styles = StyleSheet.create({
    container: {
        paddingVertical: 3,
        flexDirection: 'row'
    },

    numberContainer: {
        width: 30,
        paddingVertical: 3,
    },

    number: {
        fontSize: 16,
        paddingVertical: 3,
        color: '#888888' 
    },

    content:{
        flex: 1
    },
})

class Contents extends Component{
    render(){        
        return(
            <View style={styles.container}>
                <View style={styles.numberContainer}>
                    <Text style={styles.number}>{this.props.number}</Text>
                </View>

                <View style={styles.content}>
                    <Definitions 
                        definitions={this.props.datas.definitions}
                    />
                    <Translations
                        translations={this.props.datas.translations}    
                    />                    
                </View>
            </View>
        )
    }
}

export default Contents;