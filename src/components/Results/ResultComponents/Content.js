import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: 5,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '500',
        color: '#444444',
        marginBottom: 3
    },
    content: {
        fontSize: 18,
        color: '#444444',
        marginBottom: 3,
        marginTop: 3,
    }
})

class Content extends Component{
    render(){
        const renderDatas = this.props.datas.map( (data, index) => {
            return <Text key={index} style={styles.content}>{data}</Text>
        })

        return(
            <View style={styles.container}>
                
                <Text style={styles.subtitle}>
                    {this.props.subtitle}
                </Text>
                
                { renderDatas }

            </View>
        )
    }
}

export default Content;