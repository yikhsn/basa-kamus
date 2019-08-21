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
        padding: 5,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        padding: 5,
        height: 40,
        fontSize: 20,
        fontFamily: 'SourceSerifPro-Italic',
        color: '#666666',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        height: 35,
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
        opacity: 0.7,
    }
})

class SearchBox extends Component{
    onCloseHandler = () => {
        Keyboard.dismiss();

        this.props.setWord('');

        this.props.setSugestions([]);

        this.props.removeSearchMode();

        this.props.setThereSugestions();
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