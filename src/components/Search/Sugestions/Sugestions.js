import React, { Component } from 'react';
import { ScrollView, StyleSheet, FlatList, Keyboard } from 'react-native';

import axios from 'axios';

import * as actionCreators from '../../../store/actionCreators';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ListItem from './ListItem';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },

})

class Sugestions extends Component {    
    onListSelectedHandler = (word) => {
        Keyboard.dismiss();

        this.props.setWord('');

        this.props.removeSearchMode();

        this.getData(word).then( data => {
            this.props.setTypes(data);
        })

        console.log(this.props.datas);
        
    }

    getData = (query) => {
        return axios.get('http://10.0.2.2:3001/api/words/search/' + query)
            .then( data => data.data)
            .catch( error => error );
    }

    render(){
        const { sugestions } = this.props.datas;

        return(
            <ScrollView 
                style={styles.container}
                keyboardShouldPersistTaps={'always'}
            >
                <FlatList
                    keyboardShouldPersistTaps={'always'}
                    data={ sugestions }
                    renderItem={ ({ item }) =>  {
                       return <ListItem 
                            word={ item.words } 
                            onListSelected={ this.onListSelectedHandler }
                        />
                    }}
                    keyExtractor={ (item, index) => item + index }
                />
            </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(Sugestions);