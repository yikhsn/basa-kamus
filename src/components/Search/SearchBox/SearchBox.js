import React, { Component } from 'react'
import { StyleSheet, TextInput } from 'react-native';
import * as actionCreator from '../../../store/actionCreators';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';

const styles = StyleSheet.create({
    searchBox: {
        flex: 1,
        height: 55,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10,
        paddingLeft: 10,
        backgroundColor: '#ffffff',

        fontSize: 22,
        color: '#666666'
    }
})

class SearchBox extends Component{
    render(){
        return <TextInput 
            style={styles.searchBox}
            value={this.props.datas.word}
            multiline={false}
            autoCorrect={false}
            autoFocus={false}
            placeholder={'Cari...'}
            onChangeText={(word) => this.props.onInputChanged(word)}
            onFocus={this.props.setSearchMode}
        />
    }
}

const mapStateToProps = state => {
    return {
        datas: state
    }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators(actionCreator, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);