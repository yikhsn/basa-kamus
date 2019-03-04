import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Example from './Example';

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: 5,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '500',
        color: '#666666',
        marginBottom: 3
    },
    content: {
        fontSize: 18,
        color: '#666666',
        marginBottom: 3,
        marginTop: 3,
    }
})

class Content extends Component{
    render(){
        const renderExamples = this.props.examples.map(
            (example, index) => <Example key={index} example={example} />
        )

        return(
            <View style={styles.container}>
                <Text style={styles.subtitle}>
                    {this.props.subtitle}
                </Text>

                { renderExamples }

            </View>
        )
    }
}

export default Content;