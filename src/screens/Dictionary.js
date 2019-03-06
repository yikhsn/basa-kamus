import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import * as actionCreators from '../store/actionCreators';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Result from '../components/Results/Result/Result';
import Definitions from '../components/Results/Definitions/Definitions';
import Sugestions from '../components/Search/Sugestions/Sugestions';

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#eaeaea',
//         paddingTop: 5,
//         paddingBottom: 5
//     }
// })

class Dictionary extends Component{
    render() {

        const { datas } = this.props;
    
        const renderTranslation = datas.types.map( (cur, index) => {
            return <Result key={index} datas={cur}/>
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

                                <Definitions />

                                { renderTranslation }
                                
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