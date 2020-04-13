import React, {Component} from 'react';
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';

import {Button, Block, Input, Text} from '../components';
import {theme} from '../constants';

const VALID_EMAIL = 'user@mPlantation.com';
const VALID_PASSWORD = 'login';

export default class Login extends Component {
  state = {
    email: VALID_EMAIL,
    password: VALID_PASSWORD,
    errors: [],
    loading: false,
  };

  handleLogin() {
    const {navigation} = this.props;
    const {email, password} = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({loading: true});

    // check with backend API or with some static data
    if (email !== VALID_EMAIL) {
      errors.push('email');
    }
    if (password !== VALID_PASSWORD) {
      errors.push('password');
    }

    this.setState({errors, loading: false});

    if (!errors.length) {
      navigation.navigate('Browse');
    }
  }

  render() {
    const {navigation} = this.props;
    const {loading, errors} = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);

    return (
      <ScrollView style={{marginVertical: theme.sizes.padding}}>
        <KeyboardAvoidingView style={styles.login} behavior="padding">
          <Block padding={[0, theme.sizes.base * 2]}>
            <Text h1 bold>
              Login
            </Text>
            <View style={{padding: 20}} />
            <Block middle>
              <Input
                label="Email"
                error={hasErrors('email')}
                style={[styles.input, hasErrors('email')]}
                defaultValue={this.state.email}
                onChangeText={text => this.setState({email: text})}
              />
              <Input
                secure
                label="Password"
                error={hasErrors('password')}
                style={[styles.input, hasErrors('password')]}
                defaultValue={this.state.password}
                onChangeText={text => this.setState({password: text})}
              />
              <View style={{padding: 20}} />
              <Button
                style={{backgroundColor: '#9ACD32'}}
                shadow
                onPress={() => this.handleLogin()}>
                {loading ? (
                  <ActivityIndicator size="small" color="white" />
                ) : (
                  <Text style={{color: 'black'}} bold h3 center primary>
                    Login
                  </Text>
                )}
              </Button>

              <Button
                style={{backgroundColor: '#A9A9A9'}}
                shadow
                onPress={() => navigation.navigate('Forgot')}>
                <Text style={{color: 'black'}} h4 center>
                  Forgot your password?
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
  login: {
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
