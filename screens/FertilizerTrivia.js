import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  AsyncStorage,
  View,
  Button,
  TextInput,
  Text,
  Linking,
  Icon,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Image, Header} from 'react-native-elements';
import {Container, Left, Right, Body, Title} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';

class FertilizerTrivia extends Component {
  FunctionToConfirm = () => {
    this.props.navigation.navigate('Browse');
  };
  render() {
    return (
      <ScrollView>
        <View>
          <View style={{padding: 10}} />
          <Text
            h1
            style={{textAlign: 'center', fontWeight: 'bold', fontSize: 18}}>
            Interesting Facts About Fertilizers
          </Text>
          <View style={{padding: 5}} />

          <Image
            style={{
              height: 290,
              width: 400,
              padding: 10,
            }}
            source={require('../assets/images/Bfertilizers01.png')}
          />
          <View style={{padding: 5}} />
          <Text h3 style={{padding: 7}}>
            There's a lot more to our greener counterparts than we realize;
            secrets are lurking everywhere in our gardens.
          </Text>

          <Text h3 style={{padding: 7}}>
            The world's tallest-growing tree is the coast redwood (Sequoia
            sempervirens), which grows along the Pacific Coast of the United
            States, mainly in California. Interestingly enough, it's not the
            world's oldest-growing tree; that award goes to a bristlecone pine
            (Pinus aristata).
          </Text>
          <View style={{padding: 2}} />

          <Text h3 style={{padding: 7}}>
            Tomato juice is the official state beverage of Ohio, honoring the
            part A. W. Livingston of Reynoldsburg, Ohio, played in popularizing
            the tomato in the late 1800s.
          </Text>
          <View style={{padding: 2}} />

          <Text h3 style={{padding: 7}}>
            Archaeologists have uncovered evidence that grapes were grown to
            make wine about 8,000 years ago in Mesopotamia (today's Iraq),
            although the ancient Egyptians were the first to record the process
            of making wine about 5,000 years ago.
          </Text>
          <View style={{padding: 2}} />

          <Text h3 style={{padding: 7}}>
            During the 1600s, tulips were so valuable in Holland that their
            bulbs were worth more than gold. The craze was called tulip mania,
            or tulipomania, and caused the crash of the Dutch economy. Tulips
            can continue to grow as much as an inch per day after being cut.
          </Text>
          <Image
            style={{
              height: 290,
              width: 400,
              padding: 10,
            }}
            source={require('../assets/images/Bfertilizers02.png')}
          />
          <View style={{padding: 2}} />

          <Text h3 style={{padding: 7}}>
            Vanilla flavoring comes from the pod of an orchid, Vanilla
            planifolia. Though the pods are called vanilla beans, they're more
            closely related to corn than green beans.
          </Text>
          <View style={{padding: 2}} />

          <Text h3 style={{padding: 7}}>
            The word pineapple comes from European explorers who thought the
            fruit combined the look of a pinecone with flesh like that of an
            apple. Pineapples are the only edible members of the bromeliad
            family.
          </Text>
          <View style={{padding: 2}} />
          <Image
            style={{
              height: 290,
              width: 400,
              padding: 10,
            }}
            source={require('../assets/images/Bfertilizers05.png')}
          />

          <Text h3 style={{padding: 7}}>
            From a botanical standpoint, avocados and pumpkins are fruits, not
            vegetables, because they bear the plants' seeds. Rhubarb, on the
            other hand, is a vegetable.
          </Text>
          <View style={{padding: 2}} />

          <Text h3 style={{padding: 7}}>
            Poinsettias, natives of Mexico, were brought to the United States in
            1825 by the first U.S. minister to Mexico, Joel Poinsett, for whom
            the plant is named.
          </Text>
          <View style={{padding: 2}} />

          <Text h3 style={{padding: 7}}>
            Small pockets of air inside cranberries cause them to bounce and
            float in water.
          </Text>
          <Image
            style={{
              height: 290,
              width: 400,
              padding: 10,
            }}
            source={require('../assets/images/Bfertilizers06.png')}
          />

          <View style={{padding: 2}} />

          <Text h3 style={{padding: 7}}>
            The flower of the titan arum (Amorphophallus titanium) is the
            largest unbranched flower in the world and can reach up to 15 feet
            tall. The bloom produces a smell like that of rotting meat, giving
            it the common name of corpse flower. A similar smell comes from
            Rafflesia, another plant that hails from the rainforests of Sumatra.
            Both plants developed their scent so they could be pollinated by
            flies; they don't compete with other blooms for butterflies and
            hummingbirds.
          </Text>

          <Image
            style={{
              height: 290,
              width: 400,
              padding: 10,
            }}
            source={require('../assets/images/Bfertilizers09.png')}
          />

          <View style={{padding: 2}} />

          <View style={{padding: 5}} />
          <View style={{padding: 20}}>
            <Button title="Back " onPress={this.FunctionToConfirm} />
          </View>
          <View style={{padding: 10}} />
        </View>
      </ScrollView>
    );
  }
}

export default FertilizerTrivia;
