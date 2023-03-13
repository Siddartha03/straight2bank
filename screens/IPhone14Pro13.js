import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {Color, FontFamily} from '../GlobalStyles';

const IPhone14Pro13 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14Pro13}>
      <View style={styles.rectangleParent}>
        <LinearGradient
          style={styles.groupChild}
          locations={[0, 1]}
          colors={['#0071eb', '#151f47']}
          useAngle={true}
          angle={-88.2}
        />
        <View style={styles.groupItem} />
        <View style={styles.groupWrapper}>
          <View style={styles.homeParent}>
            <Text style={styles.home}>Home</Text>
            <Text style={[styles.accounts, styles.moreTypo]}>Accounts</Text>
            <Text style={[styles.transactio, styles.moreTypo]}>
              Transactio..
            </Text>
            <Text style={[styles.approvals, styles.moreTypo]}>Approvals</Text>
            <Text style={[styles.more, styles.moreTypo]}>More</Text>
            <Image
              style={[styles.homeIcon, styles.iconLayout1]}
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
                  styles.groupInner,
                  styles.groupLayout,
                  styles.groupBorder,
                ]}
              />
              <View
                style={[
                  styles.rectangleView,
                  styles.groupLayout,
                  styles.groupBorder,
                ]}
              />
              <View
                style={[
                  styles.groupChild1,
                  styles.groupLayout,
                  styles.groupBorder,
                ]}
              />
              <Image
                style={[styles.path10Icon, styles.groupLayout]}
                resizeMode="cover"
                source={require('../assets/path-10.png')}
              />
            </View>
            <Image
              style={styles.bankIcon}
              resizeMode="cover"
              source={require('../assets/bank.png')}
            />
            <Image
              style={styles.groupIcon}
              resizeMode="cover"
              source={require('../assets/group-15.png')}
            />
          </View>
        </View>
        <View style={styles.groupParent}>
          <View style={styles.digitalTokenParent}>
            <Text style={styles.digitalToken}>Digital Token</Text>
            <Text style={[styles.cargill, styles.cargillTypo]}>CARGILL</Text>
            <Text style={[styles.cargi02, styles.cargillTypo]}>CARGI02</Text>
            <Image
              style={[styles.userIcon, styles.userIconPosition]}
              resizeMode="cover"
              source={require('../assets/user.png')}
            />
            <Image
              style={[styles.buildingIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require('../assets/building.png')}
            />
            <View style={[styles.lineView, styles.userIconPosition]} />
          </View>
          <Pressable
            style={styles.iconIonicMdClose}
            onPress={() => navigation.navigate('IPhone14Pro7')}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require('../assets/icon-ionicmdclose.png')}
            />
          </Pressable>
        </View>
        <Text style={[styles.text, styles.orTypo]} />
        <View style={styles.orParent}>
          <Text style={[styles.or, styles.orTypo]}>OR</Text>
          <View style={[styles.groupChild2, styles.groupChildPosition]} />
          <View style={[styles.groupChild3, styles.groupChildPosition]} />
        </View>
        <Image
          style={[styles.iconIonicIosArrowForward, styles.iconLayout]}
          resizeMode="cover"
          source={require('../assets/icon-ioniciosarrowforward.png')}
        />
        <View
          style={[
            styles.s2bWebLoginOrApprovalsParent,
            styles.s2bParentShadowBox,
          ]}>
          <Text style={[styles.s2bWebLogin, styles.orTypo]}>
            S2B Web Login or Approvals
          </Text>
          <Text style={[styles.byQrCode, styles.byQrCodePosition]}>
            by QR code
          </Text>
          <View
            style={[
              styles.ellipseParent,
              styles.ellipseLayout,
              styles.ellipseLayout1,
            ]}>
            <Image
              style={[styles.ellipseIcon, styles.ellipseIconPosition]}
              resizeMode="cover"
              source={require('../assets/ellipse-3.png')}
            />
            <Image
              style={styles.image2Icon}
              resizeMode="cover"
              source={require('../assets/image-2.png')}
            />
          </View>
        </View>
        <TouchableOpacity
          style={[styles.s2bLoginParent, styles.s2bParentShadowBox]}
          onPress={() => navigation.navigate('IPhone14Pro14')}>
          <Text style={[styles.s2bLogin, styles.byOtpPosition]}>S2B Login</Text>
          <Text style={[styles.byOtp, styles.byOtpPosition]}>by OTP</Text>
          <Image
            style={[styles.iconIonicIosArrowForward1, styles.iconLayout]}
            resizeMode="cover"
            source={require('../assets/icon-ioniciosarrowforward.png')}
          />
          <ImageBackground
            style={[styles.ellipseWrapper, styles.ellipseLayout]}
            resizeMode="cover"
            source={require('../assets/group17.png')}>
            <Image
              style={[styles.groupChild4, styles.ellipseIconPosition]}
              resizeMode="cover"
              source={require('../assets/ellipse-3.png')}
            />
          </ImageBackground>
        </TouchableOpacity>
        <View
          style={[
            styles.transactionApprovalsParent,
            styles.s2bParentShadowBox,
          ]}>
          <Text style={[styles.transactionApprovals, styles.orTypo]}>
            Transaction Approvals
          </Text>
          <Text style={[styles.byChallengeResponse, styles.byOtp1Position]}>
            by challenge response code
          </Text>
          <Image
            style={[styles.iconIonicIosArrowForward2, styles.iconLayout]}
            resizeMode="cover"
            source={require('../assets/icon-ioniciosarrowforward.png')}
          />
          <ImageBackground
            style={[
              styles.ellipseContainer,
              styles.ellipseLayout,
              styles.ellipseLayout1,
            ]}
            resizeMode="cover"
            source={require('../assets/group19.png')}>
            <Image
              style={[styles.ellipseIcon, styles.ellipseIconPosition]}
              resizeMode="cover"
              source={require('../assets/ellipse-3.png')}
            />
          </ImageBackground>
        </View>
        <View style={[styles.adminApprovalsParent, styles.s2bParentShadowBox]}>
          <Text style={[styles.adminApprovals, styles.byQrCodePosition]}>
            Admin Approvals
          </Text>
          <Text style={[styles.byOtp1, styles.byOtp1Position]}>by OTP</Text>
          <Image
            style={[styles.iconIonicIosArrowForward3, styles.iconLayout]}
            resizeMode="cover"
            source={require('../assets/icon-ioniciosarrowforward.png')}
          />
          <Image
            style={[
              styles.groupChild6,
              styles.ellipseLayout,
              styles.ellipseLayout1,
            ]}
            resizeMode="cover"
            source={require('../assets/ellipse-3.png')}
          />
          <Image
            style={styles.image5Icon}
            resizeMode="cover"
            source={require('../assets/image-5.png')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  moreTypo: {
    color: Color.black,
    textAlign: 'left',
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: '600',
    fontSize: 12,
    bottom: 0,
    position: 'absolute',
  },
  iconLayout1: {
    height: 20,
    position: 'absolute',
  },
  groupLayout: {
    height: 7,
    width: 7,
    position: 'absolute',
  },
  groupBorder: {
    borderWidth: 1.2,
    borderColor: '#000',
    borderRadius: 2,
    width: 7,
    borderStyle: 'solid',
    backgroundColor: Color.white,
  },
  cargillTypo: {
    fontFamily: FontFamily.mulishBold,
    fontWeight: '700',
    fontSize: 17,
    color: Color.white,
    textAlign: 'left',
    bottom: 0,
    position: 'absolute',
  },
  userIconPosition: {
    bottom: 2,
    position: 'absolute',
  },
  orTypo: {
    textAlign: 'center',
    fontSize: 16,
    color: Color.black,
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: '600',
    position: 'absolute',
  },
  groupChildPosition: {
    opacity: 0.23,
    height: 2,
    width: 155,
    borderTopWidth: 1,
    borderColor: '#707070',
    marginTop: -1.5,
    top: '50%',
    borderStyle: 'solid',
    position: 'absolute',
  },
  iconLayout: {
    height: 14,
    width: 9,
    top: '50%',
    position: 'absolute',
  },
  s2bParentShadowBox: {
    height: 87,
    elevation: 7,
    shadowRadius: 7,
    borderRadius: 3,
    left: 18,
    right: 17,
    top: '50%',
    shadowOpacity: 1,
    shadowOffset: {
      width: 12,
      height: 2,
    },
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    position: 'absolute',
    backgroundColor: Color.white,
  },
  byQrCodePosition: {
    marginLeft: -89,
    textAlign: 'center',
    fontSize: 16,
    top: '50%',
    color: Color.black,
    left: '50%',
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: '600',
    position: 'absolute',
  },
  ellipseLayout: {
    height: 58,
    position: 'absolute',
  },
  ellipseLayout1: {
    width: 58,
    height: 58,
  },
  ellipseIconPosition: {
    maxHeight: '100%',
    overflow: 'hidden',
    maxWidth: '100%',
    bottom: 0,
    top: 0,
    position: 'absolute',
  },
  byOtpPosition: {
    marginLeft: -88,
    textAlign: 'center',
    fontSize: 16,
    top: '50%',
    color: Color.black,
    left: '50%',
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: '600',
    position: 'absolute',
  },
  byOtp1Position: {
    opacity: 0.45,
    marginLeft: -88,
    textAlign: 'center',
    fontSize: 16,
    top: '50%',
    color: Color.black,
    left: '50%',
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
  groupItem: {
    top: 170,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    backgroundColor: Color.white,
  },
  home: {
    color: Color.royalblue_100,
    textAlign: 'left',
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: '600',
    fontSize: 12,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  accounts: {
    marginLeft: -101.5,
    left: '50%',
  },
  transactio: {
    marginLeft: -24.5,
    left: '50%',
  },
  approvals: {
    marginLeft: 64.5,
    left: '50%',
  },
  more: {
    right: -1,
  },
  homeIcon: {
    left: 6,
    width: 20,
    top: 0,
  },
  iconIonicIosCheckmarkCircl: {
    marginLeft: 85.5,
    top: 1,
    width: 18,
    height: 18,
    left: '50%',
    position: 'absolute',
  },
  groupInner: {
    left: 0,
    top: 0,
  },
  rectangleView: {
    right: 0,
    top: 0,
  },
  groupChild1: {
    bottom: 0,
    left: 0,
  },
  path10Icon: {
    bottom: 0,
    right: 0,
  },
  rectangleGroup: {
    top: 2,
    right: 5,
    height: 16,
    width: 17,
    position: 'absolute',
  },
  bankIcon: {
    marginLeft: -85.5,
    width: 21,
    height: 21,
    left: '50%',
    top: 0,
    position: 'absolute',
  },
  groupIcon: {
    marginLeft: -1.5,
    width: 23,
    height: 23,
    left: '50%',
    top: 0,
    position: 'absolute',
  },
  homeParent: {
    top: 7,
    right: 20,
    height: 42,
    left: 24,
    position: 'absolute',
  },
  groupWrapper: {
    shadowRadius: 6,
    elevation: 6,
    height: 65,
    shadowOpacity: 1,
    shadowOffset: {
      width: 12,
      height: 2,
    },
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    bottom: 0.5,
    left: 0,
    right: 0,
    position: 'absolute',
    backgroundColor: Color.white,
  },
  digitalToken: {
    fontSize: 27,
    color: Color.white,
    textAlign: 'left',
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: '600',
    left: 0,
    top: 0,
    position: 'absolute',
  },
  cargill: {
    left: 24,
    fontFamily: FontFamily.mulishBold,
    fontWeight: '700',
    fontSize: 17,
  },
  cargi02: {
    right: -1,
  },
  userIcon: {
    height: 17,
    width: 17,
    left: 0,
  },
  buildingIcon: {
    marginLeft: 18.5,
    bottom: 1,
    width: 19,
    left: '50%',
  },
  lineView: {
    marginLeft: -8.23,
    borderColor: '#007afd',
    borderRightWidth: 2,
    width: 4,
    borderStyle: 'solid',
    bottom: 2,
    height: 20,
    left: '50%',
  },
  digitalTokenParent: {
    right: 101,
    bottom: 0,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  icon: {
    marginTop: -19.78,
    height: '100%',
    width: '100%',
  },
  iconIonicMdClose: {
    width: 15,
    height: 15,
    top: '50%',
    right: 0,
    position: 'absolute',
  },
  groupParent: {
    top: 51,
    left: 32,
    height: 77,
    right: 23,
    position: 'absolute',
  },
  text: {
    marginTop: 119,
    marginLeft: 39.5,
    top: '50%',
    left: '50%',
  },
  or: {
    marginLeft: -13.8,
    opacity: 0.44,
    left: '50%',
    top: 0,
  },
  groupChild2: {
    left: -1,
  },
  groupChild3: {
    right: 0,
  },
  orParent: {
    marginTop: -84,
    left: 18,
    right: 17,
    top: '50%',
    height: 20,
    position: 'absolute',
  },
  iconIonicIosArrowForward: {
    marginTop: 222.73,
    right: 44,
  },
  s2bWebLogin: {
    marginTop: -27.5,
    right: 52,
    top: '50%',
  },
  byQrCode: {
    marginTop: -7.5,
    opacity: 0.46,
  },
  ellipseIcon: {
    left: 0,
    right: 0,
  },
  image2Icon: {
    right: 6,
    bottom: 5,
    left: 7,
    overflow: 'hidden',
    maxWidth: '100%',
    height: 42,
    position: 'absolute',
  },
  ellipseParent: {
    marginTop: -28.5,
    left: 14,
    top: '50%',
  },
  s2bWebLoginOrApprovalsParent: {
    marginTop: -193,
  },
  s2bLogin: {
    marginTop: -23.5,
  },
  byOtp: {
    marginTop: 2.5,
    opacity: 0.43,
  },
  iconIonicIosArrowForward1: {
    marginTop: -9.13,
    right: 21,
  },
  groupChild4: {
    right: 2,
    left: 2,
  },
  ellipseWrapper: {
    bottom: 12,
    width: 62,
    left: 14,
  },
  s2bLoginParent: {
    marginTop: -35,
  },
  transactionApprovals: {
    marginTop: -25.5,
    marginLeft: -90,
    top: '50%',
    left: '50%',
  },
  byChallengeResponse: {
    marginTop: -1.5,
    opacity: 0.45,
  },
  iconIonicIosArrowForward2: {
    marginTop: -7.13,
    right: 23,
  },
  ellipseContainer: {
    top: 9,
    left: 16,
  },
  transactionApprovalsParent: {
    marginTop: 74,
  },
  adminApprovals: {
    marginTop: -23.5,
  },
  byOtp1: {
    marginTop: 0.5,
  },
  iconIonicIosArrowForward3: {
    marginTop: -5.77,
    right: 27,
  },
  groupChild6: {
    bottom: 13,
    left: 14,
  },
  image5Icon: {
    marginTop: -22.5,
    left: 30,
    width: 30,
    height: 43,
    top: '50%',
    position: 'absolute',
  },
  adminApprovalsParent: {
    marginTop: 185,
  },
  rectangleParent: {
    width: 393,
    height: 780,
  },
  iphone14Pro13: {
    flex: 1,
    width: '100%',
    backgroundColor: Color.white,
  },
});

export default IPhone14Pro13;
