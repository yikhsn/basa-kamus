import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Box from '../ResultComponents/Box';
import Title from '../ResultComponents/Title';
import Content from '../ResultComponents/Content';

class Translation extends Component{
    render(){
        return(
            <Box>
                <Title />
            
                <Content />
                <Content />            
            </Box>
        )
    }
}

export default Translation;