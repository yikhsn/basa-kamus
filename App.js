import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './src/store/reducer';
import AppNavigator from './AppNavigator';
import SplashScreen from 'react-native-splash-screen';

const store = createStore(reducer);

export default class App extends Component {
	
	componentWillMount() {
		SplashScreen.hide();
	}
	
	render() {
		return (
			<Provider store={store}>
				<AppNavigator />  
			</Provider>
		);
	}
}