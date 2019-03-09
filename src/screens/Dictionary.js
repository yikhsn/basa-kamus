import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import * as actionCreators from '../store/actionCreators';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DetailResult from '../components/Results/DetailResult/DetailResult';
import MainResult from '../components/Results/MainResult/MainResult';
import Sugestions from '../components/Search/Sugestions/Sugestions';

class Dictionary extends Component{
    render() {

        const { datas } = this.props;
    
        const renderDetailResult = datas.types.map( (cur, index) => {
            return <DetailResult key={index} datas={cur}/>
        })

        return(
            <ScrollView 
                style={{
                    flex: 1,
                    backgroundColor: '#eaeaea',
                    paddingTop: datas.isSearchMode ? 0 : 5,
                }}
                keyboardShouldPersistTaps={'always'}
            >
                {
                    datas.isSearchMode 
                        ?   <Sugestions />
                        :   <View>
                                
                                { datas.types.length > 0 ? <MainResult /> : null }

                                { renderDetailResult }
                            </View>
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