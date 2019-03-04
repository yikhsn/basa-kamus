import React, { Component } from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
    list: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: '#eaeaea',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    textList: {
        color: '#666666',
        fontSize: 20
    }
})

class ListItem extends Component{
    
    render(){
        return(
            <TouchableHighlight 
                style={styles.list}
                onPress={() => this.props.onListSelected(this.props.word)}
                underlayColor={'#eaeaea'}
            >
                <Text style={styles.textList}>{this.props.word}</Text>
            </TouchableHighlight>
        )
    }
}

const mapStateToProps = state => {
    return {
        datas: state
    }
}

export default connect(mapStateToProps)(ListItem);