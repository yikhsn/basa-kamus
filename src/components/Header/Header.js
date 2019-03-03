import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import * as actionCreators from '../../store/actionCreators';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import axios from 'axios';

import SearchBox from '../SearchBox/SearchBox';
import SearchBotton from '../SearchBotton/SearchBotton';

const styles = StyleSheet.create({
    container: {
        height: 95,
        backgroundColor: '#00C749',
        paddingLeft: 10,
        paddingRight: 10,        
        paddingTop: 10,
        paddingBottom: 10,

        justifyContent: 'center',
    },
    titleContainer: {
        height: 40,
        justifyContent: 'center'
    },
    searchContainer:{
        height: 55,
        flexDirection: 'row'
    },
    titleHeader: {
        fontSize: 25,
        fontWeight: '500',
        color: '#ffffff',
    },    
})

class CustomHeader extends Component{
    getData = (query) => {
        return axios.get('http://10.0.2.2:3001/api/words/search/text/' + query)
            .then( data => data.data)
            .catch( err => err);
    }

    onInputChangedHandler = (word) => {
        this.getData(word).then( data => {
            
            console.log(data);

            this.props.setSugestions(data);

            console.log('redux');
            console.log(this.props.datas.sugestions);
            console.log('redux');
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleHeader}>Basa</Text>
                </View>
                <View  style={styles.searchContainer}>
                    <SearchBox 
                        onInputChanged={this.onInputChangedHandler}
                    />
                    <SearchBotton />
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        datas: state
    }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators(actionCreators, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(CustomHeader);