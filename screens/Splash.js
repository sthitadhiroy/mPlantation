import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {AsyncStorage, View, Image, ImageBackground} from 'react-native';

import ReactTimeout from 'react-timeout';
import {StackActions, NavigationActions} from 'react-navigation';

const SPLASH_TIMEOUT = 4000;

class Splash extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Welcome');
    }, SPLASH_TIMEOUT);
  }

  componentWillUnmount() {
    this.isMounted = false;
  }

  render() {
    return (
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        source={require('../assets/splash.png')}
      />
    );
  }
}

export default Splash;
