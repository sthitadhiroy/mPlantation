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

class Flowers extends Component {
  FunctionToPay = () => {
    this.props.navigation.navigate('Payment');
  };
  render() {
    return (
      <ScrollView>
        <View>
          <Card
            style={{backgroundColor: 'red', height: '45%'}}
            image={require('../assets/images/Bflowers01.png')}>
            <Text style={{marginBottom: 10}}>
              Beautiful Magnolia Tree, Healthy Live Plant (Saucer Magnolia
              Soulangeana)
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
            image={require('../assets/images/Bflowers02.png')}>
            <Text style={{marginBottom: 10}}>
              250 Heavenly Blue Morning Glory Blooming Vine Seeds - Wonderful
              Climbing Heirloom Vine - Morning Glory Non GMO and Neonicotinoid
              Seed
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
            image={require('../assets/images/Bflowers03.png')}>
            <Text style={{marginBottom: 10}}>Pink Bleeding Hearts</Text>
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
            image={require('../assets/images/Bflowers04.png')}>
            <Text style={{marginBottom: 10}}>
              1800Flowers Bloom Dish Garden with Tropical Foliage and Plants
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
            image={require('../assets/images/Bflowers05.png')}>
            <Text style={{marginBottom: 10}}>
              Costa Farms Live Anthurium Indoor Plant in Premium Ceramic, 12
              Inches Tall, Great Gift
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
            image={require('../assets/images/Bflowers06.png')}>
            <Text style={{marginBottom: 10}}>
              Black Eyed Susan - Rudbeckia Goldstrum 10 Bare Root Mature Healthy
              Live Perennial Plants Enjoy Beautiful Golden Flowers All Summer
              Long
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
            image={require('../assets/images/Bflowers07.png')}>
            <Text style={{marginBottom: 10}}>
              Oxalis Triangularis 'Purple Shamrocks' - 15 Fresh, Ready to Plant,
              U.S. Grown Bulbs
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
            image={require('../assets/images/Bflowers08.png')}>
            <Text style={{marginBottom: 10}}>
              Van Zyverden Kniphofia Red Hot Poker Flower Bulbs
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
            image={require('../assets/images/Bflowers09.png')}>
            <Text style={{marginBottom: 10}}>
              Black Eyed Susan Seeds - Rudbeckia Hirta - Attracts Butterflies
              10,000 Seeds
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

export default Flowers;
