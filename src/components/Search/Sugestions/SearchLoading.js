import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import HeaderList from './HeaderList';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        justifyContent: 'center'
    }
})

class SearchLoading extends Component{
    render(){
        return(
            <View>
                <HeaderList title='Pencarian' />

                <View style={styles.container}>
                    <ActivityIndicator
                        size="large"    
                        color="#00C749"
                        />
                </View>
            </View>
        )
    }
}

export default SearchLoading;