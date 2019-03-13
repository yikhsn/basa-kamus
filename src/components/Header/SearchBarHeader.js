import React, { Component } from 'react';

import * as actionCreators from '../../store/actionCreators';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import axios from '../../axios/axios';

import HeaderBox from './HeaderBox';
import SearchBox from '../Search/SearchBox/SearchBox';

class SearchBarHeader extends Component{
    getData = (query) => {
        return axios.get('text/' + query)
            .then( data => data.data)
            .catch( err => []);
    }

    onInputChangedHandler = (word) => {
        this.props.setWord(word);

        // checking words user input not an empty string
        // if user inpur is not an empty string
        if ( word.trim() ) {

            // set search loading, to load <SearchLoading /> while waiting app
            // to request data from the server, untill the data is come
            this.props.setSearchLoading();
    
            // set 'isThereSugestions' to true to not load <NoDataFound /> components
            this.props.setThereSugestions();

            // set 'sugestions' state to empty array everytime input changed
            // this use to delete earlier sugestions from earlier input changed event
            this.props.setSugestions([]);

           // call getData function to get the data from the server
            this.getData(word)
                .then( data => { 
                    // when the data is back, remove <SearchLoading /> from the result search
                    this.props.removeSearchLoading();

                    // checking if the array more than 0, if true, set it to sugestions data
                    if ( data.length > 0 ) {
                        this.props.setSugestions(data);
                    }
                    // if the data not more than 0 or just an empty array, it means no data found
                    else {
                        // set the sugestions data to the empty array
                        this.props.setSugestions([]);

                        // set the 'isThereSugestions' to false, to load <NoDataFound /> component
                        this.props.removeThereSugestions();
                    }
                });
        }

        // if user input is an empty string
        else {
            this.props.removeSearchLoading();

            this.props.setSugestions([]);
        }
    }

    render(){
        return(
            <HeaderBox>
                <SearchBox 
                    onInputChanged={this.onInputChangedHandler}
                    navigation={this.props.navigation}
                />
            </HeaderBox>
        )
    }
}

const mapStateToProps = state => {
    return {
        datas: state
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarHeader);