import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import * as actionCreators from '../store/actionCreators';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Result from '../components/Results/Result/Result';
import Sugestions from '../components/Search/Sugestions/Sugestions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eaeaea',
        paddingTop: 5,
        paddingBottom: 35
    }
})

class Dictionary extends Component{
    render() {

        const { datas } = this.props;
    
        const renderTranslation = datas.types.map( (cur, index) => {
            return <Result key={index} datas={cur}/>
        })

        return(
            <ScrollView 
                style={styles.container}
                keyboardShouldPersistTaps={'always'}
            >
                {
                    datas.isSearchMode 
                        ? <Sugestions />
                        : renderTranslation
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

export default connect(mapStateToProps, mapDispatchToProps)(Dictionary);