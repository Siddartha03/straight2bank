import * as React from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {FontFamily, Color} from '../GlobalStyles';
import {useNavigation} from '@react-navigation/native';

const Splash2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.splash2}>
      <View style={styles.groupParent}>
        <TouchableOpacity
          style={styles.nextWrapper}
          onPress={() => navigation.navigate('Splash3')}>
          <Text style={styles.next}>Next</Text>
        </TouchableOpacity>
        <Text
          onPress={() => navigation.navigate('IPhone14Pro9')}
          style={[styles.skip, styles.skipTypo]}>
          Skip
        </Text>
        <View style={styles.rectangleParent}>
          <View style={styles.groupChild} />
          <View style={[styles.groupItem, styles.groupPosition]} />
          <View style={styles.groupInner} />
          <View style={[styles.rectangleView, styles.groupPosition]} />
          <View style={[styles.groupChild1, styles.groupPosition]} />
        </View>
        <View style={styles.beInTheKnowParent}>
          <Text style={[styles.beInThe, styles.skipTypo]}>Be in the know</Text>
          <Text
            style={[
              styles.accessYourAccount,
              styles.straight2bankClr,
            ]}>{`Access your account balances and 
transactions on the go.`}</Text>
        </View>
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require('../assets/group-22.png')}
        />
        <View style={styles.path1Parent}>
          <Image
            style={[styles.path1Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require('../assets/path-1.png')}
          />
          <Image
            style={[styles.path2Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require('../assets/path-2.png')}
          />
          <Text style={[styles.straight2bank, styles.straight2bankClr]}>
            Straight2Bank
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  skipTypo: {
    fontFamily: FontFamily.muliBold,
    fontWeight: '700',
    textAlign: 'left',
    position: 'absolute',
  },
  groupPosition: {
    width: 15,
    backgroundColor: Color.lightsteelblue,
    top: 1,
    borderRadius: 5,
    bottom: 0,
    position: 'absolute',
  },
  straight2bankClr: {
    color: Color.dimgray_200,
    textAlign: 'left',
    position: 'absolute',
  },
  iconLayout: {
    height: 22,
    width: 31,
    bottom: 4,
    position: 'absolute',
  },
  next: {
    marginTop: -10.5,
    marginLeft: -14,
    fontSize: 13,
    color: Color.white,
    textAlign: 'left',
    fontFamily: FontFamily.muliSemibold,
    fontWeight: '600',
    left: '50%',
    top: '50%',
    position: 'absolute',
  },
  nextWrapper: {
    right: 12,
    borderRadius: 4,
    width: 244,
    height: 49,
    backgroundColor: Color.royalblue_200,
    bottom: 0,
    position: 'absolute',
  },
  skip: {
    bottom: 15,
    left: 24,
    color: Color.royalblue_200,
    fontSize: 15,
  },
  groupChild: {
    marginLeft: -40,
    width: 29,
    borderRadius: 5,
    top: 0,
    left: '50%',
    backgroundColor: Color.royalblue_200,
    bottom: 0,
    position: 'absolute',
  },
  groupItem: {
    left: 0,
  },
  groupInner: {
    marginLeft: -1,
    width: 16,
    backgroundColor: Color.lightsteelblue,
    top: 1,
    borderRadius: 5,
    left: '50%',
    bottom: 0,
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
    bottom: 82,
    width: 130,
    height: 8,
    left: '50%',
    position: 'absolute',
  },
  beInThe: {
    marginLeft: -75,
    fontSize: 21,
    color: Color.black,
    top: 0,
    left: '50%',
  },
  accessYourAccount: {
    fontFamily: FontFamily.aileronRegular,
    opacity: 0.81,
    left: 0,
    fontSize: 15,
    color: Color.dimgray_200,
    bottom: 0,
  },
  beInTheKnowParent: {
    marginTop: 125.5,
    marginLeft: -118,
    width: 236,
    height: 73,
    left: '50%',
    top: '50%',
    position: 'absolute',
  },
  groupIcon: {
    top: 52,
    maxWidth: '100%',
    overflow: 'hidden',
    height: 362,
    right: 0,
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
    top: 0,
    fontFamily: FontFamily.muliSemibold,
    fontWeight: '600',
    color: Color.dimgray_200,
    left: '50%',
  },
  path1Parent: {
    right: 20,
    left: 20,
    height: 36,
    top: 0,
    position: 'absolute',
  },
  groupParent: {
    width: 352,
    height: 643,
  },
  splash2: {
    backgroundColor: Color.white,
    flex: 1,
    width: '100%',
    paddingLeft: 21,
    paddingTop: 61,
    paddingRight: 20,
    alignItems: 'center',
  },
});

export default Splash2;
