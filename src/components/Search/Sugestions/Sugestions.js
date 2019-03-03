import React, { Component } from 'react';
import { ScrollView, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';

import ListItem from './ListItem';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})

class Sugestions extends Component{

    onListSelected = (item) => {
        console.log('list selected' + item);
    }

    render(){
        const { sugestions } = this.props.datas;

        return(
            <ScrollView style={styles.container}>
                <FlatList
                    data={ sugestions }
                    renderItem={ ({ item }) =>  {
                       return <ListItem 
                            word={ item.words } 
                            onListSelected={ this.onListSelected }
                        />
                    }}
                    keyExtractor={ (item, index) => item + index }
                />
            </ScrollView>
        )
    }
}

const mapStateToProps = state => {
    return {
        datas: state
    }
}

export default connect(mapStateToProps)(Sugestions);