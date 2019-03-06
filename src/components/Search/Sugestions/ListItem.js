import React, { Component } from 'react';
import { TouchableHighlight, Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
    list: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: '#eaeaea',
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    container: {
        justifyContent: 'center'
    },
    text: {
        color: '#666666',
        fontSize: 22
    },
    type: {
        fontSize: 18,
        color: '#888888',
    }
})

class ListItem extends Component{
    
    render(){
        return(
            <TouchableHighlight 
                style={styles.list}
                onPress={() => this.props.onSelected(this.props.word, this.props.item)}
                underlayColor={'#eaeaea'}
            >
                <View style={styles.container}>
                    <Text style={styles.text}>{this.props.word}</Text>
                    <Text style={styles.type}>{this.props.type}</Text>
                </View>
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