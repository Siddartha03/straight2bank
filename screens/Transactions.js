import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {FontFamily, Color} from '../GlobalStyles';

const windowHeight = Dimensions.get('window').height;
const Transactions = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.transactions}>
      <View style={styles.rectangleParent}>
        <LinearGradient
          style={[styles.groupChild, styles.groupPosition]}
          locations={[0, 1]}
          colors={['#0071eb', '#151f47']}
          useAngle={true}
          angle={-88.2}
        />
        <LinearGradient
          style={[styles.groupParent, styles.groupPosition]}
          locations={[0, 1]}
          colors={['#0071eb', '#151f47']}
          useAngle={true}
          angle={-88.2}>
          <View style={styles.transactionsParent}>
            <Text style={[styles.transactions1, styles.accountsTypo1]}>
              Transactions
            </Text>
            <Image
              style={styles.groupItem}
              resizeMode="cover"
              source={require('../assets/group-141.png')}
            />
          </View>
          <View style={styles.groupWrapper}>
            <View style={styles.groupContainer}>
              <View
                style={[styles.accountsParent, styles.groupChild9ShadowBox]}>
                <Text
                  style={[
                    styles.accounts,
                    styles.accountsTypo,
                    styles.accountsPosition,
                    styles.accountsTypo1,
                  ]}>
                  Accounts
                </Text>
                <Text
                  style={[
                    styles.accounts,
                    styles.accountsTypo,
                    styles.accountsPosition,
                    styles.accountsTypo1,
                  ]}>
                  Accounts
                </Text>
                <Text
                  style={[
                    styles.accounts2,
                    styles.moreTypo,
                    styles.accountsTypo,
                    styles.accountsPosition,
                  ]}>
                  Accounts
                </Text>
                <Text style={styles.transactio}>Transactio..</Text>
                <Text
                  style={[
                    styles.approvals,
                    styles.moreTypo,
                    styles.accountsTypo,
                    styles.morePosition,
                  ]}>
                  Approvals
                </Text>
                <Text
                  style={[
                    styles.more,
                    styles.moreTypo,
                    styles.accountsTypo,
                    styles.morePosition,
                  ]}>
                  More
                </Text>
                <Pressable
                  style={[
                    styles.iconIonicIosCheckmarkCircl,
                    styles.groupWrapper1Layout,
                  ]}
                  onPress={() => navigation.navigate('Approvals')}>
                  <Image
                    style={styles.icon}
                    resizeMode="cover"
                    source={require('../assets/icon-ionicioscheckmarkcircleoutline.png')}
                  />
                </Pressable>
                <Pressable
                  style={[styles.rectangleGroup, styles.dueBy01Position]}
                  onPress={() => navigation.navigate('More')}>
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
                </Pressable>
                <Pressable
                  style={[styles.bank, styles.bankPosition]}
                  onPress={() => navigation.navigate('Accounts')}>
                  <Image
                    style={styles.icon1}
                    resizeMode="cover"
                    source={require('../assets/bank.png')}
                  />
                </Pressable>
                <Image
                  style={[styles.groupIcon, styles.bankPosition]}
                  resizeMode="cover"
                  source={require('../assets/group-15.png')}
                />
                <View style={[styles.homeParent, styles.bankPosition]}>
                  <Text
                    style={[styles.home, styles.moreTypo, styles.accountsTypo]}>
                    Home
                  </Text>
                  <Pressable
                    style={styles.home1}
                    onPress={() => navigation.navigate('Home')}>
                    <Image
                      style={styles.icon2}
                      resizeMode="cover"
                      source={require('../assets/home.png')}
                    />
                  </Pressable>
                </View>
              </View>
              <View style={styles.groupView}>
                <View style={styles.batchParent}>
                  <Text style={[styles.batch, styles.moreTypo]}>Batch</Text>
                  <View style={styles.groupFrame}>
                    <View style={styles.rectangleContainer}>
                      <View
                        style={[
                          styles.groupChildLayout2,
                          styles.groupChildBorder1,
                        ]}
                      />
                      <View
                        style={[
                          styles.groupChildLayout1,
                          styles.groupChildBorder1,
                        ]}
                      />
                      <Image
                        style={styles.ellipseIcon}
                        resizeMode="cover"
                        source={require('../assets/ellipse-1.png')}
                      />
                    </View>
                  </View>
                  <View style={styles.rectangleContainer}>
                    <View style={[styles.lineView, styles.wrapperBorder]} />
                    <Text style={styles.single}>Single</Text>
                    <View
                      style={[
                        styles.groupChild4,
                        styles.groupChildLayout,
                        styles.wrapperBorder,
                      ]}
                    />
                    <View
                      style={[
                        styles.groupWrapper1,
                        styles.groupWrapper1Layout,
                      ]}>
                      <View style={styles.rectangleContainer}>
                        <View
                          style={[
                            styles.groupChildBorder,
                            styles.groupChildLayout2,
                          ]}
                        />
                        <View
                          style={[
                            styles.groupChildBorder,
                            styles.groupChildLayout1,
                          ]}
                        />
                        <Image
                          style={styles.ellipseIcon}
                          resizeMode="cover"
                          source={require('../assets/ellipse-11.png')}
                        />
                      </View>
                    </View>
                    <View style={[styles.wrapper, styles.wrapperBorder]}>
                      <Text style={[styles.text, styles.moreTypo]}>2</Text>
                    </View>
                    <View
                      style={[styles.groupChild8, styles.groupChildBorder]}
                    />
                  </View>
                </View>
                <View style={[styles.groupParent1, styles.groupParentPosition]}>
                  <View style={styles.rectangleContainer}>
                    <View
                      style={[styles.groupChild9, styles.groupChild9ShadowBox]}
                    />
                    <View style={styles.groupParent3}>
                      <View style={styles.singleQ0000364Parent}>
                        <Text
                          style={[
                            styles.singleQ0000364,
                            styles.accountsTypo,
                            styles.accountsTypo1,
                          ]}>
                          SINGLE #Q0000364
                        </Text>
                        <Text
                          style={[
                            styles.payFromMs,
                            styles.payClr,
                            styles.payTypo,
                          ]}>
                          Pay From M/S GARGILL INDIA PVT LTD....
                        </Text>
                        <Text
                          style={[
                            styles.payFromRadha,
                            styles.payClr,
                            styles.payTypo,
                          ]}>
                          Pay From RADHA KRISHNA GOUD
                        </Text>
                        <Text
                          style={[styles.india, styles.payClr, styles.payTypo]}>
                          44899544550 - India
                        </Text>
                        <Text
                          style={[
                            styles.scb00insaroorNagar,
                            styles.payClr,
                            styles.payTypo,
                          ]}>
                          44895654852 - SCB00INSAROOR NAGAR
                        </Text>
                      </View>
                      <View style={styles.statusParent}>
                        <Text
                          style={[
                            styles.status,
                            styles.statusTypo,
                            styles.payClr,
                          ]}>
                          Status:
                        </Text>
                        <Text
                          style={[
                            styles.rejectedByAuthorizer,
                            styles.statusTypo,
                          ]}>
                          Rejected by Authorizer
                        </Text>
                      </View>
                    </View>
                    <View style={styles.groupChild10} />
                    <Text
                      style={[
                        styles.dueBy01,
                        styles.dueBy01Position,
                        styles.moreTypo,
                      ]}>
                      Due by 01 Nov 2021
                    </Text>
                  </View>
                  <Image
                    style={[styles.groupChild11, styles.groupChildPosition]}
                    resizeMode="cover"
                    source={require('../assets/ellipse-9.png')}
                  />
                  <Image
                    style={[styles.groupChild12, styles.groupChildPosition]}
                    resizeMode="cover"
                    source={require('../assets/ellipse-10.png')}
                  />
                  <View
                    style={[
                      styles.groupChild13,
                      styles.groupChildBorder,
                      styles.groupChildLayout,
                    ]}
                  />
                </View>
                <View style={[styles.groupParent4, styles.groupParentPosition]}>
                  <View style={styles.rectangleContainer}>
                    <View
                      style={[styles.groupChild9, styles.groupChild9ShadowBox]}
                    />
                    <View style={styles.groupParent3}>
                      <View style={styles.singleQ0000364Parent}>
                        <Text
                          style={[
                            styles.singleQ0000364,
                            styles.accountsTypo,
                            styles.accountsTypo1,
                          ]}>
                          SINGLE #Q0000305
                        </Text>
                        <Text
                          style={[
                            styles.payFromMs,
                            styles.payClr,
                            styles.payTypo,
                          ]}>
                          Pay From M/S GARGILL INDIA PVT LTD....
                        </Text>
                        <Text
                          style={[
                            styles.payFromRadha,
                            styles.payClr,
                            styles.payTypo,
                          ]}>
                          Pay From RADHA KRISHNA GOUD
                        </Text>
                        <Text
                          style={[styles.india, styles.payClr, styles.payTypo]}>
                          44899544550 - India
                        </Text>
                        <Text
                          style={[
                            styles.scb00insaroorNagar,
                            styles.payClr,
                            styles.payTypo,
                          ]}>
                          44895654852 - SCB00INSAROOR NAGAR
                        </Text>
                      </View>
                      <View style={styles.statusParent}>
                        <Text
                          style={[
                            styles.status,
                            styles.statusTypo,
                            styles.payClr,
                          ]}>
                          Status:
                        </Text>
                        <Text
                          style={[
                            styles.rejectedByAuthorizer,
                            styles.statusTypo,
                          ]}>
                          Rejected by Authorizer
                        </Text>
                      </View>
                    </View>
                    <View style={styles.groupChild10} />
                    <Text
                      style={[
                        styles.dueBy01,
                        styles.dueBy01Position,
                        styles.moreTypo,
                      ]}>
                      Due by 02 Nov 2021
                    </Text>
                  </View>
                  <Image
                    style={[styles.groupChild11, styles.groupChildPosition]}
                    resizeMode="cover"
                    source={require('../assets/ellipse-9.png')}
                  />
                  <Image
                    style={[styles.groupChild12, styles.groupChildPosition]}
                    resizeMode="cover"
                    source={require('../assets/ellipse-10.png')}
                  />
                  <View
                    style={[
                      styles.groupChild13,
                      styles.groupChildBorder,
                      styles.groupChildLayout,
                    ]}
                  />
                </View>
                <Text
                  style={[
                    styles.inr,
                    styles.inrTypo,
                    styles.inrPosition,
                  ]}>{`INR `}</Text>
                <Text
                  style={[styles.text1, styles.textTypo, styles.inrPosition]}>
                  25,2,025,00.00
                </Text>
                <Text
                  style={[
                    styles.inr1,
                    styles.inr1Position,
                    styles.inrTypo,
                  ]}>{`INR `}</Text>
                <Text
                  style={[styles.text2, styles.inr1Position, styles.textTypo]}>
                  25,12,225.00
                </Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    backgroundColor: 'transparent',
    bottom: 0,
    right: 0,
    position: 'absolute',
  },
  accountsTypo1: {
    textAlign: 'left',
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: '600',
  },
  groupChild9ShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 12,
      height: 2,
    },
    bottom: 0,
    position: 'absolute',
    backgroundColor: Color.white,
  },
  accountsTypo: {
    fontSize: 12,
    position: 'absolute',
  },
  accountsPosition: {
    marginLeft: -99.5,
    fontSize: 12,
    left: '50%',
    top: '50%',
    marginTop: 1.5,
  },
  moreTypo: {
    color: Color.black,
    textAlign: 'left',
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: '600',
  },
  morePosition: {
    marginTop: 1.5,
    color: Color.black,
    fontSize: 12,
    top: '50%',
  },
  groupWrapper1Layout: {
    width: 18,
    position: 'absolute',
  },
  dueBy01Position: {
    top: 9,
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
  bankPosition: {
    top: 7,
    position: 'absolute',
  },
  groupChildBorder1: {
    borderColor: '#293e8d',
    position: 'absolute',
  },
  wrapperBorder: {
    borderColor: '#707070',
    borderStyle: 'solid',
    position: 'absolute',
  },
  groupChildLayout: {
    width: 2,
    borderRightWidth: 1,
  },
  groupChildLayout2: {
    height: 9,
    width: 14,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 2,
    left: 0,
    top: 0,
  },
  groupChildLayout1: {
    width: 15,
    height: 9,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 2,
    bottom: 0,
    right: 0,
    backgroundColor: Color.white,
  },
  groupChildBorder: {
    borderColor: '#0056f6',
    position: 'absolute',
  },
  groupParentPosition: {
    height: 229,
    left: 20,
    right: 20,
    position: 'absolute',
  },
  payClr: {
    opacity: 0.73,
    color: Color.black,
  },
  payTypo: {
    left: 16,
    opacity: 0.73,
    fontSize: 13,
    textAlign: 'left',
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: '600',
    position: 'absolute',
  },
  statusTypo: {
    marginTop: -9.5,
    fontSize: 12,
    top: '50%',
    textAlign: 'left',
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: '600',
    position: 'absolute',
  },
  groupChildPosition: {
    height: 8,
    width: 8,
    left: 18,
    top: '50%',
    position: 'absolute',
  },
  inrTypo: {
    opacity: 0.75,
    left: '50%',
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: '600',
  },
  inrPosition: {
    marginTop: -60,
    color: Color.black,
    fontSize: 12,
    top: '50%',
    textAlign: 'left',
    position: 'absolute',
  },
  textTypo: {
    fontFamily: FontFamily.mulishBold,
    fontWeight: '700',
  },
  inr1Position: {
    bottom: 59,
    color: Color.black,
    fontSize: 12,
    textAlign: 'left',
    position: 'absolute',
  },
  groupChild: {
    height: 535,
    left: 1,
  },
  transactions1: {
    fontSize: 21,
    color: Color.white,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  groupItem: {
    right: -1,
    bottom: 1,
    width: 19,
    height: 13,
    position: 'absolute',
  },
  transactionsParent: {
    top: 99,
    right: 28,
    left: 27,
    height: 26,
    position: 'absolute',
  },
  accounts: {
    color: Color.royalblue_100,
    left: '50%',
    top: '50%',
  },
  accounts2: {
    left: '50%',
    top: '50%',
  },
  transactio: {
    marginLeft: -22.5,
    color: Color.mediumslateblue,
    fontSize: 12,
    left: '50%',
    top: '50%',
    marginTop: 1.5,
    textAlign: 'left',
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: '600',
    position: 'absolute',
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
    height: 18,
    left: '50%',
    top: 8,
  },
  groupInner: {
    left: 0,
    top: 0,
  },
  rectangleView: {
    top: 0,
    right: 0,
  },
  groupChild1: {
    left: 0,
    bottom: 0,
  },
  path10Icon: {
    bottom: 0,
    right: 0,
  },
  rectangleGroup: {
    right: 25,
    width: 17,
    height: 16,
  },
  icon1: {
    marginLeft: -83.5,
    height: '100%',
    width: '100%',
  },
  bank: {
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
  home: {
    left: 0,
    bottom: 0,
  },
  icon2: {
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
    width: 33,
    height: 42,
    left: 24,
  },
  accountsParent: {
    right: 1,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowRadius: 6,
    elevation: 6,
    height: 65,
    left: 0,
  },
  batch: {
    marginLeft: -20,
    fontSize: 17,
    left: '50%',
    top: 0,
    position: 'absolute',
  },
  ellipseIcon: {
    marginTop: 0.5,
    marginLeft: 0,
    width: 4,
    height: 4,
    left: '50%',
    top: '50%',
    position: 'absolute',
  },
  rectangleContainer: {
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
  },
  groupFrame: {
    marginLeft: -49,
    top: 4,
    width: 18,
    left: '50%',
    height: 13,
    position: 'absolute',
  },
  lineView: {
    bottom: -1,
    left: -1,
    borderTopWidth: 1,
    height: 2,
    opacity: 0.42,
    right: 0,
  },
  single: {
    top: 2,
    left: 53,
    fontSize: 13,
    color: Color.mediumslateblue,
    textAlign: 'left',
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: '600',
    position: 'absolute',
  },
  groupChild4: {
    marginLeft: -65.5,
    top: -1,
    height: 24,
    left: '50%',
  },
  groupWrapper1: {
    marginTop: -8.75,
    left: 24,
    top: '50%',
    height: 13,
  },
  text: {
    marginLeft: -3.5,
    fontSize: 11,
    left: '50%',
    top: 0,
    position: 'absolute',
  },
  wrapper: {
    marginLeft: -96,
    width: 13,
    height: 15,
    borderWidth: 1,
    borderColor: '#707070',
    top: 4,
    borderRadius: 2,
    left: '50%',
  },
  groupChild8: {
    bottom: -2,
    borderTopWidth: 2,
    width: 79,
    height: 4,
    left: 24,
    borderStyle: 'solid',
    borderColor: '#0056f6',
  },
  batchParent: {
    height: 30,
    left: 0,
    top: 0,
    right: 0,
    position: 'absolute',
  },
  groupChild9: {
    borderRadius: 5,
    shadowColor: 'rgba(19, 4, 4, 0.16)',
    shadowRadius: 5,
    elevation: 5,
    top: 0,
    left: 1,
    right: 0,
  },
  singleQ0000364: {
    color: Color.darkslateblue,
    left: 0,
    top: 0,
  },
  payFromMs: {
    marginTop: -35,
    top: '50%',
  },
  payFromRadha: {
    marginTop: 20,
    top: '50%',
  },
  india: {
    marginTop: -14,
    top: '50%',
  },
  scb00insaroorNagar: {
    bottom: 0,
  },
  singleQ0000364Parent: {
    width: 276,
    height: 114,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  status: {
    left: 19,
  },
  rejectedByAuthorizer: {
    marginLeft: -90.5,
    color: Color.royalblue_200,
    left: '50%',
  },
  statusParent: {
    backgroundColor: Color.gainsboro_100,
    height: 33,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
  },
  groupParent3: {
    top: 12,
    right: 12,
    bottom: 15,
    left: 17,
    position: 'absolute',
  },
  groupChild10: {
    top: 1,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    backgroundColor: Color.royalblue_200,
    width: 3,
    left: 0,
    bottom: 0,
    position: 'absolute',
  },
  dueBy01: {
    right: 11,
    fontSize: 10,
    opacity: 0.45,
  },
  groupChild11: {
    marginTop: -75.5,
  },
  groupChild12: {
    marginTop: -22.5,
  },
  groupChild13: {
    marginTop: -66,
    left: 22,
    borderStyle: 'dashed',
    borderRadius: 0.001,
    height: 38,
    top: '50%',
  },
  groupParent1: {
    top: 40,
  },
  groupParent4: {
    bottom: 20,
  },
  inr: {
    marginLeft: 52,
  },
  text1: {
    right: 33,
  },
  inr1: {
    marginLeft: 65,
  },
  text2: {
    right: 30,
  },
  groupView: {
    height: 524,
    top: 0,
    left: 1,
    right: 0,
    position: 'absolute',
  },
  groupContainer: {
    top: 8,
    left: 0,
    bottom: 50,
    right: 0,
    position: 'absolute',
  },
  groupWrapper: {
    top: 146,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    backgroundColor: Color.white,
  },
  groupParent: {
    left: 0,
    top: 0,
  },
  rectangleParent: {
    width: 394,
    height: 780,
  },
  transactions: {
    flex: 1,
    width: '100%',
    backgroundColor: Color.white,
  },
});

export default Transactions;
