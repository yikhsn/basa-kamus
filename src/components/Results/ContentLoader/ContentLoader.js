import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // height get by dimensions - searchbarheader - padding top
        // in screen 'Dictionary', etc
        height: Dimensions.get('window').height - 160,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

class ContentLoader extends Component{
    render(){
        return(
            <View style={styles.container}>
                <ActivityIndicator
                    size="large"
                    color="#00C749"
                />
            </View>
        )
    }
}

export default ContentLoader;