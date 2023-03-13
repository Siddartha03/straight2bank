import * as React from 'react';
import {StyleSheet, View, Text, Image, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {FontFamily, Color} from '../GlobalStyles';

const IPhone14Pro10 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14Pro10}>
      <View style={styles.rectangleParent}>
        <LinearGradient
          style={styles.groupChild}
          locations={[0, 1]}
          colors={['#0071eb', '#151f47']}
          useAngle={true}
          angle={-88.2}
        />
        <View style={styles.welcomeBackParent}>
          <Text style={[styles.welcomeBack, styles.azarAliTypo]}>
            Welcome back,
          </Text>
          <Text style={[styles.azarAli, styles.azarAliTypo]}>Azar Ali</Text>
        </View>
        <View style={styles.groupItem} />
        <View style={[styles.groupParent, styles.groupShadowBox]}>
          <View style={styles.tasksParent}>
            <Text style={styles.tasks}>Tasks</Text>
            <View style={styles.iconAwesomeCheckParent}>
              <Image
                style={[
                  styles.iconAwesomeCheck,
                  styles.iconPosition2,
                  styles.iconPosition3,
                ]}
                resizeMode="cover"
                source={require('../assets/icon-awesomecheck1.png')}
              />
              <Image
                style={[
                  styles.iconAwesomeCheck1,
                  styles.iconPosition2,
                  styles.iconPosition3,
                ]}
                resizeMode="cover"
                source={require('../assets/icon-awesomecheck1.png')}
              />
              <View style={[styles.groupInner, styles.lineViewPosition]} />
              <View style={[styles.lineView, styles.lineViewPosition]} />
            </View>
          </View>
          <View style={styles.inboxParent}>
            <Pressable
              style={styles.inbox}
              onPress={() => navigation.navigate('IPhone14Pro11')}>
              <Text style={styles.inbox1}>Inbox</Text>
            </Pressable>
            <Pressable
              style={[styles.emailParent, styles.userIconPosition]}
              onPress={() => navigation.navigate('IPhone14Pro11')}>
              <Image
                style={[
                  styles.emailIcon,
                  styles.emailIconPosition,
                  styles.iconLayout1,
                ]}
                resizeMode="cover"
                source={require('../assets/email1.png')}
              />
              <Image
                style={[
                  styles.emailIcon1,
                  styles.emailIconPosition,
                  styles.iconLayout1,
                ]}
                resizeMode="cover"
                source={require('../assets/email1.png')}
              />
            </Pressable>
          </View>
        </View>
        <View style={[styles.groupContainer, styles.homeIconLayout]}>
          <View style={styles.cargilParent}>
            <Text style={styles.cargil}>CARGIL</Text>
            <Image
              style={[
                styles.userIcon,
                styles.userIconLayout,
                styles.userIconPosition,
              ]}
              resizeMode="cover"
              source={require('../assets/user1.png')}
            />
          </View>
          <View style={styles.cargi02Parent}>
            <Text style={styles.cargil}>CARGI02</Text>
            <Image
              style={[styles.buildingIcon, styles.emailIconPosition]}
              resizeMode="cover"
              source={require('../assets/building1.png')}
            />
          </View>
          <View style={styles.groupChild1} />
        </View>
        <View style={[styles.accountsParent, styles.accountsParentPosition]}>
          <Text
            style={[styles.accounts, styles.accountsClr, styles.azarAliTypo]}>
            Accounts
          </Text>
          <View style={styles.rectangleView} />
          <Text style={[styles.cash, styles.cashTypo1]}>1 Cash</Text>
          <Text style={[styles.deposit, styles.cashTypo1]}>0 Deposit</Text>
          <Text style={[styles.loan, styles.cashTypo1]}>0 Loan</Text>
          <View style={[styles.groupChild2, styles.groupChildPosition]} />
          <View style={[styles.groupChild3, styles.groupChildPosition]} />
        </View>
        <View style={[styles.rectangleGroup, styles.accountsParentPosition]}>
          <View style={styles.groupChild4} />
          <View style={styles.groupChild5} />
          <View style={[styles.viewAllCashWrapper, styles.cashShadowBox]}>
            <Text style={[styles.viewAllCash, styles.cashTypo]}>
              View All Cash
            </Text>
          </View>
          <View style={[styles.cashParent, styles.cashShadowBox]}>
            <Text style={[styles.cashPosition, styles.cashTypo]}>Cash</Text>
            <Text
              style={[
                styles.msCargillIndia,
                styles.inrTypo,
                styles.inrPosition,
              ]}>
              M/S CARGILL INDIA PRIVATE LIMITED
            </Text>
            <Text style={[styles.inr, styles.inrTypo, styles.inrPosition]}>
              44899544550 - INR
            </Text>
            <Text style={[styles.asOf09, styles.inrTypo]}>
              as of 09 Mar 2023
            </Text>
            <Text style={[styles.inr1, styles.inr1Position]}>{`INR `}</Text>
            <Text style={[styles.text, styles.inr1Position]}>
              26,36,93,752.00
            </Text>
          </View>
          <Image
            style={[styles.iconIonicIosArrowForward, styles.iconLayout]}
            resizeMode="cover"
            source={require('../assets/icon-ioniciosarrowforward1.png')}
          />
          <View style={[styles.cashAccountsParent, styles.cashPosition]}>
            <Text
              style={[
                styles.cashAccounts,
                styles.logout1Typo,
                styles.accountsClr,
              ]}>
              Cash Accounts
            </Text>
            <View style={styles.groupWrapper}>
              <View
                style={[
                  styles.rectangleContainer,
                  styles.rectangleContainerPosition,
                ]}>
                <View style={[styles.groupChild6, styles.groupChildLayout1]} />
                <View style={[styles.groupChild7, styles.groupChildLayout1]} />
                <Image
                  style={[
                    styles.ellipseIcon,
                    styles.iconPosition1,
                    styles.iconPosition2,
                  ]}
                  resizeMode="cover"
                  source={require('../assets/ellipse-1.png')}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.logoutParent}>
          <Pressable
            style={styles.logout}
            onPress={() => navigation.navigate('IPhone14Pro12')}>
            <Text style={[styles.logout1, styles.logout1Typo]}>Logout</Text>
          </Pressable>
          <Image
            style={styles.closeIcon}
            resizeMode="cover"
            source={require('../assets/close.png')}
          />
        </View>
        <View style={[styles.accountsGroup, styles.groupShadowBox]}>
          <Text
            onPress={() => navigation.navigate('Accounts')}
            style={[styles.accounts1, styles.moreTypo]}>
            Accounts
          </Text>
          <Text
            onPress={() => navigation.navigate('Transactions')}
            style={[styles.transactio, styles.moreTypo]}>
            Transactio..
          </Text>
          <Text
            onPress={() => navigation.navigate('Approvals')}
            style={[styles.approvals, styles.moreTypo]}>
            Approvals
          </Text>
          <Text
            onPress={() => navigation.navigate('More')}
            style={[styles.more, styles.moreTypo]}>
            More
          </Text>
          <Pressable onPress={() => navigation.navigate('Approvals')}>
            <Image
              style={[
                styles.iconIonicIosCheckmarkCircl,
                styles.rectangleContainerPosition,
              ]}
              resizeMode="cover"
              source={require('../assets/icon-ionicioscheckmarkcircleoutline1.png')}
            />
          </Pressable>
          <Pressable
            style={[styles.groupView, styles.userIconLayout]}
            onPress={() => navigation.navigate('More')}>
            <View style={[styles.groupChild8, styles.groupChildLayout]} />
            <View style={[styles.groupChild9, styles.groupChildLayout]} />
            <View style={[styles.groupChild10, styles.groupChildLayout]} />
            <Image
              style={[styles.path10Icon, styles.iconLayout]}
              resizeMode="cover"
              source={require('../assets/path-10.png')}
            />
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Accounts')}>
            <Image
              style={[styles.bankIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require('../assets/bank.png')}
            />
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Transactions')}>
            <Image
              style={[
                styles.groupIcon,
                styles.iconPosition,
                styles.iconPosition1,
              ]}
              resizeMode="cover"
              source={require('../assets/group-15.png')}
            />
          </Pressable>
          <Pressable
            style={[styles.homeParent, styles.iconPosition]}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.home}>Home</Text>
            <Image
              style={[
                styles.homeIcon,
                styles.homeIconLayout,
                styles.iconLayout1,
              ]}
              resizeMode="cover"
              source={require('../assets/home.png')}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  azarAliTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: '600',
    fontSize: 18,
  },
  groupShadowBox: {
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    position: 'absolute',
    backgroundColor: Color.white,
  },
  iconPosition2: {
    height: 5,
    top: '50%',
    position: 'absolute',
  },
  iconPosition3: {
    marginLeft: -8.27,
    height: 5,
    width: 7,
    left: '50%',
  },
  lineViewPosition: {
    height: 3,
    width: 8,
    borderTopWidth: 1.5,
    marginLeft: 0.5,
    borderColor: '#fff',
    borderStyle: 'solid',
    left: '50%',
    top: '50%',
    position: 'absolute',
  },
  userIconPosition: {
    top: 1,
    left: 0,
  },
  emailIconPosition: {
    maxHeight: '100%',
    top: 0,
    position: 'absolute',
  },
  iconLayout1: {
    overflow: 'hidden',
    maxWidth: '100%',
  },
  homeIconLayout: {
    height: 20,
    position: 'absolute',
  },
  userIconLayout: {
    height: 16,
    position: 'absolute',
  },
  accountsParentPosition: {
    left: 21,
    right: 20,
    position: 'absolute',
  },
  accountsClr: {
    color: Color.black,
    position: 'absolute',
  },
  cashTypo1: {
    color: Color.dimgray_100,
    fontSize: 16,
    textAlign: 'left',
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: '600',
    position: 'absolute',
  },
  groupChildPosition: {
    height: 22,
    width: 3,
    borderRightWidth: 1.5,
    borderColor: '#707070',
    bottom: 11,
    borderStyle: 'solid',
    left: '50%',
    position: 'absolute',
  },
  cashShadowBox: {
    elevation: 5,
    shadowRadius: 5,
    borderRadius: 5,
    right: 19,
    left: 18,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    position: 'absolute',
    backgroundColor: Color.white,
  },
  cashTypo: {
    color: Color.darkslateblue,
    fontSize: 12,
    textAlign: 'left',
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: '600',
  },
  inrTypo: {
    opacity: 0.73,
    color: Color.black,
    textAlign: 'left',
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: '600',
    position: 'absolute',
  },
  inrPosition: {
    fontSize: 13,
    opacity: 0.73,
    left: 18,
    top: '50%',
  },
  inr1Position: {
    marginTop: 22,
    fontSize: 12,
    color: Color.black,
    top: '50%',
    textAlign: 'left',
    position: 'absolute',
  },
  iconLayout: {
    height: 7,
    position: 'absolute',
  },
  cashPosition: {
    top: 14,
    left: 18,
    position: 'absolute',
  },
  logout1Typo: {
    marginTop: -11,
    textAlign: 'left',
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: '600',
  },
  rectangleContainerPosition: {
    height: 18,
    left: '50%',
    position: 'absolute',
  },
  groupChildLayout1: {
    height: 12,
    width: 19,
    borderWidth: 1.5,
    borderColor: '#293e8d',
    borderStyle: 'solid',
    borderRadius: 2,
    position: 'absolute',
  },
  iconPosition1: {
    marginLeft: 0.5,
    left: '50%',
  },
  moreTypo: {
    marginTop: 1.5,
    fontSize: 12,
    color: Color.black,
    top: '50%',
    textAlign: 'left',
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: '600',
    position: 'absolute',
  },
  groupChildLayout: {
    borderWidth: 1.2,
    borderColor: '#000',
    height: 7,
    width: 7,
    borderStyle: 'solid',
    borderRadius: 2,
    position: 'absolute',
    backgroundColor: Color.white,
  },
  iconPosition: {
    top: 7,
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
  welcomeBack: {
    color: Color.white,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  azarAli: {
    bottom: 0,
    color: Color.white,
    left: 0,
    position: 'absolute',
  },
  welcomeBackParent: {
    top: 52,
    left: 33,
    width: 128,
    height: 54,
    position: 'absolute',
  },
  groupItem: {
    top: 232,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    backgroundColor: Color.white,
  },
  tasks: {
    marginTop: -14,
    marginLeft: -2.5,
    fontSize: 20,
    left: '50%',
    top: '50%',
    textAlign: 'left',
    color: Color.white,
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: '600',
    position: 'absolute',
  },
  iconAwesomeCheck: {
    marginTop: -6.71,
    width: 7,
  },
  iconAwesomeCheck1: {
    marginTop: 1.29,
    width: 7,
  },
  groupInner: {
    marginTop: -5.5,
  },
  lineView: {
    marginTop: 2.5,
  },
  iconAwesomeCheckParent: {
    marginTop: -12,
    marginLeft: -48.5,
    borderWidth: 2.5,
    height: 26,
    width: 25,
    borderColor: '#fff',
    borderRadius: 2,
    borderStyle: 'solid',
    left: '50%',
    top: '50%',
    position: 'absolute',
  },
  tasksParent: {
    top: 10,
    bottom: 9,
    left: 10,
    borderRadius: 25,
    backgroundColor: Color.royalblue_200,
    width: 169,
    position: 'absolute',
  },
  inbox1: {
    color: Color.royalblue_100,
    fontFamily: FontFamily.mulishBold,
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'left',
  },
  inbox: {
    right: -1,
    top: 0,
    position: 'absolute',
  },
  emailIcon: {
    left: 1,
    bottom: 0,
    right: 0,
  },
  emailIcon1: {
    right: 1,
    bottom: 0,
    left: 0,
  },
  emailParent: {
    width: 25,
    bottom: 0,
    position: 'absolute',
  },
  inboxParent: {
    marginTop: -11.5,
    right: 34,
    width: 90,
    height: 25,
    top: '50%',
    position: 'absolute',
  },
  groupParent: {
    marginTop: -203,
    right: 15,
    left: 20,
    borderRadius: 37,
    height: 71,
    top: '50%',
  },
  cargil: {
    fontSize: 16,
    fontFamily: FontFamily.mulishBold,
    fontWeight: '700',
    right: -1,
    textAlign: 'left',
    color: Color.white,
    top: 0,
    position: 'absolute',
  },
  userIcon: {
    width: 16,
  },
  cargilParent: {
    width: 81,
    bottom: 0,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  buildingIcon: {
    bottom: 2,
    width: 18,
    left: 0,
  },
  cargi02Parent: {
    width: 93,
    bottom: 0,
    right: 0,
    top: 0,
    position: 'absolute',
  },
  groupChild1: {
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
  groupContainer: {
    marginTop: -252,
    left: 34,
    width: 220,
    top: '50%',
  },
  accounts: {
    left: 2,
    top: 0,
  },
  rectangleView: {
    backgroundColor: '#e4e0e1',
    height: 43,
    opacity: 0.3,
    borderRadius: 4,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
  },
  cash: {
    left: 18,
    color: Color.dimgray_100,
    bottom: 11,
  },
  deposit: {
    marginLeft: -36,
    bottom: 11,
    color: Color.dimgray_100,
    left: '50%',
  },
  loan: {
    marginTop: 5,
    right: 30,
    top: '50%',
  },
  groupChild2: {
    marginLeft: -75,
  },
  groupChild3: {
    marginLeft: 66,
  },
  accountsParent: {
    marginTop: -99,
    height: 78,
    top: '50%',
  },
  groupChild4: {
    top: 67,
    backgroundColor: '#dbdbdb',
    opacity: 0.45,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
  },
  groupChild5: {
    borderWidth: 1,
    opacity: 0.19,
    borderColor: '#707070',
    borderRadius: 4,
    borderStyle: 'solid',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    position: 'absolute',
  },
  viewAllCash: {
    marginTop: -7,
    marginLeft: -38.5,
    left: '50%',
    top: '50%',
    position: 'absolute',
  },
  viewAllCashWrapper: {
    bottom: 21,
    shadowColor: 'rgba(41, 34, 34, 0.16)',
    height: 52,
  },
  msCargillIndia: {
    marginTop: -34,
  },
  inr: {
    marginTop: -1,
  },
  asOf09: {
    bottom: 17,
    fontSize: 11,
    right: 20,
  },
  inr1: {
    marginLeft: 18.5,
    opacity: 0.75,
    left: '50%',
    marginTop: 22,
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: '600',
  },
  text: {
    right: 20,
    fontFamily: FontFamily.mulishBold,
    fontWeight: '700',
    marginTop: 22,
  },
  cashParent: {
    marginTop: -79.5,
    shadowColor: 'rgba(19, 4, 4, 0.16)',
    height: 152,
    top: '50%',
  },
  iconIonicIosArrowForward: {
    top: 27,
    width: 12,
    right: 19,
  },
  cashAccounts: {
    fontSize: 14,
    right: -1,
    top: '50%',
  },
  groupChild6: {
    left: 0,
    top: 0,
  },
  groupChild7: {
    backgroundColor: '#d4e8ff',
    bottom: 0,
    right: 0,
  },
  ellipseIcon: {
    marginTop: 1,
    width: 5,
  },
  rectangleContainer: {
    marginTop: -9,
    marginLeft: -11.5,
    width: 25,
    top: '50%',
  },
  groupWrapper: {
    backgroundColor: Color.royalblue_100,
    width: 41,
    borderRadius: 5,
    bottom: 0,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  cashAccountsParent: {
    width: 158,
    height: 36,
  },
  rectangleGroup: {
    bottom: 77,
    height: 319,
  },
  logout1: {
    marginLeft: -11.5,
    color: Color.white,
    fontSize: 18,
    marginTop: -11,
  },
  logout: {
    left: '50%',
    top: '50%',
    position: 'absolute',
  },
  closeIcon: {
    marginTop: -13,
    marginLeft: -46.5,
    width: 28,
    height: 28,
    left: '50%',
    top: '50%',
    position: 'absolute',
  },
  logoutParent: {
    top: 38,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: Color.cornflowerblue_100,
    width: 139,
    height: 50,
    right: 0,
    position: 'absolute',
  },
  accounts1: {
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
  iconIonicIosCheckmarkCircl: {
    marginLeft: 87.5,
    top: 8,
    width: 18,
  },
  groupChild8: {
    left: 0,
    top: 0,
  },
  groupChild9: {
    right: 0,
    top: 0,
  },
  groupChild10: {
    bottom: 0,
    left: 0,
  },
  path10Icon: {
    width: 7,
    bottom: 0,
    right: 0,
  },
  groupView: {
    top: 9,
    right: 25,
    width: 17,
  },
  bankIcon: {
    marginLeft: -83.5,
    width: 21,
    height: 21,
    left: '50%',
  },
  groupIcon: {
    width: 23,
    height: 23,
  },
  home: {
    fontSize: 12,
    color: Color.royalblue_100,
    bottom: 0,
    textAlign: 'left',
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: '600',
    left: 0,
    position: 'absolute',
  },
  homeIcon: {
    right: 7,
    left: 6,
    top: 0,
  },
  homeParent: {
    left: 24,
    width: 33,
    height: 42,
  },
  accountsGroup: {
    height: 65,
    bottom: 0.5,
    left: 0,
    right: 0,
  },
  rectangleParent: {
    width: 393,
    height: 780,
  },
  iphone14Pro10: {
    flex: 1,
    width: '100%',
    backgroundColor: Color.white,
  },
});

export default IPhone14Pro10;
