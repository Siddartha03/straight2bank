import * as React from 'react';
import {StyleSheet, View, Text, Image, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {Color, FontFamily} from '../GlobalStyles';

const IPhone14Pro14 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14Pro14}>
      <View style={styles.rectangleParent}>
        <LinearGradient
          style={styles.groupChild}
          locations={[0, 1]}
          colors={['#0071eb', '#151f47']}
          useAngle={true}
          angle={-88.2}
        />
        <Text style={styles.s2bLogin}>S2B Login</Text>
        <View style={styles.groupItem} />
        <Pressable
          style={styles.iconIonicMdClose}
          onPress={() => navigation.navigate('IPhone14Pro7')}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require('../assets/icon-ionicmdclose.png')}
          />
        </Pressable>
        <Text style={[styles.text, styles.textTypo]} />
        <Image
          style={styles.path11Icon}
          resizeMode="cover"
          source={require('../assets/path-11.png')}
        />
        <Image
          style={styles.groupInner}
          resizeMode="cover"
          source={require('../assets/group-19.png')}
        />
        <View style={styles.groupParent}>
          <View style={styles.homeParent}>
            <Text style={[styles.home, styles.homeTypo]}>Home</Text>
            <Text style={[styles.accounts, styles.homeTypo, styles.moreClr]}>
              Accounts
            </Text>
            <Text style={[styles.transactio, styles.homeTypo, styles.moreClr]}>
              Transactio..
            </Text>
            <Text style={[styles.approvals, styles.homeTypo, styles.moreClr]}>
              Approvals
            </Text>
            <Text style={[styles.more, styles.homeTypo, styles.moreClr]}>
              More
            </Text>
            <Image
              style={[styles.homeIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require('../assets/home.png')}
            />
            <Image
              style={styles.iconIonicIosCheckmarkCircl}
              resizeMode="cover"
              source={require('../assets/icon-ionicioscheckmarkcircleoutline.png')}
            />
            <View style={styles.rectangleGroup}>
              <View
                style={[
                  styles.rectangleView,
                  styles.groupChildLayout,
                  styles.groupChildBorder,
                ]}
              />
              <View
                style={[
                  styles.groupChild1,
                  styles.groupChildLayout,
                  styles.groupChildBorder,
                ]}
              />
              <View
                style={[
                  styles.groupChild2,
                  styles.groupChildLayout,
                  styles.groupChildBorder,
                ]}
              />
              <Image
                style={[styles.path10Icon, styles.groupChildLayout]}
                resizeMode="cover"
                source={require('../assets/path-10.png')}
              />
            </View>
            <Image
              style={[styles.bankIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require('../assets/bank.png')}
            />
            <Image
              style={[styles.groupIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require('../assets/group-15.png')}
            />
          </View>
          <View style={styles.groupContainer}>
            <View style={styles.wrapper}>
              <Text style={[styles.text1, styles.text1Typo]}>46589545</Text>
            </View>
            <Text style={[styles.oneTimePassword, styles.textTypo]}>
              One Time Password
            </Text>
          </View>
          <View style={styles.enterThisOtpToLoginToStrParent}>
            <Text
              style={[
                styles.enterThisOtp,
                styles.text1Typo,
              ]}>{`Enter this OTP to Login to
Straight2Bank Web`}</Text>
            <Image
              style={styles.image6Icon}
              resizeMode="cover"
              source={require('../assets/image-6.png')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: 'center',
    color: Color.black,
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: '600',
    left: '50%',
    position: 'absolute',
  },
  homeTypo: {
    fontSize: 12,
    marginTop: 1.5,
    top: '50%',
    textAlign: 'left',
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: '600',
    position: 'absolute',
  },
  moreClr: {
    color: Color.black,
    marginTop: 1.5,
  },
  iconPosition: {
    top: 7,
    position: 'absolute',
  },
  groupChildLayout: {
    height: 7,
    width: 7,
    position: 'absolute',
  },
  groupChildBorder: {
    borderWidth: 1.2,
    borderColor: '#000',
    borderStyle: 'solid',
    borderRadius: 2,
    width: 7,
    backgroundColor: Color.white,
  },
  text1Typo: {
    fontSize: 23,
    textAlign: 'center',
    color: Color.black,
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: '600',
    position: 'absolute',
  },
  groupChild: {
    bottom: 42,
    backgroundColor: 'transparent',
    left: 0,
    right: 0,
    top: 0,
    position: 'absolute',
  },
  s2bLogin: {
    marginLeft: -53.5,
    top: 83,
    fontSize: 27,
    color: Color.white,
    textAlign: 'left',
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: '600',
    left: '50%',
    position: 'absolute',
  },
  groupItem: {
    top: 170,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    backgroundColor: Color.white,
  },
  icon: {
    height: '100%',
    width: '100%',
  },
  iconIonicMdClose: {
    top: 102,
    right: 27,
    width: 15,
    height: 15,
    position: 'absolute',
  },
  text: {
    marginTop: 119,
    marginLeft: 39.5,
    fontSize: 16,
    top: '50%',
  },
  path11Icon: {
    marginTop: -75,
    marginLeft: -25,
    width: 0,
    height: 0,
    opacity: 0.23,
    top: '50%',
    left: '50%',
    position: 'absolute',
  },
  groupInner: {
    marginTop: -167,
    marginLeft: -44.5,
    width: 89,
    height: 89,
    top: '50%',
    left: '50%',
    position: 'absolute',
  },
  home: {
    left: 24,
    color: Color.royalblue_100,
  },
  accounts: {
    marginLeft: -99.5,
    left: '50%',
  },
  transactio: {
    marginLeft: -22.5,
    left: '50%',
  },
  approvals: {
    marginLeft: 66.5,
    left: '50%',
  },
  more: {
    right: 19,
  },
  homeIcon: {
    left: 30,
    width: 20,
    height: 20,
  },
  iconIonicIosCheckmarkCircl: {
    marginLeft: 87.5,
    top: 8,
    width: 18,
    height: 18,
    left: '50%',
    position: 'absolute',
  },
  rectangleView: {
    left: 0,
    top: 0,
  },
  groupChild1: {
    right: 0,
    top: 0,
  },
  groupChild2: {
    bottom: 0,
    left: 0,
  },
  path10Icon: {
    bottom: 0,
    right: 0,
  },
  rectangleGroup: {
    top: 9,
    right: 25,
    width: 17,
    height: 16,
    position: 'absolute',
  },
  bankIcon: {
    marginLeft: -83.5,
    width: 21,
    height: 21,
    left: '50%',
  },
  groupIcon: {
    marginLeft: 0.5,
    width: 23,
    height: 23,
    left: '50%',
  },
  homeParent: {
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 12,
      height: 2,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    height: 65,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    backgroundColor: Color.white,
  },
  text1: {
    marginTop: -14,
    left: 39,
    letterSpacing: 20,
    top: '50%',
  },
  wrapper: {
    backgroundColor: Color.royalblue_200,
    height: 58,
    left: 0,
    right: 0,
    top: 0,
    position: 'absolute',
  },
  oneTimePassword: {
    marginLeft: -67,
    fontSize: 14,
    letterSpacing: 0,
    bottom: 0,
  },
  groupContainer: {
    marginTop: -37.5,
    right: 33,
    left: 34,
    height: 91,
    top: '50%',
    position: 'absolute',
  },
  enterThisOtp: {
    lineHeight: 33,
    bottom: 0,
    left: 0,
  },
  image6Icon: {
    marginLeft: -48,
    width: 95,
    height: 73,
    left: '50%',
    top: 0,
    position: 'absolute',
  },
  enterThisOtpToLoginToStrParent: {
    right: 58,
    width: 276,
    height: 171,
    top: 0,
    position: 'absolute',
  },
  groupParent: {
    top: 231,
    bottom: 50,
    left: 0,
    right: 0,
    position: 'absolute',
  },
  rectangleParent: {
    width: 393,
    height: 780,
  },
  iphone14Pro14: {
    flex: 1,
    width: '100%',
    backgroundColor: Color.white,
  },
});

export default IPhone14Pro14;
