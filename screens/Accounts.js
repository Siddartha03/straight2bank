import * as React from 'react';
import {Text, StyleSheet, Pressable, Image, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {Color, FontFamily} from '../GlobalStyles';

const Accounts = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.accounts}>
      <View style={styles.accountsInner}>
        <View style={styles.groupParent}>
          <View style={[styles.accountsParent, styles.parentShadowBox]}>
            <Text style={[styles.accounts1, styles.accountsTypo]}>
              Accounts
            </Text>
            <Text style={[styles.accounts1, styles.accountsTypo]}>
              Accounts
            </Text>
            <Text style={[styles.accounts1, styles.accountsTypo]}>
              Accounts
            </Text>
            <Text
              style={[styles.transactio, styles.moreTypo, styles.morePosition]}>
              Transactio..
            </Text>
            <Text
              style={[styles.approvals, styles.moreTypo, styles.morePosition]}>
              Approvals
            </Text>
            <Text style={[styles.more, styles.moreTypo, styles.morePosition]}>
              More
            </Text>
            <Pressable
              style={styles.iconIonicIosCheckmarkCircl}
              onPress={() => navigation.navigate('Approvals')}>
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require('../assets/icon-ionicioscheckmarkcircleoutline.png')}
              />
            </Pressable>
            <Pressable
              style={styles.rectangleParent}
              onPress={() => navigation.navigate('More')}>
              <View
                style={[
                  styles.groupChild,
                  styles.groupLayout,
                  styles.groupBorder,
                ]}
              />
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
              <Image
                style={[styles.path10Icon, styles.groupLayout]}
                resizeMode="cover"
                source={require('../assets/path-10.png')}
              />
            </Pressable>
            <Image
              style={[styles.bankIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require('../assets/bank1.png')}
            />
            <View style={[styles.rectangleGroup, styles.iconPosition]}>
              <Pressable
                style={styles.rectanglePressable}
                onPress={() => navigation.navigate('Transactions')}
              />
              <View style={[styles.lineView, styles.lineViewPosition]} />
              <View style={[styles.groupChild1, styles.lineViewPosition]} />
              <Image
                style={styles.ellipseIcon}
                resizeMode="cover"
                source={require('../assets/ellipse-2.png')}
              />
              <Image
                style={styles.iconAwesomePlus}
                resizeMode="cover"
                source={require('../assets/icon-awesomeplus.png')}
              />
            </View>
            <View style={[styles.homeParent, styles.iconPosition]}>
              <Text style={[styles.home, styles.moreTypo]}>Home</Text>
              <Pressable
                style={styles.home1}
                onPress={() => navigation.navigate('Home')}>
                <Image
                  style={styles.icon1}
                  resizeMode="cover"
                  source={require('../assets/home.png')}
                />
              </Pressable>
            </View>
          </View>
          <View style={styles.groupContainer}>
            <LinearGradient
              style={styles.groupWrapper}
              locations={[0, 1]}
              colors={['#0071eb', '#151f47']}
              useAngle={true}
              angle={-88.2}>
              <View style={styles.groupFrame}>
                <View style={[styles.cashParent, styles.parentShadowBox]}>
                  <Text style={styles.cash}>Cash</Text>
                  <Text
                    style={[
                      styles.msCargillIndia,
                      styles.inidaTypo,
                      styles.inidaPosition,
                    ]}>
                    M/S CARGILL INDIA PRIVATE LIMITED
                  </Text>
                  <Text
                    style={[
                      styles.inida,
                      styles.inidaTypo,
                      styles.inidaPosition,
                    ]}>
                    44899544550 - Inida
                  </Text>
                  <Text style={[styles.asOf09, styles.inidaTypo]}>
                    as of 09 Mar 2023
                  </Text>
                  <Text style={[styles.inr, styles.inrPosition]}>{`INR `}</Text>
                  <Text style={[styles.text, styles.inrPosition]}>
                    26,36,93,752.00
                  </Text>
                </View>
              </View>
            </LinearGradient>
            <View style={styles.accountsGroup}>
              <Text style={[styles.accounts4, styles.accountsTypo]}>
                Accounts
              </Text>
              <View
                style={[
                  styles.loanParent,
                  styles.parentLayout,
                  styles.parentLayout1,
                ]}>
                <Text style={[styles.loan, styles.loanTypo, styles.loanTypo1]}>
                  Loan
                </Text>
                <Image
                  style={[styles.loan1Icon, styles.iconPosition]}
                  resizeMode="cover"
                  source={require('../assets/loan-1.png')}
                />
              </View>
              <View
                style={[
                  styles.depositParent,
                  styles.parentLayout,
                  styles.parentLayout1,
                ]}>
                <Text
                  style={[styles.deposit, styles.loanTypo, styles.loanTypo1]}>
                  Deposit
                </Text>
                <Image
                  style={styles.depositIcon}
                  resizeMode="cover"
                  source={require('../assets/deposit.png')}
                />
              </View>
              <View style={[styles.cashGroup, styles.parentLayout]}>
                <Text style={[styles.cash1, styles.loanTypo, styles.loanTypo1]}>
                  Cash
                </Text>
                <View style={[styles.rectangleView, styles.text1Position]} />
                <Text
                  style={[styles.text1, styles.text1Position, styles.loanTypo]}>
                  1
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 12,
      height: 2,
    },
    position: 'absolute',
    backgroundColor: Color.white,
  },
  accountsTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: '600',
    position: 'absolute',
  },
  moreTypo: {
    color: Color.black,
    textAlign: 'left',
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: '600',
    fontSize: 12,
    position: 'absolute',
  },
  morePosition: {
    marginTop: 1.5,
    color: Color.black,
    top: '50%',
  },
  groupLayout: {
    height: 7,
    width: 7,
    position: 'absolute',
  },
  groupBorder: {
    borderWidth: 1.2,
    width: 7,
    borderColor: '#000',
    borderStyle: 'solid',
    borderRadius: 2,
    backgroundColor: Color.white,
  },
  iconPosition: {
    top: 7,
    position: 'absolute',
  },
  lineViewPosition: {
    height: 3,
    borderTopWidth: 1.3,
    borderColor: '#000',
    borderStyle: 'solid',
    left: '50%',
    top: '50%',
    position: 'absolute',
  },
  inidaTypo: {
    opacity: 0.73,
    color: Color.black,
    textAlign: 'left',
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: '600',
    position: 'absolute',
  },
  inidaPosition: {
    fontSize: 13,
    opacity: 0.73,
    left: 18,
    top: '50%',
  },
  inrPosition: {
    marginTop: 22,
    color: Color.black,
    textAlign: 'left',
    fontSize: 12,
    top: '50%',
    position: 'absolute',
  },
  parentLayout: {
    height: 35,
    width: 88,
    borderRadius: 18,
    bottom: 0,
    position: 'absolute',
  },
  parentLayout1: {
    backgroundColor: Color.mediumslateblue,
    width: 88,
    borderRadius: 18,
  },
  loanTypo: {
    textAlign: 'center',
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: '600',
  },
  loanTypo1: {
    fontSize: 14,
    textAlign: 'center',
    top: '50%',
    position: 'absolute',
  },
  text1Position: {
    marginTop: -11.5,
    left: '50%',
    top: '50%',
    position: 'absolute',
  },
  accounts1: {
    marginLeft: -99.5,
    color: Color.royalblue_100,
    fontSize: 12,
    textAlign: 'left',
    left: '50%',
    top: '50%',
    marginTop: 1.5,
  },
  transactio: {
    marginLeft: -22.5,
    left: '50%',
    top: '50%',
  },
  approvals: {
    marginLeft: 66.5,
    left: '50%',
    top: '50%',
  },
  more: {
    right: 19,
    top: '50%',
  },
  icon: {
    marginLeft: 87.5,
    height: '100%',
    width: '100%',
  },
  iconIonicIosCheckmarkCircl: {
    top: 8,
    width: 18,
    height: 18,
    left: '50%',
    position: 'absolute',
  },
  groupChild: {
    left: 0,
    top: 0,
  },
  groupItem: {
    right: 0,
    top: 0,
  },
  groupInner: {
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
  bankIcon: {
    marginLeft: -83.5,
    width: 21,
    height: 21,
    left: '50%',
  },
  rectanglePressable: {
    left: 2,
    borderRadius: 3,
    borderWidth: 1.3,
    height: 19,
    borderColor: '#000',
    borderStyle: 'solid',
    right: 0,
    top: 0,
    position: 'absolute',
    backgroundColor: Color.white,
  },
  lineView: {
    marginTop: -7.3,
    marginLeft: -6.3,
    width: 14,
  },
  groupChild1: {
    marginTop: -2.3,
    marginLeft: -2.3,
    width: 10,
  },
  ellipseIcon: {
    width: 11,
    height: 11,
    left: 0,
    bottom: 0,
    position: 'absolute',
  },
  iconAwesomePlus: {
    bottom: 3,
    left: 3,
    width: 4,
    height: 4,
    position: 'absolute',
  },
  rectangleGroup: {
    marginLeft: 0.5,
    width: 23,
    height: 23,
    left: '50%',
  },
  home: {
    left: 0,
    bottom: 0,
  },
  icon1: {
    maxWidth: '100%',
    overflow: 'hidden',
    height: '100%',
  },
  home1: {
    left: 6,
    right: 7,
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
    bottom: 0,
    right: 0,
  },
  cash: {
    top: 14,
    color: Color.darkslateblue,
    left: 18,
    textAlign: 'left',
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: '600',
    fontSize: 12,
    position: 'absolute',
  },
  msCargillIndia: {
    marginTop: -34,
  },
  inida: {
    marginTop: -1,
  },
  asOf09: {
    bottom: 17,
    fontSize: 11,
    right: 20,
  },
  inr: {
    marginLeft: 37.5,
    opacity: 0.75,
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: '600',
    marginTop: 22,
    left: '50%',
  },
  text: {
    fontWeight: '700',
    fontFamily: FontFamily.mulishBold,
    right: 20,
  },
  cashParent: {
    top: 23,
    left: 20,
    borderRadius: 5,
    shadowColor: 'rgba(19, 4, 4, 0.16)',
    shadowRadius: 5,
    elevation: 5,
    height: 152,
    right: 20,
  },
  groupFrame: {
    top: 174,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    backgroundColor: Color.white,
  },
  groupWrapper: {
    backgroundColor: 'transparent',
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: 'absolute',
  },
  accounts4: {
    left: 1,
    fontSize: 21,
    color: Color.white,
    top: 0,
  },
  loan: {
    marginTop: -9.5,
    marginLeft: -30,
    color: Color.white,
    left: '50%',
  },
  loan1Icon: {
    right: 12,
    bottom: 6,
    maxHeight: '100%',
    width: 22,
  },
  loanParent: {
    right: 0,
  },
  deposit: {
    marginTop: -8.5,
    left: 8,
    color: Color.white,
  },
  depositIcon: {
    marginTop: -7.5,
    right: 9,
    height: 15,
    width: 15,
    top: '50%',
    position: 'absolute',
  },
  depositParent: {
    marginLeft: -44,
    left: '50%',
  },
  cash1: {
    marginTop: -10.5,
    left: 13,
    color: Color.darkslateblue,
  },
  rectangleView: {
    marginLeft: 15,
    backgroundColor: Color.lightsteelblue_100,
    width: 15,
    height: 20,
    borderRadius: 2,
    marginTop: -11.5,
  },
  text1: {
    marginLeft: 18,
    fontSize: 16,
    color: Color.darkslateblue,
  },
  cashGroup: {
    width: 88,
    borderRadius: 18,
    left: 0,
    backgroundColor: Color.white,
  },
  accountsGroup: {
    top: 56,
    left: 30,
    width: 290,
    height: 82,
    position: 'absolute',
  },
  groupContainer: {
    bottom: 66,
    left: 0,
    right: 0,
    top: 0,
    position: 'absolute',
  },
  groupParent: {
    left: 0,
    bottom: 50,
    right: 0,
    top: 0,
    position: 'absolute',
  },
  accountsInner: {
    width: 393,
    height: 780,
  },
  accounts: {
    flex: 1,
    width: '100%',
    backgroundColor: Color.white,
  },
});

export default Accounts;
