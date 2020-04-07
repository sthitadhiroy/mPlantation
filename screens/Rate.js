import React, {Component} from 'react';

import {AsyncStorage, View, Button, Image, ImageBackground} from 'react-native';

import {Overlay, Text, Rating, AirbnbRating} from 'react-native-elements';
import {StackActions, NavigationActions} from 'react-navigation';

class Rate extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  FunctionToProceed = () => {
    this.props.navigation.navigate('Browse');
  };

  render() {
    return (
      <View>
        <View style={{padding: 100}} />
        <AirbnbRating
          count={5}
          reviews={['Terrible', 'Bad', 'Good', 'Very Good', 'Amazing']}
          defaultRating={5}
          size={50}
        />
        <View style={{padding: 30}}>
          <Button
            buttonStyle={{
              backgroundColor: '#006400',
            }}
            title="Remind Later"
            onPress={this.FunctionToProceed}
          />
          <View style={{padding: 10}} />
          <Button
            buttonStyle={{
              backgroundColor: '#006400',
            }}
            title="Lets,make your home Greener"
            onPress={this.FunctionToProceed}
          />
        </View>
      </View>
    );
  }
}

export default Rate;
