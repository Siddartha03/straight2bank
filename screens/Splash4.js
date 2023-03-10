import * as React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Color, FontFamily } from "../GlobalStyles";
import {useNavigation} from '@react-navigation/native';

const Splash4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.splash4}>
      <View style={styles.groupParent}>
        <TouchableOpacity style={styles.nextWrapper}
        onPress={() => navigation.navigate('Splash5')}
        >
          <Text style={[styles.next, styles.nextFlexBox]}>Next</Text>
        </TouchableOpacity>
        <View style={styles.groupContainer}>
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
            <Text
              style={[
                styles.straight2bank,
                styles.keepTrackOfTypo,
                styles.nextFlexBox,
              ]}
            >
              Straight2Bank
            </Text>
          </View>
          <Text style={[styles.skip, styles.skipTypo, styles.skipTypo1]}
            onPress={() => navigation.navigate('IPhone14Pro7')}
          >
            Skip
          </Text>
          <View style={styles.stayOnTrackParent}>
            <Text style={[styles.stayOnTrack, styles.skipTypo]}>
              Stay on track
            </Text>
            <Text
              style={[
                styles.keepTrackOf,
                styles.skipTypo1,
                styles.keepTrackOfTypo,
              ]}
            >{`Keep track of transaction status with just a
tap`}</Text>
          </View>
          <View style={styles.rectangleParent}>
            <View style={styles.groupChild} />
            <View style={styles.groupItem} />
            <View style={styles.groupInner} />
            <View style={[styles.rectangleView, styles.groupChild1Position]} />
            <View style={[styles.groupChild1, styles.groupChild1Position]} />
          </View>
          <View style={styles.groupWrapper}>
            <Image
              style={styles.groupIcon}
              resizeMode="cover"
              source={require("../assets/group-24.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nextFlexBox: {
    textAlign: "left",
    left: "50%",
  },
  iconLayout: {
    height: 22,
    width: 31,
    bottom: 4,
    position: "absolute",
  },
  keepTrackOfTypo: {
    color: Color.dimgray_200,
    fontFamily: FontFamily.muliSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  skipTypo: {
    fontFamily: FontFamily.muliBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  skipTypo1: {
    fontSize: 15,
    bottom: 0,
  },
  groupChild1Position: {
    bottom: 1,
    width: 15,
    backgroundColor: Color.lightsteelblue,
    borderRadius: 5,
    top: 0,
    position: "absolute",
  },
  next: {
    marginTop: -10.5,
    top: "50%",
    fontSize: 13,
    color: Color.white,
    fontFamily: FontFamily.muliSemibold,
    fontWeight: "600",
    textAlign: "left",
    marginLeft: -14,
    position: "absolute",
  },
  nextWrapper: {
    right: 12,
    borderRadius: 4,
    width: 244,
    height: 49,
    backgroundColor: Color.royalblue_200,
    bottom: 0,
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
    top: 0,
  },
  path1Parent: {
    right: 20,
    left: 20,
    height: 36,
    top: 0,
    position: "absolute",
  },
  skip: {
    left: 24,
    color: Color.royalblue_200,
  },
  stayOnTrack: {
    marginLeft: -67,
    fontSize: 21,
    color: Color.black,
    top: 0,
    left: "50%",
  },
  keepTrackOf: {
    textAlign: "center",
    left: 0,
  },
  stayOnTrackParent: {
    right: 25,
    bottom: 87,
    left: 25,
    height: 84,
    position: "absolute",
  },
  groupChild: {
    marginLeft: 11,
    width: 29,
    borderRadius: 5,
    top: 0,
    left: "50%",
    backgroundColor: Color.royalblue_200,
    bottom: 0,
    position: "absolute",
  },
  groupItem: {
    width: 15,
    backgroundColor: Color.lightsteelblue,
    top: 1,
    borderRadius: 5,
    left: 0,
    bottom: 0,
    position: "absolute",
  },
  groupInner: {
    marginLeft: -40,
    width: 16,
    backgroundColor: Color.lightsteelblue,
    top: 1,
    borderRadius: 5,
    left: "50%",
    bottom: 0,
    position: "absolute",
  },
  rectangleView: {
    left: "50%",
    marginLeft: -14,
    bottom: 1,
  },
  groupChild1: {
    right: 0,
  },
  rectangleParent: {
    marginLeft: -58,
    bottom: 66,
    width: 130,
    height: 8,
    left: "50%",
    position: "absolute",
  },
  groupIcon: {
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
  },
  groupWrapper: {
    top: 52,
    height: 356,
    left: 0,
    right: 0,
    position: "absolute",
  },
  groupContainer: {
    bottom: 15,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  groupParent: {
    width: 352,
    height: 643,
  },
  splash4: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    paddingLeft: 21,
    paddingTop: 61,
    paddingRight: 20,
    alignItems: "center",
  },
});

export default Splash4;
