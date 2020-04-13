import React from 'react';
import {Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Splash from '../screens/Splash';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Forgot from '../screens/Forgot';
import Plants from '../screens/Plants';
import Browse from '../screens/Browse';
import Settings from '../screens/Settings';
import Payment from '../screens/Payment';
import Verification from '../screens/Verification';
import Rate from '../screens/Rate';
import Seeds from '../screens/Seeds';
import Flowers from '../screens/Flowers';
import Sprayers from '../screens/Sprayers';
import Pots from '../screens/Pots';
import Fertilizers from '../screens/Fertilizers';
import PlantTrivia from '../screens/PlantTrivia';
import SeedTrivia from '../screens/SeedTrivia';
import FlowerTrivia from '../screens/FlowerTrivia';
import FertilizerTrivia from '../screens/FertilizerTrivia';

import {theme} from '../constants';

const screens = createStackNavigator(
  {
    Splash,
    Welcome,
    Login,
    SignUp,
    Forgot,
    Plants,
    PlantTrivia,
    SeedTrivia,
    Seeds,
    Flowers,
    FlowerTrivia,
    Sprayers,
    Pots,
    Fertilizers,
    FertilizerTrivia,
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
