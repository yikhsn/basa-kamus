import React, { Component } from 'react'
import { View, TouchableOpacity, Text, Alert } from 'react-native';

class Search extends Component {
        
    render(){

        return(
                <View style={{
                    flex: 1,
                    backgroundColor: '#eaeaea',
                }}>
                    <TouchableOpacity
                        style={{
                            height: 50,
                            width: '100%',
                            backgroundColor: 'red'
                        }}
                        >
                        <Text>
                            Press Here
                        </Text>
                    </TouchableOpacity>
                </View>
        )
    }
}

export default Search;

