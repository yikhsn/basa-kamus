import React, { Component } from 'react';
import { ScrollView, StyleSheet, Keyboard } from 'react-native';
import * as actionCreators from '../../../store/actionCreators';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import axios from '../../../axios/axios';

import SearchLoading from './SearchLoading';
import NoDataFound from './NoDataFound';

import Recents from './Recents';
import Results from './Results';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },

})

class Sugestions extends Component {    
    onListSelectedHandler = (word, data) => {
        Keyboard.dismiss();

        this.props.setContentLoading();

        this.props.setWord('');

        this.props.setSugestions([]);

        this.props.setRecent(data);

        this.props.removeSearchMode();

        this.getData(word).then( data => {
            this.props.removeContentLoading();

            this.props.setTypes(data);
        })
    }

    onRecentSelectedHandler = (word, data) => {
        Keyboard.dismiss();

        this.props.setContentLoading();

        this.props.resetRecent(data);

        this.props.removeSearchMode();

        this.getData(word).then( data => {
            this.props.removeContentLoading();

            this.props.setTypes(data);
        })
    }

    getData = (query) => {
        return axios.get(query).then( data => data.data).catch( error => error );
    }

    render(){
        const {
            recents,
            sugestions,
            isSearchLoading,
            isThereSugestions 
        } = this.props.datas;

        return(
            <ScrollView 
                style={styles.container}
                keyboardShouldPersistTaps={'always'}
            >

                {
                    isSearchLoading 
                        ?   <SearchLoading /> 
                        :   null
                }

                {
                    isThereSugestions
                        ?   null
                        :   <NoDataFound />
                }
                
                {
                    sugestions.length > 0
                        ?   <Results 
                                onListSelected={this.onListSelectedHandler}
                            />
                        :   null
                }

                {
                    recents.length > 0
                        ?   <Recents
                                onRecentSelected={this.onRecentSelectedHandler}
                            />
                        :   null
                }

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