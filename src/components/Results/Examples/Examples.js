import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Title from '../ResultComponents/Title';
import Box from '../ResultComponents/Box';
import Example from './Example';

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: 5,
    }
})

class Examples extends Component{
    render(){
        return(
            // <Box>
                <View style={styles.container}>

                    <Example />
                    <Example />
                    <Example />
                    <Example />
                </View>
            // </Box>
        )
    }
}

export default Examples;