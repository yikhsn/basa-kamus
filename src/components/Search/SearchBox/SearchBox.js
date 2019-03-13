import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    Keyboard
} from 'react-native';
import * as actionCreator from '../../../store/actionCreators';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    input: {
        flex: 1,
        height: 50,
        fontSize: 22,
        color: '#666666',
    },
    button: {
        width: 35,
        width: 35,
        justifyContent: 'center',
        alignItems: 'center'
    },
    search:{
        width: 25,
        height: 25,
        opacity: 0.5,
    },
    close:{
        width: 20,
        height: 20,
    }
})

class SearchBox extends Component{
    
    onCloseHandler = () => {
        Keyboard.dismiss();

        this.props.setWord('');

        this.props.setSugestions([]);

        this.props.removeSearchMode();
    }
    
    render(){
        return (
            <View style={styles.container}>
                <TextInput 
                    style={styles.input}
                    value={this.props.datas.word}
                    multiline={false}
                    autoCorrect={false}
                    autoFocus={false}
                    placeholder={'Cari...'}
                    onChangeText={(word) => this.props.onInputChanged(word)}
                    onFocus={this.props.setSearchMode}
                    underlineColorAndroid='transparent'
                />
                
                {
                    this.props.datas.isSearchMode
                    ? 
                        <TouchableOpacity
                            style={styles.button}
                            underlayColor={'#eaeaea'}
                            onPress={this.onCloseHandler}
                        >
                            <Image
                                source={ require('../../../../assets/cancel.png') }
                                style={ styles.close }
                            />
                        </TouchableOpacity>

                    : 
                        <View style={styles.button}>                        
                            <Image
                                source={ require('../../../../assets/search.png')}
                                style={ styles.search }
                            />
                        </View>
                }
            </View>
        )
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