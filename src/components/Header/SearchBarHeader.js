import React, { Component } from 'react';

import * as actionCreators from '../../store/actionCreators';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import axios from 'axios';

import HeaderBox from './HeaderBox';
import SearchBox from '../Search/SearchBox/SearchBox';

class SearchBarHeader extends Component{
    getData = (query) => {
        return axios.get('http://10.0.2.2:3001/api/words/search/text/' + query)
            .then( data => data.data)
            .catch( err => err);
    }

    onInputChangedHandler = (word) => {
        this.props.setWord(word);

        this.getData(word)
            .then( data => { 
                this.props.setSugestions(data);
            });
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

const mapDispatchToProps = dispatch => (
    bindActionCreators(actionCreators, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarHeader);