import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';

import * as actionCreators from '../store/actionCreators';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Translation from '../components/Results/Translation/Translation';
import Examples from '../components/Results/Examples/Examples';

const styles = StyleSheet.create({
    container: {
        paddingTop: 5,
        paddingBottom: 5,
        flex: 1,
        backgroundColor: '#eaeaea'
    }
})

class Dictionary extends Component{
    render() {
        return(
            <ScrollView style={styles.container}>
                <Translation />
                <Translation />

                <Examples />

            </ScrollView>
        )
    }
}

const mapStateToProps = state => {
    return{
        datas: state
    }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators(actionCreators, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Dictionary);