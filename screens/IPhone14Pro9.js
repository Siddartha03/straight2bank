import * as React from 'react';
import {useState} from 'react';
import {
  Image,
  StyleSheet,
  Pressable,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Input as RNKTextInput} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';
import {FontFamily, Color} from '../GlobalStyles';

const IPhone14Pro9 = () => {
  const [rectangleTextInput, setRectangleTextInput] = useState();
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14Pro9}>
      <View style={styles.iphone14Pro9Inner}>
        <View style={styles.iconIonicIosArrowForwardParent}>
          <Pressable
            style={[styles.iconIonicIosArrowForward, styles.forgotPinPosition]}
            onPress={() => navigation.navigate('IPhone14Pro7')}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require('../assets/icon-ioniciosarrowforward2.png')}
            />
          </Pressable>
          <Text
            style={[
              styles.loginViaPin,
              styles.loginTypo,
              styles.loginViaPinPosition,
            ]}>
            Login via PIN
          </Text>
          <TouchableOpacity
            style={[styles.loginWrapper, styles.loginWrapperPosition]}
            onPress={() => navigation.navigate('Home')}>
            <Text
              style={[styles.login, styles.loginPosition, styles.loginTypo]}>
              Login
            </Text>
          </TouchableOpacity>
          <View style={[styles.rectangleParent, styles.loginWrapperPosition]}>
            {/* <RNKTextInput
              style={[styles.groupChild, styles.groupChildBorder1]}
              value={rectangleTextInput}
              onChangeText={setRectangleTextInput}
            /> */}
            <TextInput
              style={[styles.groupChild, styles.groupChildBorder1]}
              maxLength={1}
              keyboardType="default"
            />
            <TextInput
              style={[styles.groupItem, styles.groupChildBorder1]}
              maxLength={1}
              keyboardType="default"
            />
            <TextInput
              style={[styles.groupInner, styles.groupChildBorder]}
              keyboardType="default"
              maxLength={1}
            />
            <TextInput
              style={[styles.rectangleTextinput, styles.groupChildBorder]}
              maxLength={1}
              keyboardType="default"
            />
            <TextInput
              style={[styles.groupChild1, styles.groupChildBorder1]}
              keyboardType="default"
              maxLength={1}
            />
            <TextInput
              style={[styles.groupChild2, styles.groupChildBorder1]}
              maxLength={1}
              keyboardType="default"
            />
            <TextInput
              style={[styles.groupChild3, styles.groupChildBorder]}
              maxLength={1}
              keyboardType="default"
            />
            <TextInput
              style={[styles.groupChild4, styles.groupChildBorder]}
              maxLength={1}
              keyboardType="default"
            />
          </View>
          <View style={styles.forgotPinParent}>
            <Text
              style={[
                styles.forgotPin,
                styles.loginTypo,
                styles.forgotPinPosition,
              ]}>
              Forgot PIN?
            </Text>
            <Image
              style={[styles.iconMetroQuestion, styles.loginViaPinPosition]}
              resizeMode="cover"
              source={require('../assets/icon-metroquestion.png')}
            />
          </View>
          <View style={styles.image1Wrapper}>
            <Image
              style={[styles.image1Icon, styles.loginPosition]}
              resizeMode="cover"
              source={require('../assets/image-1.png')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  forgotPinPosition: {
    top: 0,
    position: 'absolute',
  },
  loginTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: '600',
    fontSize: 20,
  },
  loginViaPinPosition: {
    position: 'absolute',
    left: 0,
  },
  loginWrapperPosition: {
    height: 52,
    left: 1,
    position: 'absolute',
  },
  loginPosition: {
    marginTop: -12,
    left: '50%',
    top: '50%',
    position: 'absolute',
  },
  groupChildBorder1: {
    opacity: 0.57,
    width: 33,
    borderWidth: 1,
    borderColor: '#707070',
    borderStyle: 'solid',
    borderRadius: 3,
    bottom: 0,
    top: 0,
    position: 'absolute',
    textAlign: 'center',
  },
  groupChildBorder: {
    width: 34,
    opacity: 0.57,
    borderWidth: 1,
    borderColor: '#707070',
    borderStyle: 'solid',
    borderRadius: 3,
    bottom: 0,
    top: 0,
    position: 'absolute',
    textAlign: 'center',
  },
  icon: {
    height: '100%',
    width: '100%',
  },
  iconIonicIosArrowForward: {
    left: 4,
    width: 11,
    height: 18,
  },
  loginViaPin: {
    marginTop: -96.1,
    color: Color.black,
    top: '50%',
    left: 0,
  },
  login: {
    marginLeft: -25.5,
    color: Color.white,
    left: '50%',
  },
  loginWrapper: {
    backgroundColor: Color.royalblue_100,
    width: 261,
    borderRadius: 3,
    height: 52,
    bottom: 0,
  },
  groupChild: {
    left: 0,
    backgroundColor: Color.white,
  },
  groupItem: {
    marginLeft: 13.5,
    left: '50%',
  },
  groupInner: {
    left: 41,
  },
  rectangleTextinput: {
    marginLeft: 54.5,
    left: '50%',
  },
  groupChild1: {
    marginLeft: -88.5,
    left: '50%',
  },
  groupChild2: {
    right: 42,
  },
  groupChild3: {
    marginLeft: -47.5,
    left: '50%',
  },
  groupChild4: {
    right: 0,
  },
  rectangleParent: {
    marginTop: -40.1,
    top: '50%',
    right: 0,
  },
  forgotPin: {
    right: -1,
    color: '#0561c6',
  },
  iconMetroQuestion: {
    top: 3,
    bottom: 3,
    maxHeight: '100%',
    width: 19,
    left: 0,
  },
  forgotPinParent: {
    marginTop: 60.9,
    width: 137,
    height: 25,
    left: 1,
    top: '50%',
    position: 'absolute',
  },
  image1Icon: {
    marginLeft: -12.03,
    width: 24,
    height: 26,
    left: '50%',
  },
  image1Wrapper: {
    right: 4,
    width: 59,
    borderWidth: 1,
    borderColor: '#707070',
    borderStyle: 'solid',
    height: 52,
    borderRadius: 3,
    bottom: 0,
    position: 'absolute',
  },
  iconIonicIosArrowForwardParent: {
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: 'absolute',
  },
  iphone14Pro9Inner: {
    width: 346,
    height: 432,
  },
  iphone14Pro9: {
    flex: 1,
    paddingLeft: 28,
    paddingTop: 31,
    paddingRight: 19,
    width: '100%',
    backgroundColor: Color.white,
  },
});

export default IPhone14Pro9;
