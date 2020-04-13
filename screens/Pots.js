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

class Pots extends Component {
  FunctionToPay = () => {
    this.props.navigation.navigate('Payment');
  };
  render() {
    return (
      <ScrollView>
        <View>
          <Card
            style={{backgroundColor: 'red', height: '45%'}}
            image={require('../assets/images/Bpots01.png')}>
            <Text style={{marginBottom: 10}}>
              Whiskey Barrel Planter, Distressed Oak, 9" (Durable high density
              resin construction)
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
            image={require('../assets/images/Bpots02.png')}>
            <Text style={{marginBottom: 10}}>
              Full Depth Round Cylinder Pot, White, 8-Inch
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
            image={require('../assets/images/Bpots03.png')}>
            <Text style={{marginBottom: 10}}>
              Honeysuckle Planter, Patio Pot, 15" Tequila Sunrise
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
            image={require('../assets/images/Bpots04.png')}>
            <Text style={{marginBottom: 10}}>
              KINGLAKE 8 Pcs 4" Plastic Plant Flower Seedlings Nursery Pot/Pots
              Planter Colorful Flower Plant Container Seed Starting Pots with
              Pallet,8 Colors
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
            image={require('../assets/images/Bpots05.png')}>
            <Text style={{marginBottom: 10}}>
              KINGLAKE 100 Pcs 4" Plastic Plants Nursery Pot/Pots Seedlings
              Flower Plant Container Seed Starting Pots
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
            image={require('../assets/images/Bpots06.png')}>
            <Text style={{marginBottom: 10}}>
              Rivet Mid-Century Ceramic Planter with Iron Stand, 6.8"H x 14.5"W,
              Pale Green
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
            image={require('../assets/images/Bpots07.png')}>
            <Text style={{marginBottom: 10}}>
              DecoPots - 3 Pack - 11.8 Inch - Self Watering Planter - Modern
              Flower Pot with Water Level Indicator for All House Plants,
              Flowers, Herbs - Height 9 inches (Diameter 11.8", Red -
              Pearl/White)
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
            image={require('../assets/images/Bpots08.png')}>
            <Text style={{marginBottom: 10}}>
              Viagrow ½ Gal Plastic Nursery Pots ( .62 gal / 2.5qts / 2.37
              Liters) 100 pack
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
            image={require('../assets/images/Bpots09.png')}>
            <Text style={{marginBottom: 10}}>
              100 Pack of Square 3.25" x 3.25" x 3.75" Nursery Pots, Extra Deep
              and Sturdy Resuable Design Perfect for Greenhouse or Home Use
              (100)
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

export default Pots;
