import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    box: {
        padding: 20,
        
        marginBottom: 5,
        marginTop: 5,
        marginRight: 10,
        marginLeft: 10,

        backgroundColor: '#ffffff'
    },
})

class Box extends Component{
    render(){
        return(
            <View style={styles.box}>
                { this.props.children }
            </View>
        )
    }
}

export default Box;