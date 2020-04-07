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

class Explore extends Component {
  FunctionToPay = () => {
    this.props.navigation.navigate('Payment');
  };
  render() {
    return (
      <ScrollView>
        <View>
          <Card
            style={{backgroundColor: 'red', height: '45%'}}
            image={require('../assets/images/Bplant03.png')}>
            <Text style={{marginBottom: 10}}>
              Costa Farms Clean Air-O2 For You Live House Plant Collection
              4-Pack, Assorted Foliage, 4-Inch, Green
            </Text>
            <View style={{alignItems: 'center'}}>
              <NumericInput
                onChange={(value) => console.log(value)}
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
            image={require('../assets/images/Bplant02.png')}>
            <Text style={{marginBottom: 10}}>
              Succulent Plants (5 Pack), Fully Rooted in Planter Pots with Soil
              - Real Live Potted Succulents / Unique Indoor Cactus Decor by
              Plants for Pets
            </Text>
            <View style={{alignItems: 'center'}}>
              <NumericInput
                onChange={(value) => console.log(value)}
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
            image={require('../assets/images/Bplant04.png')}>
            <Text style={{marginBottom: 10}}>
              BEGONDIS Set of 3 Artificial Succulents with Led Lights in Wooden
              Box, Artificial Plants Plastic Fake Topiary for Home/Office
              Decorations, Table Centerpiece
            </Text>
            <View style={{alignItems: 'center'}}>
              <NumericInput
                onChange={(value) => console.log(value)}
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
            image={require('../assets/images/Bplant05.png')}>
            <Text style={{marginBottom: 10}}>
              The Bloom Times 2 Pcs Fake Plants for Bathroom/Home Office Decor,
              Small Artificial Faux Greenery for House Decorations (Potted
              Plants)
            </Text>
            <View style={{alignItems: 'center'}}>
              <NumericInput
                onChange={(value) => console.log(value)}
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
            image={require('../assets/images/Bplant06.png')}>
            <Text style={{marginBottom: 10}}>
              Artificial Boxwood & Grass Plants - Gorgeous Fake Plants in Pots
              for Home Decor - Indoor Faux Plants Bring Your Living and
              Workspace to Life Without Any of The Maintenance -3 Plants Per
              Unit
            </Text>
            <View style={{alignItems: 'center'}}>
              <NumericInput
                onChange={(value) => console.log(value)}
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
            image={require('../assets/images/Bplant07.png')}>
            <Text style={{marginBottom: 10}}>
              AOMGD 3 Pack Macrame Plant Hanger and 3 PCS Hooks Indoor Outdoor
              Hanging Plant Holder Hanging Planter Stand Flower Pots for
              Decorations - Cotton Rope, 4 Legs, 3 Sizes
            </Text>
            <View style={{alignItems: 'center'}}>
              <NumericInput
                onChange={(value) => console.log(value)}
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
            image={require('../assets/images/Bplant08.png')}>
            <Text style={{marginBottom: 10}}>
              Supla Artificial Pre-Made Succulent Wood Planter Arrangement 10
              Pcs Assorted Fake Succulent Plants in Rectangular Wooden Planter
              Box Faux Potted Succulents Centerpiece Succulent Garden
            </Text>
            <View style={{alignItems: 'center'}}>
              <NumericInput
                onChange={(value) => console.log(value)}
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
            image={require('../assets/images/Bplant09.png')}>
            <Text style={{marginBottom: 10}}>
              3 Artificial Succulent Plants with Pots with White Planter Box –
              Home Sweet Home & Live Laugh Love | Realistic Greenery Mini Faux
              Plant Arrangements For Home Decor Office Table Bathroom Kitchen
              Dorm
            </Text>
            <View style={{alignItems: 'center'}}>
              <NumericInput
                onChange={(value) => console.log(value)}
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
            image={require('../assets/images/Bplant10.png')}>
            <Text style={{marginBottom: 10}}>
              HC STAR Potted Artificial Pant Fake Green Grass with Pot
              Decorative Lifelike Set of 6 (High-Foot, Green-4 and Purple-2)
            </Text>
            <View style={{alignItems: 'center'}}>
              <NumericInput
                onChange={(value) => console.log(value)}
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

export default Explore;

// const styles = StyleSheet.create({
//   header: {
//     paddingHorizontal: theme.sizes.base * 2,
//     paddingBottom: theme.sizes.base * 2,
//   },
//   search: {
//     height: theme.sizes.base * 2,
//     width: width - theme.sizes.base * 2,
//   },
//   searchInput: {
//     fontSize: theme.sizes.caption,
//     height: theme.sizes.base * 2,
//     backgroundColor: 'rgba(142, 142, 147, 0.06)',
//     borderColor: 'rgba(142, 142, 147, 0.06)',
//     paddingLeft: theme.sizes.base / 1.333,
//     paddingRight: theme.sizes.base * 1.5,
//   },
//   searchRight: {
//     top: 0,
//     marginVertical: 0,
//     backgroundColor: 'transparent',
//   },
//   searchIcon: {
//     position: 'absolute',
//     right: theme.sizes.base / 1.333,
//     top: theme.sizes.base / 1.6,
//   },
//   explore: {
//     marginHorizontal: theme.sizes.padding * 1.25,
//   },
//   image: {
//     minHeight: 100,
//     maxHeight: 130,
//     maxWidth: width - theme.sizes.padding * 2.5,
//     marginBottom: theme.sizes.base,
//     borderRadius: 4,
//   },
//   mainImage: {
//     minWidth: width - theme.sizes.padding * 2.5,
//     minHeight: width - theme.sizes.padding * 2.5,
//   },
//   footer: {
//     position: 'absolute',
//     bottom: 0,
//     right: 0,
//     left: 0,
//     overflow: 'visible',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: height * 0.1,
//     width,
//     paddingBottom: theme.sizes.base * 4,
//   },
// });
