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

class Seeds extends Component {
  FunctionToPay = () => {
    this.props.navigation.navigate('Payment');
  };
  render() {
    return (
      <ScrollView>
        <View>
          <Card
            style={{backgroundColor: 'red', height: '45%'}}
            image={require('../assets/images/Bseeds.png')}>
            <Text style={{marginBottom: 10}}>
              Set of 25 Flower Seed Packets Including 10 Or More Varieties
              Forget Me Nots, Pinks, Marigolds, Zinnia, Wildflower, Poppy,
              Snapdragon and More
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
            image={require('../assets/images/Bseeds01.png')}>
            <Text style={{marginBottom: 10}}>
              16,500 Non GMO Heirloom Vegetable Seeds Survival Garden 40 Variety
              Pack
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
            image={require('../assets/images/Bseeds02.png')}>
            <Text style={{marginBottom: 10}}>
              Bonsai Tree Seeds Kit - 8 Popular Varieties of Non GMO Mini Bonsai
              Trees, Bamboo Plant Markers, Wood Gift Box - Bonzie Tree Seed
              Starter Kits, Grow Bonzai Indoor Garden, Gardening Gifts Idea
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
            image={require('../assets/images/Bseeds03.png')}>
            <Text style={{marginBottom: 10}}>
              Bonsai Tree Seed Starter Kit - Mini Bonsai Plant Growing Kit, 4
              Types of Seeds, Potting Soil, Pots, Pruning Shears Scissor Tool,
              Plant Markers, Wood Gift Box, Indoor Garden Gardening Gifts Idea
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
            image={require('../assets/images/Bseeds04.png')}>
            <Text style={{marginBottom: 10}}>
              10,000 Seed Lot - 30 Vegetable & Fruit Variety Pack - Survival
              Non-gmo Varieties
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
            image={require('../assets/images/Bseeds05.png')}>
            <Text style={{marginBottom: 10}}>From Seed to Plant</Text>
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
            image={require('../assets/images/Bseeds06.png')}>
            <Text style={{marginBottom: 10}}>
              Miracle-Gro Expand 'n Gro Concentrated Planting Mix 0.33 cu ft
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
            image={require('../assets/images/Bseeds07.png')}>
            <Text style={{marginBottom: 10}}>
              WOHOUS 15 Varieties Organic Seeds 3700+ Seeds for Planting Indoor
              Outdoor, 100% Non-GMO Sweet Pepper Seeds & Hot Pepper Seeds-Red
              Onion Seeds & Green Onion Seeds, Celery Seeds, Cilantro Seeds
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
            image={require('../assets/images/Bseeds08.png')}>
            <Text style={{marginBottom: 10}}>
              13,300+ Vegetable Seeds NON-GMO 33 Pack Variety
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

export default Seeds;
