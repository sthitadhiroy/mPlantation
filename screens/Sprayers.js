import React, {Component} from 'react';
import {
  Animated,
  Dimensions,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';

import {Divider, Card, ListItem, Button, Icon} from 'react-native-elements';
import NumericInput from 'react-native-numeric-input';

// import {Button, Input, Block, Text} from '../components';
// import {theme, mocks} from '../constants';

const {width, height} = Dimensions.get('window');

class Sprayers extends Component {
  FunctionToPay = () => {
    this.props.navigation.navigate('Payment');
  };
  render() {
    return (
      <ScrollView>
        <View>
          <Card
            style={{backgroundColor: 'red', height: '45%'}}
            image={require('../assets/images/Bsprayers01.png')}>
            <Text style={{marginBottom: 10}}>
              Monterey LG6135 Garden Insect Spray, Insecticide and Pesticide
              with Spinosad Concentrate, 32 oz
            </Text>
            <View style={{alignItems: 'center'}}>
              <NumericInput
                onChange={value => console.log(value)}
                onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                totalWidth={150}
                totalHeight={40}
                iconSize={20}
                step={1}
                valueType="real"
                rounded
                textColor="#B0228C"
                iconStyle={{color: 'white'}}
                rightButtonBackgroundColor="#228B22"
                leftButtonBackgroundColor="#3CB371"
              />
            </View>
            <View style={{padding: 5}} />
            <Button
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
                backgroundColor: '#9ACD32',
              }}
              title="₹ 1300"
            />
          </Card>
          <View style={{padding: 2}} />
          <Divider style={{backgroundColor: 'black'}} />
          <Divider style={{backgroundColor: 'black'}} />
          <Card
            style={{backgroundColor: 'red', height: '45%'}}
            image={require('../assets/images/Bsprayers02.png')}>
            <Text style={{marginBottom: 10}}>
              Bonide (BND253) - Captain Jack's Dead Bug Brew,
              Insecticide/Pesticide Concentrate (32 oz.), Brown/A
            </Text>
            <View style={{alignItems: 'center'}}>
              <NumericInput
                onChange={value => console.log(value)}
                onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                totalWidth={150}
                totalHeight={40}
                iconSize={20}
                step={1}
                valueType="real"
                rounded
                textColor="#B0228C"
                iconStyle={{color: 'white'}}
                rightButtonBackgroundColor="#228B22"
                leftButtonBackgroundColor="#3CB371"
              />
            </View>
            <View style={{padding: 5}} />
            <Button
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
                backgroundColor: '#9ACD32',
              }}
              title="₹ 900"
            />
          </Card>
          <View style={{padding: 2}} />
          <Divider style={{backgroundColor: 'black'}} />
          <Divider style={{backgroundColor: 'black'}} />
          <Card
            style={{backgroundColor: 'red', height: '45%'}}
            image={require('../assets/images/Bsprayers03.png')}>
            <Text style={{marginBottom: 10}}>
              Monterey LG6240 Take Down Garden Spray 16oz{' '}
            </Text>
            <View style={{alignItems: 'center'}}>
              <NumericInput
                onChange={value => console.log(value)}
                onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                totalWidth={150}
                totalHeight={40}
                iconSize={20}
                step={1}
                valueType="real"
                rounded
                textColor="#B0228C"
                iconStyle={{color: 'white'}}
                rightButtonBackgroundColor="#228B22"
                leftButtonBackgroundColor="#3CB371"
              />
            </View>
            <View style={{padding: 5}} />
            <Button
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
                backgroundColor: '#9ACD32',
              }}
              title="₹ 1600"
            />
          </Card>
          <View style={{padding: 2}} />
          <Divider style={{backgroundColor: 'black'}} />
          <Divider style={{backgroundColor: 'black'}} />
          <Card
            style={{backgroundColor: 'red', height: '45%'}}
            image={require('../assets/images/Bsprayers04.png')}>
            <Text style={{marginBottom: 10}}>
              Chapin 1002 48-Ounce Hand Sprayer for Multi-Purpose Use, 48-Ounce
              (1 Sprayer/Package)
            </Text>
            <View style={{alignItems: 'center'}}>
              <NumericInput
                onChange={value => console.log(value)}
                onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                totalWidth={150}
                totalHeight={40}
                iconSize={20}
                step={1}
                valueType="real"
                rounded
                textColor="#B0228C"
                iconStyle={{color: 'white'}}
                rightButtonBackgroundColor="#228B22"
                leftButtonBackgroundColor="#3CB371"
              />
            </View>
            <View style={{padding: 5}} />
            <Button
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
                backgroundColor: '#9ACD32',
              }}
              title="₹ 680"
            />
          </Card>
          <View style={{padding: 2}} />
          <Divider style={{backgroundColor: 'black'}} />
          <Divider style={{backgroundColor: 'black'}} />
          <Card
            style={{backgroundColor: 'red', height: '45%'}}
            image={require('../assets/images/Bsprayers05.png')}>
            <Text style={{marginBottom: 10}}>
              Solo 418 One-Hand Pressure Sprayer, 1-Liter, Ergonomic Grip for
              Gardening, Fertilizing, Cleaning & General Use Spraying
            </Text>
            <View style={{alignItems: 'center'}}>
              <NumericInput
                onChange={value => console.log(value)}
                onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                totalWidth={150}
                totalHeight={40}
                iconSize={20}
                step={1}
                valueType="real"
                rounded
                textColor="#B0228C"
                iconStyle={{color: 'white'}}
                rightButtonBackgroundColor="#228B22"
                leftButtonBackgroundColor="#3CB371"
              />
            </View>
            <View style={{padding: 5}} />
            <Button
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
                backgroundColor: '#9ACD32',
              }}
              title="₹999"
            />
          </Card>
          <View style={{padding: 2}} />
          <Divider style={{backgroundColor: 'black'}} />
          <Divider style={{backgroundColor: 'black'}} />
          <Card
            style={{backgroundColor: 'red', height: '45%'}}
            image={require('../assets/images/Bsprayers06.png')}>
            <Text style={{marginBottom: 10}}>
              Field King Professional 190328 No Leak Pump Backpack Sprayer for
              Killing Weeds in Lawns and Gardens
            </Text>
            <View style={{alignItems: 'center'}}>
              <NumericInput
                onChange={value => console.log(value)}
                onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                totalWidth={150}
                totalHeight={40}
                iconSize={20}
                step={1}
                valueType="real"
                rounded
                textColor="#B0228C"
                iconStyle={{color: 'white'}}
                rightButtonBackgroundColor="#228B22"
                leftButtonBackgroundColor="#3CB371"
              />
            </View>
            <View style={{padding: 5}} />
            <Button
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
                backgroundColor: '#9ACD32',
              }}
              title="₹ 2100"
            />
          </Card>
          <View style={{padding: 2}} />
          <Divider style={{backgroundColor: 'black'}} />
          <Divider style={{backgroundColor: 'black'}} />
          <Card
            style={{backgroundColor: 'red', height: '45%'}}
            image={require('../assets/images/Bsprayers07.png')}>
            <Text style={{marginBottom: 10}}>
              Brinly ST-25BH Tow Behind Lawn and Garden Sprayer, 25-Gallon
            </Text>
            <View style={{alignItems: 'center'}}>
              <NumericInput
                onChange={value => console.log(value)}
                onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                totalWidth={150}
                totalHeight={40}
                iconSize={20}
                step={1}
                valueType="real"
                rounded
                textColor="#B0228C"
                iconStyle={{color: 'white'}}
                rightButtonBackgroundColor="#228B22"
                leftButtonBackgroundColor="#3CB371"
              />
            </View>
            <View style={{padding: 5}} />
            <Button
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
                backgroundColor: '#9ACD32',
              }}
              title="₹1375"
            />
          </Card>
          <View style={{padding: 2}} />
          <Divider style={{backgroundColor: 'black'}} />
          <Divider style={{backgroundColor: 'black'}} />
          <Card
            style={{backgroundColor: 'red', height: '45%'}}
            image={require('../assets/images/Bsprayers08.png')}>
            <Text style={{marginBottom: 10}}>
              Master Manufacturing SSN-01-015A-MM 15 Gallon Spot Sprayer, White
            </Text>
            <View style={{alignItems: 'center'}}>
              <NumericInput
                onChange={value => console.log(value)}
                onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                totalWidth={150}
                totalHeight={40}
                iconSize={20}
                step={1}
                valueType="real"
                rounded
                textColor="#B0228C"
                iconStyle={{color: 'white'}}
                rightButtonBackgroundColor="#228B22"
                leftButtonBackgroundColor="#3CB371"
              />
            </View>
            <View style={{padding: 5}} />
            <Button
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
                backgroundColor: '#9ACD32',
              }}
              title="₹1890"
            />
          </Card>
          <View style={{padding: 2}} />
          <Divider style={{backgroundColor: 'black'}} />
          <Divider style={{backgroundColor: 'black'}} />
          <Card
            style={{backgroundColor: 'red', height: '45%'}}
            image={require('../assets/images/Bsprayers09.png')}>
            <Text style={{marginBottom: 10}}>
              Flo-Master by Hudson 5BPL Pumpless 1.3 Gallon Battery Powered
              Sprayer, White
            </Text>
            <View style={{alignItems: 'center'}}>
              <NumericInput
                onChange={value => console.log(value)}
                onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                totalWidth={150}
                totalHeight={40}
                iconSize={20}
                step={1}
                valueType="real"
                rounded
                textColor="#B0228C"
                iconStyle={{color: 'white'}}
                rightButtonBackgroundColor="#228B22"
                leftButtonBackgroundColor="#3CB371"
              />
            </View>
            <View style={{padding: 5}} />
            <Button
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
                backgroundColor: '#9ACD32',
              }}
              title="₹1500"
            />
          </Card>
          <View style={{padding: 2}} />
          <Divider style={{backgroundColor: 'black'}} />
          <Divider style={{backgroundColor: 'black'}} />
          <View style={{padding: 5}} />

          <View style={{marginLeft: 10, marginRight: 10}}>
            <Button
              buttonStyle={{
                backgroundColor: '#006400',
              }}
              title="Proceed to Pay"
              onPress={this.FunctionToPay}
            />
          </View>
          <View style={{padding: 5}} />
        </View>
      </ScrollView>
    );
  }
}

export default Sprayers;
