import React from 'react'

import {
    createStackNavigator, 
    createAppContainer 
} from 'react-navigation';

import MainHeader from './src/components/Header/MainHeader';
import SearchBarHeader from './src/components/Header/SearchBarHeader';

import Dictionary from './src/screens/Dictionary';
import Search from './src/screens/Search';

const AppNavigator = createStackNavigator(
    {
        Dictionary: {
            screen: Dictionary,
            navigationOptions: {
                header: navProps => <SearchBarHeader {...navProps}/>
            
            }
        }, 
        Search: {
            screen: Search,
            navigationOptions: {
                header: navProps => <SearchBarHeader {...navProps}/>
            
            }
        }
    },
    {
        initialRouteName: 'Dictionary',
        navigationOptions: {
            headerStyle: {
                backgroundColor: 'transparent',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
                color: '#ffffff',
                fontSize: 20,
                fontWeight: '500'
            },
        }
    }
)

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;