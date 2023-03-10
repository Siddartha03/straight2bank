import * as React from 'react';
import {StyleSheet, View, Pressable, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {Color, FontFamily} from '../GlobalStyles';

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.welcome}>
      <View style={styles.rectangleParent}>
        <View
          style={[
            styles.groupChild,
            styles.groupPosition,
            styles.groupPosition1,
          ]}
        />
        <LinearGradient
          style={[
            styles.groupItem,
            styles.groupPosition,
            styles.groupPosition1,
          ]}
          locations={[0, 1]}
          colors={['#0561c6', '#293e8d']}
          useAngle={true}
          angle={269.68}
        />
        <Pressable
          style={styles.straight2bankParent}
          onPress={() => navigation.navigate('Splash1')}>
          <Pressable
            style={styles.straight2bank}
            onPress={() => navigation.navigate('Splash1')}>
            <Text style={[styles.straight2bank1, styles.straight2bank1Typo]}>
              Straight2Bank
            </Text>
          </Pressable>
          <Text
            style={[
              styles.makingComplexWork,
              styles.straight2bank1Typo,
              styles.groupPosition,
            ]}>
            Making complex work feel simple
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    left: 0,
    bottom: 0,
    position: 'absolute',
  },
  groupPosition1: {
    right: 0,
    bottom: 0,
    top: 0,
  },
  straight2bank1Typo: {
    textAlign: 'left',
    color: Color.white,
    fontFamily: FontFamily.muliSemibold,
    fontWeight: '600',
  },
  groupChild: {
    borderStyle: 'solid',
    borderColor: '#707070',
    borderWidth: 1,
    backgroundColor: '#0561c6',
  },
  groupItem: {
    backgroundColor: 'transparent',
  },
  straight2bank1: {
    fontSize: 18,
  },
  straight2bank: {
    left: 30,
    top: 0,
    position: 'absolute',
  },
  makingComplexWork: {
    fontSize: 13,
  },
  straight2bankParent: {
    marginTop: -47,
    marginLeft: -100.5,
    top: '50%',
    left: '50%',
    width: 201,
    height: 53,
    position: 'absolute',
  },
  rectangleParent: {
    width: '100%',
    height: '100%',
  },
  welcome: {
    flex: 1,
    width: '100%',
    backgroundColor: Color.white,
  },
});

export default Welcome;
