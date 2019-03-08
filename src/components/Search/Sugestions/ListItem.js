import React, { Component } from 'react';
import { TouchableHighlight, Text, View, Image, StyleSheet } from 'react-native';
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-between'
    },
    content: {
        justifyContent: 'center'
    },
    text: {
        color: '#444444',
        fontSize: 22
    },
    type: {
        fontSize: 18,
        color: '#666666',
    },
    imageContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    image:{
        width: 15,
        height: 15,
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
                    <View style={styles.content}>
                        <Text style={styles.text}>{this.props.word}</Text>
                        <Text style={styles.type}>{this.props.type}</Text>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image 
                            source={ require('../../../../assets/arrow-right.png') }
                            style={styles.image}
                        />
                    </View>
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