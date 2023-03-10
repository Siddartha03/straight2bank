import * as React from 'react';
import {StyleSheet, View, Text, Image, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {FontFamily, Color} from '../GlobalStyles';

const More = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.more}>
      <View style={styles.groupParent}>
        <View style={styles.rectangleParent}>
          <LinearGradient
            style={styles.groupChild}
            locations={[0, 1]}
            colors={['#0071eb', '#151f47']}
            useAngle={true}
            angle={-88.2}
          />
          <View style={[styles.azarAliWrapper, styles.wrapperLayout]}>
            <Text style={[styles.azarAli, styles.more1Typo, styles.logoutTypo]}>
              Azar Ali
            </Text>
          </View>
          <View style={[styles.groupItem, styles.groupItemPosition]} />
          <View style={[styles.cargilParent, styles.parentLayout]}>
            <Text style={[styles.cargil, styles.cargilTypo]}>CARGIL</Text>
            <Text style={[styles.cargi02, styles.cargilTypo]}>CARGI02</Text>
            <Image
              style={[styles.userIcon, styles.userIconLayout]}
              resizeMode="cover"
              source={require('../assets/user1.png')}
            />
            <Image
              style={[styles.buildingIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require('../assets/building1.png')}
            />
            <View style={styles.groupInner} />
          </View>
          <View
            style={[
              styles.rectangleView,
              styles.rectangleViewShadowBox,
              styles.groupItemPosition,
            ]}>
            <Text style={[styles.home, styles.homeTypo, styles.homeTypo1]}>
              Home
            </Text>
            <Text style={[styles.accounts, styles.homeTypo, styles.homeTypo1]}>
              Accounts
            </Text>
            <Text
              style={[styles.transactio, styles.homeTypo, styles.homeTypo1]}>
              Transactio..
            </Text>
            <Text style={[styles.approvals, styles.homeTypo, styles.homeTypo1]}>
              Approvals
            </Text>
            <Text style={[styles.more1, styles.homeTypo1, styles.more1Typo]}>
              More
            </Text>
            <Pressable
              style={[styles.home1, styles.parentLayout]}
              onPress={() => navigation.navigate('Home')}>
              <Image
                style={styles.iconLayout1}
                resizeMode="cover"
                source={require('../assets/home.png')}
              />
            </Pressable>
            <Pressable
              style={[styles.iconIonicIosCheckmarkCircl, styles.iconPosition]}
              onPress={() => navigation.navigate('Approvals')}>
              <Image
                style={[styles.icon1, styles.iconLayout1]}
                resizeMode="cover"
                source={require('../assets/icon-ionicioscheckmarkcircleoutline.png')}
              />
            </Pressable>
            <View style={[styles.rectangleGroup, styles.userIconLayout]}>
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
              <View
                style={[
                  styles.groupChild3,
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
            <Pressable
              style={styles.bank}
              onPress={() => navigation.navigate('Accounts')}>
              <Image
                style={[styles.icon2, styles.iconLayout1]}
                resizeMode="cover"
                source={require('../assets/bank.png')}
              />
            </Pressable>
            <Pressable
              style={[styles.wrapper, styles.wrapperLayout]}
              onPress={() => navigation.navigate('Transactions')}>
              <Image
                style={[styles.icon3, styles.iconLayout1]}
                resizeMode="cover"
                source={require('../assets/group-15.png')}
              />
            </Pressable>
          </View>
          <Pressable
            style={styles.logoutParent}
            onPress={() => navigation.navigate('Home')}>
            <Text style={[styles.logout, styles.more1Typo, styles.logoutTypo]}>
              Logout
            </Text>
            <Image
              style={styles.closeIcon}
              resizeMode="cover"
              source={require('../assets/close.png')}
            />
          </Pressable>
          <View style={[styles.manageWrapper, styles.wrapperLayout]}>
            <Text style={[styles.manage, styles.homeTypo]}>Manage</Text>
          </View>
        </View>
        <View
          style={[
            styles.groupContainer,
            styles.lineViewBorder,
            styles.rectangleViewShadowBox,
          ]}>
          <View style={[styles.manageIdsParent, styles.parentPosition]}>
            <Text style={[styles.manageIds, styles.manageIdsTypo]}>
              Manage ID's
            </Text>
            <Image
              style={[styles.iconIonicIosArrowForward, styles.iconLayout]}
              resizeMode="cover"
              source={require('../assets/icon-ioniciosarrowforward.png')}
            />
            <View style={[styles.lineView, styles.lineViewBorder]} />
          </View>
          <View style={[styles.changePinParent, styles.parentPosition]}>
            <Text style={[styles.manageIds, styles.manageIdsTypo]}>
              Change PIN
            </Text>
            <Image
              style={[styles.iconIonicIosArrowForward, styles.iconLayout]}
              resizeMode="cover"
              source={require('../assets/icon-ioniciosarrowforward.png')}
            />
            <View style={[styles.lineView, styles.lineViewBorder]} />
          </View>
          <View
            style={[
              styles.authenticationPreferencesParent,
              styles.parentLayout,
            ]}>
            <Text
              style={[styles.authenticationPreferences, styles.manageIdsTypo]}>
              Authentication Preferences
            </Text>
            <Image
              style={[styles.iconIonicIosArrowForward2, styles.iconLayout]}
              resizeMode="cover"
              source={require('../assets/icon-ioniciosarrowforward.png')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    height: 23,
    position: 'absolute',
  },
  more1Typo: {
    textAlign: 'left',
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: '600',
    position: 'absolute',
  },
  logoutTypo: {
    color: Color.white,
    textAlign: 'left',
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: '600',
    fontSize: 18,
  },
  groupItemPosition: {
    backgroundColor: Color.white,
    left: 0,
    bottom: 50,
    right: 0,
    position: 'absolute',
  },
  parentLayout: {
    height: 20,
    position: 'absolute',
  },
  cargilTypo: {
    fontFamily: FontFamily.mulishBold,
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'left',
    color: Color.white,
    top: 0,
    position: 'absolute',
  },
  userIconLayout: {
    height: 16,
    position: 'absolute',
  },
  iconPosition: {
    width: 18,
    left: '50%',
    position: 'absolute',
  },
  rectangleViewShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 12,
      height: 2,
    },
  },
  homeTypo: {
    color: Color.black,
    textAlign: 'left',
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: '600',
    position: 'absolute',
  },
  homeTypo1: {
    fontSize: 12,
    bottom: 16,
  },
  iconLayout1: {
    height: '100%',
    width: '100%',
  },
  groupChildLayout: {
    height: 7,
    width: 7,
    position: 'absolute',
  },
  groupChildBorder: {
    borderWidth: 1.2,
    borderColor: '#0056f6',
    borderRadius: 2,
    width: 7,
    borderStyle: 'solid',
    backgroundColor: Color.white,
  },
  lineViewBorder: {
    borderColor: '#707070',
    borderStyle: 'solid',
    position: 'absolute',
  },
  parentPosition: {
    height: 39,
    left: 0,
    right: 0,
    position: 'absolute',
  },
  manageIdsTypo: {
    fontFamily: FontFamily.mulishMedium,
    fontWeight: '500',
    color: Color.black,
    fontSize: 16,
    textAlign: 'left',
    top: 0,
    position: 'absolute',
  },
  iconLayout: {
    height: 13,
    width: 8,
    top: 2,
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
  azarAli: {
    left: 0,
    top: 0,
  },
  azarAliWrapper: {
    top: 63,
    left: 41,
    width: 68,
  },
  groupItem: {
    top: 169,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
  },
  cargil: {
    left: 22,
  },
  cargi02: {
    right: -1,
  },
  userIcon: {
    top: 1,
    width: 16,
    left: 0,
  },
  buildingIcon: {
    marginLeft: 17,
    bottom: 2,
    maxHeight: '100%',
    top: 0,
  },
  groupInner: {
    marginLeft: 1.5,
    top: -1,
    bottom: 3,
    borderColor: '#007afd',
    borderRightWidth: 2,
    width: 4,
    borderStyle: 'solid',
    left: '50%',
    position: 'absolute',
  },
  cargilParent: {
    top: 106,
    left: 36,
    width: 220,
  },
  rectangleView: {
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowRadius: 6,
    elevation: 6,
    height: 65,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
  },
  home: {
    left: 24,
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
  more1: {
    right: 19,
    color: Color.mediumslateblue,
    textAlign: 'left',
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: '600',
    bottom: 16,
  },
  home1: {
    left: 30,
    bottom: 38,
    width: 20,
  },
  icon1: {
    marginLeft: 87.5,
  },
  iconIonicIosCheckmarkCircl: {
    bottom: 39,
    height: 18,
  },
  groupChild1: {
    left: 0,
    top: 0,
  },
  groupChild2: {
    right: 0,
    top: 0,
  },
  groupChild3: {
    left: 0,
    bottom: 0,
  },
  path10Icon: {
    bottom: 0,
    right: 0,
  },
  rectangleGroup: {
    right: 25,
    bottom: 40,
    width: 17,
  },
  icon2: {
    marginLeft: -83.5,
  },
  bank: {
    bottom: 37,
    width: 21,
    height: 21,
    left: '50%',
    position: 'absolute',
  },
  icon3: {
    marginLeft: 0.5,
  },
  wrapper: {
    bottom: 35,
    width: 23,
    left: '50%',
  },
  logout: {
    marginTop: -11.5,
    marginLeft: -11.5,
    top: '50%',
    left: '50%',
  },
  closeIcon: {
    marginLeft: -46.5,
    top: 7,
    bottom: 6,
    width: 28,
    maxHeight: '100%',
    left: '50%',
    position: 'absolute',
  },
  logoutParent: {
    top: 47,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: Color.cornflowerblue_100,
    width: 139,
    height: 41,
    right: 0,
    position: 'absolute',
  },
  manage: {
    fontSize: 18,
    color: Color.black,
    left: 0,
    top: 0,
  },
  manageWrapper: {
    marginTop: -204,
    left: 27,
    width: 69,
    top: '50%',
  },
  rectangleParent: {
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: 'absolute',
  },
  manageIds: {
    left: 24,
  },
  iconIonicIosArrowForward: {
    right: 23,
  },
  lineView: {
    bottom: -1,
    left: -1,
    borderTopWidth: 1,
    height: 2,
    opacity: 0.27,
    right: 0,
  },
  manageIdsParent: {
    top: 23,
  },
  changePinParent: {
    marginTop: -12.25,
    top: '50%',
  },
  authenticationPreferences: {
    left: 0,
  },
  iconIonicIosArrowForward2: {
    right: 0,
  },
  authenticationPreferencesParent: {
    bottom: 28,
    right: 23,
    left: 23,
  },
  groupContainer: {
    marginTop: -170,
    right: 24,
    borderRadius: 9,
    shadowColor: '#969696',
    shadowRadius: 4,
    elevation: 4,
    borderWidth: 1,
    height: 184,
    left: 23,
    top: '50%',
  },
  groupParent: {
    width: 393,
    height: 780,
  },
  more: {
    flex: 1,
    width: '100%',
    backgroundColor: Color.white,
  },
});

export default More;
