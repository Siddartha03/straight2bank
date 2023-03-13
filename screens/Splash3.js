import * as React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Color, FontFamily} from '../GlobalStyles';
import {useNavigation} from '@react-navigation/native';

const Splash3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.splash3}>
      <View style={styles.groupParent}>
        <View style={styles.path1Parent}>
          <Image
            style={[styles.path1Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require('../assets/path-12.png')}
          />
          <Image
            style={[styles.path2Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require('../assets/path-21.png')}
          />
          <Text
            style={[
              styles.straight2bank,
              styles.straight2bankFlexBox,
              styles.straight2bankTypo,
            ]}>
            Straight2Bank
          </Text>
        </View>
        <Text
          onPress={() => navigation.navigate('IPhone14Pro9')}
          style={[styles.skip, styles.skipTypo]}>
          Skip
        </Text>
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <View style={styles.groupItem} />
          <View style={styles.groupInner} />
          <View style={[styles.rectangleView, styles.groupChild1Position]} />
          <View style={[styles.groupChild1, styles.groupChild1Position]} />
        </View>
        <TouchableOpacity
          style={[styles.nextWrapper, styles.groupChildPosition]}
          onPress={() => navigation.navigate('Splash4')}>
          <Text style={[styles.next, styles.enjoyPosition]}>Next</Text>
        </TouchableOpacity>
        <View style={styles.groupWrapper}>
          <Image
            style={[styles.groupIcon, styles.groupIconPosition]}
            resizeMode="cover"
            source={require('../assets/group-23.png')}
          />
        </View>
        <View
          style={[styles.enjoyConvenienceSecurelyParent, styles.enjoyPosition]}>
          <Text
            style={[
              styles.enjoyConvenienceSecurely,
              styles.enjoyPosition,
              styles.skipTypo,
            ]}>
            Enjoy convenience securely
          </Text>
          <Text
            style={[
              styles.manageTransactionsSecurely,
              styles.groupIconPosition,
              styles.straight2bankFlexBox,
              styles.straight2bankTypo,
            ]}>
            Manage transactions securely and easily with
          </Text>
          <Text style={[styles.ifApplicableFor, styles.straight2bankFlexBox]}>
            *If applicable for your market
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 22,
    width: 31,
    bottom: 4,
    position: 'absolute',
  },
  straight2bankFlexBox: {
    textAlign: 'left',
    color: Color.dimgray_200,
  },
  straight2bankTypo: {
    fontFamily: FontFamily.muliSemibold,
    fontWeight: '600',
    color: Color.dimgray_200,
  },
  skipTypo: {
    fontFamily: FontFamily.muliBold,
    fontWeight: '700',
    textAlign: 'left',
  },
  groupChildPosition: {
    backgroundColor: Color.royalblue_200,
    bottom: 0,
    position: 'absolute',
  },
  groupChild1Position: {
    bottom: 1,
    width: 15,
    backgroundColor: Color.lightsteelblue,
    borderRadius: 5,
    top: 0,
    position: 'absolute',
  },
  enjoyPosition: {
    top: '50%',
    position: 'absolute',
  },
  groupIconPosition: {
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  path1Icon: {
    left: 0,
  },
  path2Icon: {
    right: 0,
  },
  straight2bank: {
    marginLeft: -98.87,
    fontSize: 29,
    left: '50%',
    top: 0,
    position: 'absolute',
  },
  path1Parent: {
    right: 20,
    left: 20,
    height: 36,
    top: 0,
    position: 'absolute',
  },
  skip: {
    bottom: 15,
    left: 24,
    color: Color.royalblue_200,
    fontSize: 15,
    position: 'absolute',
  },
  groupChild: {
    width: 29,
    borderRadius: 5,
    backgroundColor: Color.royalblue_200,
    marginLeft: -14,
    left: '50%',
    top: 0,
  },
  groupItem: {
    width: 15,
    backgroundColor: Color.lightsteelblue,
    top: 1,
    borderRadius: 5,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  groupInner: {
    marginLeft: -40,
    width: 16,
    backgroundColor: Color.lightsteelblue,
    top: 1,
    borderRadius: 5,
    bottom: 0,
    left: '50%',
    position: 'absolute',
  },
  rectangleView: {
    marginLeft: 25,
    left: '50%',
  },
  groupChild1: {
    right: 0,
  },
  rectangleParent: {
    marginLeft: -58,
    bottom: 81,
    width: 130,
    height: 8,
    left: '50%',
    position: 'absolute',
  },
  next: {
    marginTop: -10.5,
    fontSize: 13,
    color: Color.white,
    marginLeft: -14,
    top: '50%',
    textAlign: 'left',
    fontFamily: FontFamily.muliSemibold,
    fontWeight: '600',
    left: '50%',
  },
  nextWrapper: {
    right: 12,
    borderRadius: 4,
    width: 244,
    height: 49,
  },
  groupIcon: {
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
    right: 0,
    top: 0,
  },
  groupWrapper: {
    top: 52,
    height: 337,
    right: 0,
    left: 0,
    position: 'absolute',
  },
  enjoyConvenienceSecurely: {
    marginTop: -13.5,
    left: 26,
    fontSize: 21,
    color: Color.black,
  },
  manageTransactionsSecurely: {
    fontSize: 15,
  },
  ifApplicableFor: {
    marginLeft: -94.5,
    fontFamily: FontFamily.aileronRegular,
    opacity: 0.81,
    fontSize: 15,
    left: '50%',
    top: 0,
    position: 'absolute',
  },
  enjoyConvenienceSecurelyParent: {
    marginTop: 103.5,
    right: 16,
    left: 15,
    height: 103,
  },
  groupParent: {
    width: 352,
    height: 643,
  },
  splash3: {
    backgroundColor: Color.white,
    flex: 1,
    width: '100%',
    paddingLeft: 21,
    paddingTop: 61,
    paddingRight: 20,
    alignItems: 'center',
  },
});

export default Splash3;
