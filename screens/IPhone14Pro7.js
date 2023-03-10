import * as React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Color, FontFamily} from '../GlobalStyles';

const IPhone14Pro7 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14Pro7}>
      <ImageBackground
        style={styles.groupParent}
        resizeMode="cover"
        source={require('../assets/mesmerizingshotfamoushistorictajmahalagraindia.png')}>
        <View
          style={[styles.welcomeBackAzarAliWrapper, styles.wrapperPosition]}>
          <Text
            style={[
              styles.welcomeBackAzar,
              styles.howCanWeFlexBox,
              styles.straight2bankTypo,
            ]}>
            Welcome back, Azar Ali
          </Text>
        </View>
        <View
          style={[
            styles.cargilIndiaPrviateLimitedWrapper,
            styles.wrapperPosition,
          ]}>
          <Text style={[styles.cargilIndiaPrviate, styles.changeLoginIdTypo]}>
            CARGIL INDIA PRVIATE LIMITED
          </Text>
        </View>
        <View style={styles.straight2bankParent}>
          <Text
            style={[
              styles.straight2bank,
              styles.howCanWeFlexBox,
              styles.straight2bankTypo,
            ]}>
            Straight2Bank
          </Text>
          <Text style={styles.makingComplexWork}>
            Making complex work feel simple
          </Text>
        </View>
        <View style={styles.carlParent}>
          <Text style={[styles.carl, styles.carlTypo]}>CAR****L</Text>
          <Text style={[styles.car02, styles.carlTypo]}>CAR****02</Text>
          <Text style={[styles.userId, styles.userIdTypo]}>User ID</Text>
          <Text style={[styles.groupId, styles.userIdTypo]}>Group ID</Text>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
        </View>
        <View style={styles.changeLoginIdParent}>
          <Text style={[styles.changeLoginId, styles.changeLoginIdTypo]}>
            Change Login ID
          </Text>
          <Image
            style={styles.groupItem}
            resizeMode="cover"
            source={require('../assets/line-2.png')}
          />
        </View>
        <TouchableOpacity
          style={[styles.imagesParent, styles.parentLayout]}
          onPress={() => navigation.navigate('IPhone14Pro9')}>
          <Image
            style={[styles.imagesIcon, styles.imagesIconPosition]}
            resizeMode="cover"
            source={require('../assets/images.png')}
          />
          <Text style={[styles.login, styles.loginTypo]}>Login</Text>
        </TouchableOpacity>
        <View style={[styles.accountsParent, styles.parentLayout]}>
          <Text style={[styles.accounts, styles.loginTypo]}>Accounts</Text>
          <Image
            style={[styles.groupInner, styles.imagesIconPosition]}
            resizeMode="cover"
            source={require('../assets/group-3.png')}
          />
        </View>
        <TouchableOpacity
          style={[styles.digitalTokenParent, styles.parentLayout]}
          onPress={() => navigation.navigate('IPhone14Pro13')}>
          <Text style={[styles.digitalToken, styles.loginTypo]}>
            Digital Token
          </Text>
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require('../assets/group-5.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.howCanWeHelpYouParent}
          onPress={() => navigation.navigate('Back')}>
          <Text style={[styles.howCanWe, styles.howCanWeFlexBox]}>
            How can we help you?
          </Text>
          <Pressable
            style={[styles.linePressable, styles.groupChildPosition]}
            // onPress={() => navigation.navigate("IPhone14Pro8")}
          />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperPosition: {
    left: 34,
    top: '50%',
    position: 'absolute',
  },
  howCanWeFlexBox: {
    textAlign: 'left',
    position: 'absolute',
  },
  straight2bankTypo: {
    fontWeight: '600',
    top: 0,
    textAlign: 'left',
    color: Color.white,
  },
  changeLoginIdTypo: {
    fontFamily: FontFamily.mulishBold,
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'left',
    left: 0,
    top: 0,
    position: 'absolute',
  },
  carlTypo: {
    fontFamily: FontFamily.segoeUIBold,
    marginTop: -8.25,
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'left',
    color: Color.white,
    top: '50%',
    position: 'absolute',
  },
  userIdTypo: {
    opacity: 0.86,
    fontSize: 14,
    fontFamily: FontFamily.segoeUIRegular,
    textAlign: 'left',
    color: Color.white,
    top: 0,
    position: 'absolute',
  },
  groupChildPosition: {
    borderStyle: 'solid',
    left: '50%',
    position: 'absolute',
  },
  parentLayout: {
    height: 92,
    width: 100,
    backgroundColor: Color.dodgerblue,
    borderRadius: 10,
    marginTop: 164.54,
    top: '50%',
    position: 'absolute',
  },
  imagesIconPosition: {
    width: 25,
    left: '50%',
    top: '50%',
    position: 'absolute',
  },
  loginTypo: {
    fontSize: 12,
    marginTop: 13,
    fontFamily: FontFamily.mulishBold,
    fontWeight: '700',
    textAlign: 'left',
    color: Color.white,
    top: '50%',
    position: 'absolute',
  },
  welcomeBackAzar: {
    fontSize: 21,
    fontFamily: FontFamily.mulishSemibold,
    color: Color.white,
    left: 0,
  },
  welcomeBackAzarAliWrapper: {
    marginTop: -134.46,
    width: 234,
    height: 26,
  },
  cargilIndiaPrviate: {
    color: Color.white,
  },
  cargilIndiaPrviateLimitedWrapper: {
    marginTop: -80.46,
    width: 249,
    height: 20,
  },
  straight2bank: {
    marginLeft: -75,
    fontSize: 24,
    fontFamily: FontFamily.muliSemibold,
    left: '50%',
    bottom: 40,
    color: Color.white,
  },
  makingComplexWork: {
    fontSize: 18,
    fontFamily: FontFamily.segoeUIRegular,
    bottom: 0,
    marginTop: 40,
    textAlign: 'left',
    color: Color.white,
    left: 0,
    position: 'absolute',
  },
  straight2bankParent: {
    marginLeft: -139.5,
    top: 79,
    width: 266,
    height: 63,
    left: '50%',
    position: 'absolute',
  },
  carl: {
    left: 1,
  },
  car02: {
    right: -1,
  },
  userId: {
    left: 0,
  },
  groupId: {
    right: 22,
  },
  groupChild: {
    marginLeft: -14,
    top: 3,
    borderColor: '#fff',
    borderRightWidth: 2,
    width: 4,
    bottom: 0,
  },
  carlParent: {
    marginTop: -42.46,
    left: 33,
    width: 217,
    height: 61,
    top: '50%',
    position: 'absolute',
  },
  changeLoginId: {
    color: '#73b6ff',
  },
  groupItem: {
    right: 1,
    bottom: -1,
    maxWidth: '100%',
    overflow: 'hidden',
    height: 3,
    left: 0,
    position: 'absolute',
  },
  changeLoginIdParent: {
    marginTop: 38.54,
    right: 25,
    left: 35,
    height: 59,
    top: '50%',
    position: 'absolute',
  },
  imagesIcon: {
    marginTop: -26,
    marginLeft: -15,
    height: 35,
  },
  login: {
    marginLeft: -18,
    left: '50%',
  },
  imagesParent: {
    left: 31,
  },
  accounts: {
    marginLeft: -24,
    left: '50%',
  },
  groupInner: {
    marginTop: -25.3,
    marginLeft: -11.27,
    height: 22,
  },
  accountsParent: {
    right: 30,
  },
  digitalToken: {
    left: 14,
  },
  groupIcon: {
    marginTop: -22.4,
    marginLeft: -9,
    width: 18,
    height: 24,
    left: '50%',
    top: '50%',
    position: 'absolute',
  },
  digitalTokenParent: {
    marginLeft: -49.5,
    left: '50%',
  },
  howCanWe: {
    marginTop: -12.5,
    marginLeft: -106,
    fontSize: 20,
    fontWeight: '500',
    fontFamily: FontFamily.mulishMedium,
    color: Color.black,
    left: '50%',
    top: '50%',
  },
  linePressable: {
    marginLeft: -39.5,
    top: 9,
    borderColor: '#707070',
    borderTopWidth: 4,
    width: 72,
    height: 8,
    opacity: 0.36,
  },
  howCanWeHelpYouParent: {
    right: 0,
    left: 3,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 71,
    bottom: 0,
    position: 'absolute',
    backgroundColor: Color.white,
  },
  groupParent: {
    width: 399,
    height: 740,
  },
  iphone14Pro7: {
    flex: 1,
    width: '100%',
    backgroundColor: Color.white,
  },
});

export default IPhone14Pro7;
