import React from 'react'

import {
    createStackNavigator, 
    createAppContainer 
} from 'react-navigation';

import CustomHeader from './src/components/Header/Header';

import Dictionary from './src/screens/Dictionary';
import Search from './src/screens/Search';

const AppNavigator = createStackNavigator(
    {
        Dictionary: {
            screen: Dictionary,
            navigationOptions: {
                header: navProps => <CustomHeader {...navProps}/>
            }
        }, 
        Search: {
            screen: Search,
            navigationOptions: {
                header: navProps => <CustomHeader {...navProps}/>
            }
        }
    },
    {
        initialRouteName: 'Search',
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