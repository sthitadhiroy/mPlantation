import React, {Component} from 'react';
import {
  Alert,
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
} from 'react-native';

import {Button, Block, Input, Text} from '../components';
import {theme} from '../constants';

export default class SignUp extends Component {
  state = {
    email: null,
    username: null,
    password: null,
    address: null,
    city: null,
    pincode: null,
    errors: [],
    loading: false,
  };

  handleSignUp() {
    const {navigation} = this.props;
    const {email, username, password, address, city, pincode} = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({loading: true});

    // check with backend API or with some static data
    if (!email) errors.push('email');
    if (!username) errors.push('username');
    if (!password) errors.push('password');
    if (!address) errors.push('address');
    if (!city) errors.push('city');
    if (!pincode) errors.push('pincode');

    this.setState({errors, loading: false});

    if (!errors.length) {
      Alert.alert(
        'Success!',
        'Your account has been created',
        [
          {
            text: 'Continue',
            onPress: () => {
              navigation.navigate('Browse');
            },
          },
        ],
        {cancelable: false},
      );
    }
  }

  render() {
    const {navigation} = this.props;
    const {loading, errors} = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);

    return (
      <ScrollView style={{marginVertical: theme.sizes.padding}}>
        <KeyboardAvoidingView style={styles.signup} behavior="padding">
          <Block padding={[0, theme.sizes.base * 2]}>
            <Text h1 bold>
              Sign Up
            </Text>
            <Block middle bold>
              <Input
                email
                label="Email"
                error={hasErrors('email')}
                style={[styles.input, hasErrors('email')]}
                defaultValue={this.state.email}
                onChangeText={text => this.setState({email: text})}
              />
              <Input
                label="Username"
                error={hasErrors('username')}
                style={[styles.input, hasErrors('username')]}
                defaultValue={this.state.username}
                onChangeText={text => this.setState({username: text})}
              />
              <Input
                label="Address"
                error={hasErrors('address')}
                style={[styles.input, hasErrors('address')]}
                defaultValue={this.state.address}
                onChangeText={text => this.setState({address: text})}
              />
              <Input
                label="City"
                error={hasErrors('city')}
                style={[styles.input, hasErrors('city')]}
                defaultValue={this.state.city}
                onChangeText={text => this.setState({city: text})}
              />
              <Input
                label="Pincode"
                error={hasErrors('pincode')}
                style={[styles.input, hasErrors('pincode')]}
                defaultValue={this.state.pincode}
                onChangeText={text => this.setState({pincode: text})}
              />
              <Input
                secure
                label="Password"
                error={hasErrors('password')}
                style={[styles.input, hasErrors('password')]}
                defaultValue={this.state.password}
                onChangeText={text => this.setState({password: text})}
              />
              <Button
                style={{backgroundColor: '#008000'}}
                shadow
                onPress={() => this.handleSignUp()}>
                {loading ? (
                  <ActivityIndicator size="small" color="white" />
                ) : (
                  <Text bold center>
                    Sign Up
                  </Text>
                )}
              </Button>

              <Button
                style={{backgroundColor: '#9ACD32'}}
                shadow
                onPress={() => navigation.navigate('Login')}>
                <Text caption center style={{textDecorationLine: 'underline'}}>
                  Back to Login
                </Text>
              </Button>
            </Block>
          </Block>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  signup: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent,
  },
});
