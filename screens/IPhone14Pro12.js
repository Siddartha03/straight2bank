import * as React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {FontFamily, Color} from '../GlobalStyles';

const IPhone14Pro12 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14Pro12}>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <LinearGradient
          style={[styles.groupItem, styles.groupPosition]}
          locations={[0, 1]}
          colors={['#0561c6', '#293e8d']}
          useAngle={true}
          angle={269.68}
        />
        <View style={styles.groupParent}>
          <View
            style={[styles.straight2bankWrapper, styles.loginAgainPosition]}>
            <Text style={styles.straight2bank}>Straight2Bank</Text>
          </View>
          <Text
            style={[
              styles.thankYouFor,
              styles.thankYouForTypo,
            ]}>{`Thank you for banking with
Standard Chartered`}</Text>
          <Pressable
            style={[styles.groupInner, styles.groupPosition]}
            onPress={() => navigation.navigate('IPhone14Pro7')}
          />
          <Text style={[styles.loginAgain, styles.loginAgainPosition]}>
            Login Again
          </Text>
          <Text style={[styles.lastLogin09, styles.thankYouForTypo]}>
            Last Login: 09 March 2023, 07:08:07 PM (GMT + 5:30)
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
  },
  loginAgainPosition: {
    left: '50%',
    position: 'absolute',
  },
  thankYouForTypo: {
    fontFamily: FontFamily.mulishSemibold,
    color: Color.white,
    fontWeight: '600',
    top: '50%',
    position: 'absolute',
  },
  groupChild: {
    borderStyle: 'solid',
    borderColor: '#707070',
    borderWidth: 1,
    top: 0,
    backgroundColor: Color.white,
  },
  groupItem: {
    backgroundColor: 'transparent',
    top: 0,
  },
  straight2bank: {
    fontSize: 31,
    fontFamily: FontFamily.muliSemibold,
    textAlign: 'left',
    color: Color.white,
    fontWeight: '600',
    left: 0,
    top: 0,
    position: 'absolute',
  },
  straight2bankWrapper: {
    marginLeft: -105.5,
    width: 211,
    height: 39,
    top: 0,
  },
  thankYouFor: {
    marginTop: -30,
    left: 42,
    fontSize: 18,
    lineHeight: 27,
    textAlign: 'center',
  },
  groupInner: {
    borderRadius: 5,
    shadowColor: 'rgba(41, 34, 34, 0.16)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    height: 52,
    backgroundColor: Color.white,
  },
  loginAgain: {
    marginLeft: -42.5,
    bottom: 16,
    fontSize: 15,
    fontWeight: '700',
    fontFamily: FontFamily.mulishBold,
    color: Color.darkslateblue,
    textAlign: 'left',
  },
  lastLogin09: {
    marginTop: 53,
    left: 8,
    fontSize: 12,
    textAlign: 'left',
  },
  groupParent: {
    marginTop: -188,
    right: 39,
    left: 39,
    height: 262,
    top: '50%',
    position: 'absolute',
  },
  rectangleParent: {
    width: 393,
    height: 726,
  },
  iphone14Pro12: {
    flex: 1,
    width: '100%',
    backgroundColor: Color.white,
  },
});

export default IPhone14Pro12;
