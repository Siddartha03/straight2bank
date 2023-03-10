import * as React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Color, FontFamily } from "../GlobalStyles";
import {useNavigation} from '@react-navigation/native';

const Splash5 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.splash5}>
      <View style={styles.groupParent}>
        <View style={styles.path1Parent}>
          <Image
            style={[styles.path1Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/path-12.png")}
          />
          <Image
            style={[styles.path2Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/path-21.png")}
          />
          <Text style={[styles.straight2bank, styles.straight2bankTypo]}>
            Straight2Bank
          </Text>
        </View>
        <View style={[styles.stayEfficientOnTheGoParent, styles.donePosition]}>
          <Text style={styles.stayEfficientOn}>Stay efficient on the go</Text>
          <Text
            style={[
              styles.approveYourPayments,
              styles.groupIconPosition,
              styles.straight2bankTypo,
            ]}
          >
            Approve your payments anytime, anywhere.
          </Text>
        </View>
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <View style={[styles.groupItem, styles.groupPosition]} />
          <View style={styles.groupInner} />
          <View style={[styles.rectangleView, styles.groupPosition]} />
          <View style={[styles.groupChild1, styles.groupPosition]} />
        </View>
        <TouchableOpacity style={[styles.doneWrapper, styles.groupChildPosition]}
            onPress={() => navigation.navigate('IPhone14Pro7')}
        >
          <Text style={[styles.done, styles.donePosition]}>Done</Text>
        </TouchableOpacity>
        <View style={styles.groupWrapper}>
          <Image
            style={[styles.groupIcon, styles.groupIconPosition]}
            resizeMode="cover"
            source={require("../assets/group-25.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 22,
    width: 31,
    bottom: 4,
    position: "absolute",
  },
  straight2bankTypo: {
    color: Color.dimgray_200,
    fontFamily: FontFamily.muliSemibold,
    fontWeight: "600",
  },
  donePosition: {
    top: "50%",
    position: "absolute",
  },
  groupIconPosition: {
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  groupChildPosition: {
    backgroundColor: Color.royalblue_200,
    bottom: 0,
    right: 0,
    position: "absolute",
  },
  groupPosition: {
    width: 15,
    backgroundColor: Color.lightsteelblue,
    bottom: 1,
    borderRadius: 5,
    top: 0,
    position: "absolute",
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
    textAlign: "left",
    left: "50%",
    top: 0,
    position: "absolute",
  },
  path1Parent: {
    right: 20,
    left: 20,
    height: 36,
    top: 0,
    position: "absolute",
  },
  stayEfficientOn: {
    left: 39,
    fontSize: 21,
    fontWeight: "700",
    fontFamily: FontFamily.muliBold,
    color: Color.black,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  approveYourPayments: {
    fontSize: 15,
    textAlign: "center",
  },
  stayEfficientOnTheGoParent: {
    marginTop: 143.5,
    right: 21,
    left: 21,
    height: 58,
  },
  groupChild: {
    width: 29,
    borderRadius: 5,
    backgroundColor: Color.royalblue_200,
    top: 0,
  },
  groupItem: {
    left: 0,
  },
  groupInner: {
    marginLeft: -40,
    width: 16,
    backgroundColor: Color.lightsteelblue,
    bottom: 1,
    borderRadius: 5,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  rectangleView: {
    marginLeft: -14,
    left: "50%",
  },
  groupChild1: {
    marginLeft: 11,
    left: "50%",
  },
  rectangleParent: {
    marginLeft: -58.07,
    bottom: 78,
    width: 130,
    height: 8,
    left: "50%",
    position: "absolute",
  },
  done: {
    marginTop: -7.5,
    marginLeft: -20.5,
    fontSize: 13,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.muliSemibold,
    fontWeight: "600",
    top: "50%",
    left: "50%",
  },
  doneWrapper: {
    left: 7,
    borderRadius: 4,
    height: 49,
  },
  groupIcon: {
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    right: 0,
    top: 0,
  },
  groupWrapper: {
    top: 40,
    height: 356,
    right: 0,
    left: 0,
    position: "absolute",
  },
  groupParent: {
    width: 352,
    height: 641,
  },
  splash5: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    paddingLeft: 21,
    paddingTop: 61,
    paddingRight: 20,
    alignItems: "flex-end",
  },
});

export default Splash5;
