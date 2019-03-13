import React, { Component } from 'react';
import { FlatList } from 'react-native';
import * as actionCreators from '../../../store/actionCreators';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ListItem from './ListItem';
import HeaderList from './HeaderList';

class Results extends Component{
    render(){

        const { sugestions } = this.props.datas;

        return(
            <FlatList
                keyboardShouldPersistTaps={'always'}
                data={ sugestions }
                renderItem={ ({ item }) =>  {                
                    return <ListItem 
                        word={ item.words }
                        item={ item }
                        type={ item.word_type }
                        onSelected={ this.props.onListSelected }
                    />
                }}
                keyExtractor={ (item, index) => item + index }
                ListHeaderComponent={ () => <HeaderList title='Pencarian' /> }
            />
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

export default connect(mapStateToProps, mapDispatchToProps)(Results);