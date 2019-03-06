import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { connect } from 'react-redux';

import Definition from './Definition';
import Box from '../ResultComponents/Box';

const styles = StyleSheet.create({
    container: {

    },
    word: {
        fontSize: 35,
        fontWeight: '500',
        color: '#333333'
    }
})

class Definitions extends Component{
    render(){
        
        const renderDefintion = this.props.datas.types.map(
            (type, index) => <Definition key={index} datas={type}/>
        )
        
        return(
            <Box>
                <View>
                    <Text style={styles.word}>{ this.props.datas.types.length > 0 ? this.props.datas.types[0].words : null}</Text>
                </View>

                {renderDefintion}

            </Box>
        )
    }
}

const mapStateToProps = state => {
    return {
        datas: state
    }
}

export default connect(mapStateToProps)(Definitions);