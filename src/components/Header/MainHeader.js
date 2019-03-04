import React, { Component } from 'react';

import HeaderBox from './HeaderBox';
import SearchBotton from '../Search/SearchBotton/SearchBotton';

class CustomHeader extends Component{
    render(){
        return(
            <HeaderBox>
                <SearchBotton navigation={this.props.navigation}/>
            </HeaderBox>
        )
    }
}

export default CustomHeader;