import React, {Component} from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {AsyncStorage, View, Button, Image, ImageBackground} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Overlay, Text} from 'react-native-elements';
import {StackActions, NavigationActions} from 'react-navigation';
import picture from '../assets/images/right.png';

class Verification extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  constructor() {
    super();
    this.state = {
      isVisible: false,
    };

    this.overlayy = this.overlayy.bind(this);
  }

  overlayy() {
    this.setState({isVisible: true});
  }
  FunctionToProceed = () => {
    this.setState({isVisible: false});
    this.props.navigation.navigate('Rate');
  };

  render() {
    const {selectedIndex} = this.state;
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: 'transparent',
        }}>
        <Image
          style={{
            marginTop: 20,
            height: 130,
            resizeMode: 'contain',
            width: 250,
          }}
          source={require('../assets/images/verificationp.png')}
        />
        <View style={{padding: 30}} />
        <View
          style={{
            height: '55%',
            width: '80%',
            backgroundColor: '#90EE90',
            padding: 10,
            borderColor: 'black',
            borderWidth: 1,
          }}>
          <View style={{padding: 30}} />
          <OTPInputView
            style={{width: '100%', height: 100}}
            pinCount={4}
            autoFocusOnLoad
            codeInputFieldStyle={{
              width: 30,
              height: 45,
              borderWidth: 0,
              borderBottomWidth: 3,
              color: 'black',
              fontWeight: 'bold',
            }}
            codeInputHighlightStyle={{borderColor: '#556B2F'}}
          />
          <View style={{padding: 30}} />
          <Overlay
            isVisible={this.state.isVisible}
            onBackdropPress={() => this.setState({isVisible: false})}>
            <View style={{height: '80%'}}>
              <Image source={picture} style={{width: 250, height: 250}} />
              <View style={{padding: 20}} />
              <Text>Payment is Sucessfull.</Text>
              <Text>Delivery details will be sent to email shortly.</Text>
            </View>

            <Button title="Proceed" onPress={this.FunctionToProceed} />
          </Overlay>
          <View>
            <Button
              buttonStyle={{
                backgroundColor: '#006400',
              }}
              title="Resend"
            />
            <View style={{padding: 10}} />
            <Button
              buttonStyle={{
                backgroundColor: '#006400',
              }}
              title="Confirm"
              onPress={this.overlayy}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Verification;
