import * as React from 'react';
import {Text, StyleSheet, View, Image, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {Color, FontFamily} from '../GlobalStyles';

const Approvals = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.approvals}>
      <View style={styles.approvalsInner}>
        <View style={styles.groupParent}>
          <LinearGradient
            style={styles.groupWrapper}
            locations={[0, 1]}
            colors={['#0071eb', '#151f47']}
            useAngle={true}
            angle={-88.2}>
            <View style={styles.pendingApprovalsParent}>
              <Text style={styles.pendingApprovals}>Pending Approvals</Text>
              <View style={[styles.payeeParent, styles.groupFramePosition]}>
                <Text style={styles.payee}>Payee</Text>
                <View style={styles.groupChild} />
                <Text style={styles.text}>1</Text>
              </View>
            </View>
          </LinearGradient>
          <View style={styles.groupContainer}>
            <View style={[styles.groupFrame, styles.groupFramePosition]}>
              <View
                style={[styles.accountsParent, styles.groupChild1ShadowBox]}>
                <Text
                  style={[
                    styles.accounts,
                    styles.mittuTypo,
                    styles.accountsPosition,
                  ]}>
                  Accounts
                </Text>
                <Text
                  style={[
                    styles.accounts,
                    styles.mittuTypo,
                    styles.accountsPosition,
                  ]}>
                  Accounts
                </Text>
                <Text style={[styles.moreTypo, styles.accountsPosition]}>
                  Accounts
                </Text>
                <Text
                  style={[
                    styles.transactio,
                    styles.moreTypo,
                    styles.morePosition,
                  ]}>
                  Transactio..
                </Text>
                <Text
                  style={[
                    styles.approvals1,
                    styles.mittuTypo,
                    styles.morePosition,
                  ]}>
                  Approvals
                </Text>
                <Text
                  style={[styles.more, styles.moreTypo, styles.morePosition]}>
                  More
                </Text>
                <Image
                  style={[
                    styles.iconIonicIosCheckmarkCircl,
                    styles.iconPosition,
                  ]}
                  resizeMode="cover"
                  source={require('../assets/icon-ionicioscheckmarkcircleoutline.png')}
                />
                <Pressable
                  style={styles.rectangleParent}
                  onPress={() => navigation.navigate('More')}>
                  <View
                    style={[
                      styles.groupItem,
                      styles.groupLayout,
                      styles.groupBorder,
                    ]}
                  />
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
                  <Image
                    style={[styles.path10Icon, styles.groupLayout]}
                    resizeMode="cover"
                    source={require('../assets/path-10.png')}
                  />
                </Pressable>
                <Pressable
                  style={[styles.bank, styles.bankPosition]}
                  onPress={() => navigation.navigate('Accounts')}>
                  <Image
                    style={[styles.icon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require('../assets/bank.png')}
                  />
                </Pressable>
                <Pressable
                  style={[styles.wrapper, styles.bankPosition]}
                  onPress={() => navigation.navigate('Transactions')}>
                  <Image
                    style={[styles.icon1, styles.iconLayout]}
                    resizeMode="cover"
                    source={require('../assets/group-15.png')}
                  />
                </Pressable>
                <Pressable
                  style={[styles.homeParent, styles.bankPosition]}
                  onPress={() => navigation.navigate('Home')}>
                  <Text style={[styles.home, styles.moreTypo]}>Home</Text>
                  <Image
                    style={styles.homeIcon}
                    resizeMode="cover"
                    source={require('../assets/home.png')}
                  />
                </Pressable>
              </View>
            </View>
            <View style={styles.groupView}>
              <View style={styles.groupParent}>
                <View style={styles.groupParent}>
                  <View
                    style={[
                      styles.groupChild1,
                      styles.groupChild1Position,
                      styles.groupChild1ShadowBox,
                    ]}
                  />
                  <View style={styles.groupParent3}>
                    <View style={styles.mittuParent}>
                      <Text style={[styles.mittu, styles.mittuTypo]}>
                        MITTU
                      </Text>
                      <Text
                        style={[
                          styles.saiTeja,
                          styles.inidaClr,
                          styles.inidaTypo,
                        ]}>
                        Sai Teja
                      </Text>
                      <Text
                        style={[
                          styles.inida,
                          styles.inidaClr,
                          styles.inidaTypo,
                        ]}>
                        44899544550 - Inida
                      </Text>
                    </View>
                    <View
                      style={[styles.statusParent, styles.groupChild1Position]}>
                      <Text
                        style={[
                          styles.status,
                          styles.statusTypo,
                          styles.inidaClr,
                        ]}>
                        Status:
                      </Text>
                      <Text
                        style={[
                          styles.submittedForAuthorization,
                          styles.statusTypo,
                        ]}>
                        Submitted for Authorization
                      </Text>
                    </View>
                  </View>
                  <View style={styles.groupChild2} />
                </View>
                <Image
                  style={[styles.groupIcon, styles.iconPosition]}
                  resizeMode="cover"
                  source={require('../assets/group-126.png')}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupFramePosition: {
    backgroundColor: Color.white,
    left: 0,
    bottom: 0,
    position: 'absolute',
  },
  groupChild1ShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 12,
      height: 2,
    },
    backgroundColor: Color.white,
  },
  mittuTypo: {
    fontSize: 12,
    textAlign: 'left',
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: '600',
    position: 'absolute',
  },
  accountsPosition: {
    marginLeft: -99.5,
    marginTop: 1.5,
    left: '50%',
    top: '50%',
  },
  moreTypo: {
    color: Color.black,
    fontSize: 12,
    textAlign: 'left',
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: '600',
    position: 'absolute',
  },
  morePosition: {
    marginTop: 1.5,
    top: '50%',
  },
  iconPosition: {
    top: 8,
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
    borderStyle: 'solid',
    width: 7,
    borderRadius: 2,
    backgroundColor: Color.white,
  },
  bankPosition: {
    top: 7,
    position: 'absolute',
  },
  iconLayout: {
    height: '100%',
    width: '100%',
  },
  groupChild1Position: {
    left: 1,
    bottom: 0,
    right: 0,
    position: 'absolute',
  },
  inidaClr: {
    opacity: 0.73,
    color: Color.black,
  },
  inidaTypo: {
    fontSize: 13,
    opacity: 0.73,
    textAlign: 'left',
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: '600',
    left: 0,
    position: 'absolute',
  },
  statusTypo: {
    marginTop: -6.5,
    fontSize: 12,
    top: '50%',
    textAlign: 'left',
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: '600',
    position: 'absolute',
  },
  pendingApprovals: {
    fontSize: 21,
    color: Color.white,
    textAlign: 'left',
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: '600',
    left: 0,
    top: 0,
    position: 'absolute',
  },
  payee: {
    left: 10,
    fontSize: 14,
    lineHeight: 10,
    textAlign: 'center',
    color: Color.darkslateblue,
    top: '50%',
    marginTop: -1.5,
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: '600',
    position: 'absolute',
  },
  groupChild: {
    marginLeft: 15,
    backgroundColor: Color.lightsteelblue_100,
    width: 15,
    height: 20,
    borderRadius: 2,
    left: '50%',
    marginTop: -11.5,
    top: '50%',
    position: 'absolute',
  },
  text: {
    marginLeft: 18,
    fontSize: 16,
    left: '50%',
    marginTop: -11.5,
    textAlign: 'center',
    color: Color.darkslateblue,
    top: '50%',
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: '600',
    position: 'absolute',
  },
  payeeParent: {
    borderRadius: 18,
    width: 88,
    height: 35,
    left: 0,
    bottom: 0,
    position: 'absolute',
  },
  pendingApprovalsParent: {
    top: 56,
    left: 31,
    width: 187,
    height: 85,
    position: 'absolute',
  },
  groupWrapper: {
    bottom: 42,
    backgroundColor: 'transparent',
    left: 0,
    right: 0,
    top: 0,
    position: 'absolute',
  },
  accounts: {
    color: Color.royalblue_100,
  },
  transactio: {
    marginLeft: -22.5,
    left: '50%',
  },
  approvals1: {
    marginLeft: 66.5,
    color: Color.mediumslateblue,
    left: '50%',
  },
  more: {
    right: 19,
  },
  iconIonicIosCheckmarkCircl: {
    marginLeft: 87.5,
    width: 18,
    height: 18,
    left: '50%',
  },
  groupItem: {
    left: 0,
    top: 0,
  },
  groupInner: {
    right: 0,
    top: 0,
  },
  rectangleView: {
    left: 0,
    bottom: 0,
  },
  path10Icon: {
    bottom: 0,
    right: 0,
  },
  rectangleParent: {
    top: 9,
    right: 25,
    width: 17,
    height: 16,
    position: 'absolute',
  },
  icon: {
    marginLeft: -83.5,
  },
  bank: {
    width: 21,
    height: 21,
    left: '50%',
  },
  icon1: {
    marginLeft: 0.5,
  },
  wrapper: {
    width: 23,
    height: 23,
    left: '50%',
  },
  home: {
    left: 0,
    bottom: 0,
  },
  homeIcon: {
    right: 7,
    left: 6,
    maxWidth: '100%',
    overflow: 'hidden',
    height: 20,
    top: 0,
    position: 'absolute',
  },
  homeParent: {
    left: 24,
    width: 33,
    height: 42,
  },
  accountsParent: {
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowRadius: 6,
    elevation: 6,
    height: 65,
    left: 0,
    bottom: 50,
    right: 0,
    position: 'absolute',
  },
  groupFrame: {
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: 'absolute',
  },
  groupChild1: {
    borderRadius: 5,
    shadowColor: 'rgba(19, 4, 4, 0.16)',
    shadowRadius: 5,
    elevation: 5,
    top: 0,
  },
  mittu: {
    color: Color.darkslateblue,
    fontSize: 12,
    left: 0,
    top: 0,
  },
  saiTeja: {
    top: '50%',
    marginTop: -10.5,
    fontSize: 13,
  },
  inida: {
    bottom: 0,
  },
  mittuParent: {
    width: 129,
    height: 79,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  status: {
    left: 20,
  },
  submittedForAuthorization: {
    marginLeft: -74,
    color: Color.royalblue_200,
    left: '50%',
  },
  statusParent: {
    backgroundColor: Color.gainsboro_100,
    height: 33,
  },
  groupParent3: {
    top: 13,
    right: 21,
    bottom: 18,
    left: 22,
    position: 'absolute',
  },
  groupChild2: {
    top: 1,
    bottom: 1,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    backgroundColor: Color.royalblue_200,
    width: 3,
    left: 0,
    position: 'absolute',
  },
  groupParent: {
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: 'absolute',
  },
  groupIcon: {
    right: 10,
    width: 4,
    height: 20,
  },
  groupView: {
    top: 23,
    right: 20,
    left: 19,
    height: 161,
    position: 'absolute',
  },
  groupContainer: {
    top: 174,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
  },
  approvalsInner: {
    width: 393,
    height: 780,
  },
  approvals: {
    flex: 1,
    width: '100%',
    backgroundColor: Color.white,
  },
});

export default Approvals;
