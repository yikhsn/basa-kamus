import React, { Component } from 'react';
import { connect } from 'react-redux';
import Contents from './Contents';
import Word from './MainResultComponents/Word';
import Box from '../ResultComponents/Box';


class Definitions extends Component{
    render(){
        
        const renderContent = this.props.datas.types.map(
            (type, index) => <Contents 
                key={index}
                datas={type}
                number={index + 1}
            />
        )
        
        return(
            <Box>
                <Word
                    words={this.props.datas.types[0].words} 
                />

                { renderContent }
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