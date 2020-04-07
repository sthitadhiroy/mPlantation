import React from 'react';
import {Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Splash from '../screens/Splash';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Forgot from '../screens/Forgot';
import Explore from '../screens/Explore';
import Browse from '../screens/Browse';
import Settings from '../screens/Settings';
import Payment from '../screens/Payment';
import Verification from '../screens/Verification';
import Rate from '../screens/Rate';

import {theme} from '../constants';

const screens = createStackNavigator(
  {
    Splash,
    Welcome,
    Login,
    SignUp,
    Forgot,
    Explore,
    Browse,
    Settings,
    Payment,
    Verification,
    Rate,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: theme.sizes.base * 4,
        backgroundColor: '#20B2AA', // or 'white
        borderBottomColor: 'transparent',
      },
      headerBackImage: () => (
        <Image
          style={{marginRight: 20}}
          source={require('../assets/icons/back.png')}
        />
      ),
      headerBackTitle: null,
      headerLeftContainerStyle: {
        alignItems: 'center',
        marginLeft: theme.sizes.base * 2,
        paddingRight: theme.sizes.base,
      },
      headerRightContainerStyle: {
        alignItems: 'center',
        paddingRight: theme.sizes.base,
      },
    },
  },
);

export default createAppContainer(screens);
