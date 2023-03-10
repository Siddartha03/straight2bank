import * as React from "react";
import { Pressable, Text, StyleSheet, View, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily } from "../GlobalStyles";

const IPhone14Pro8 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14Pro8}>
      <View style={styles.groupParent}>
        <View style={styles.howCanWeHelpYouParent}>
          <Pressable
            style={styles.howCanWeContainer}
            onPress={() => navigation.navigate("IPhone14Pro7")}
          >
            <Text style={styles.howCanWeHelpYou}>How can we help you?</Text>
          </Pressable>
          {/* <Pressable
            style={styles.groupChild}
            onPress={() => navigation.navigate("IPhone14Pro7")}
          /> */}
        </View>
        <View style={[styles.groupItem, styles.groupBorder]} />
        <View style={[styles.howDoIRegisterParent, styles.howParentPosition1]}>
          <Text style={[styles.howDoI, styles.howDoITypo]}>
            How do I register?
          </Text>
          <Image
            style={[styles.iconIonicIosArrowForward, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-ioniciosarrowforward3.png")}
          />
          <View
            style={[
              styles.groupInner,
              styles.groupInnerPosition,
              styles.groupBorder,
            ]}
          />
        </View>
        <View
          style={[
            styles.howDoILoginParent,
            styles.howParentPosition,
            styles.howParentPosition1,
          ]}
        >
          <Text style={[styles.howDoI, styles.howDoITypo]}>
            How do I login?
          </Text>
          <Image
            style={[styles.iconIonicIosArrowForward, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-ioniciosarrowforward3.png")}
          />
          <View
            style={[
              styles.groupInner,
              styles.groupInnerPosition,
              styles.groupBorder,
            ]}
          />
        </View>
        <View
          style={[
            styles.howDoINavigateTheLoginScParent,
            styles.howParentPosition,
            styles.howParentPosition1,
          ]}
        >
          <Text style={[styles.howDoI, styles.howDoITypo]}>
            How do I navigate the login screen?
          </Text>
          <Image
            style={[styles.iconIonicIosArrowForward, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-ioniciosarrowforward3.png")}
          />
          <View
            style={[
              styles.groupInner,
              styles.groupInnerPosition,
              styles.groupBorder,
            ]}
          />
        </View>
        <View
          style={[
            styles.howDoIManageIdsParent,
            styles.howParentPosition,
            styles.howParentPosition1,
          ]}
        >
          <Text style={[styles.howDoI, styles.howDoITypo]}>
            How do I manage IDs?
          </Text>
          <Image
            style={[styles.iconIonicIosArrowForward, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-ioniciosarrowforward3.png")}
          />
          <View
            style={[
              styles.groupInner,
              styles.groupInnerPosition,
              styles.groupBorder,
            ]}
          />
        </View>
        <View
          style={[
            styles.howToUseDigitalTokenParent,
            styles.howParentPosition,
            styles.howParentPosition1,
          ]}
        >
          <Text style={[styles.howDoI, styles.howDoITypo]}>
            How to use digital token?
          </Text>
          <Image
            style={[styles.iconIonicIosArrowForward, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-ioniciosarrowforward3.png")}
          />
          <View
            style={[
              styles.groupInner,
              styles.groupInnerPosition,
              styles.groupBorder,
            ]}
          />
        </View>
        <View
          style={[styles.termsAndConditionsParent, styles.howParentPosition]}
        >
          <Text style={[styles.termsAndConditions, styles.howDoITypo]}>
            Terms and Conditions
          </Text>
          <Image
            style={[styles.groupInnerPosition, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-ioniciosarrowforward3.png")}
          />
        </View>
        <LinearGradient
          style={[styles.rectangleLineargradient, styles.groupInnerPosition]}
          locations={[0, 1]}
          colors={["#0071eb", "#151f47"]}
          useAngle={true}
          angle={-88.2}
        />
        <Text
          style={styles.cantFindWhat}
        >{`Can't find what you are looking for? Ask us
anything about Straight2Bank`}</Text>
        <View style={styles.rectangleView} />
        <Text style={[styles.contactUs, styles.contactUsTypo]}>Contact us</Text>
        <Text style={[styles.orVisitOur, styles.contactUsTypo]}>
          Or Visit our support center
        </Text>
        <Image
          style={[styles.whatsappImage20230309At1, styles.howParentPosition]}
          resizeMode="cover"
          source={require("../assets/whatsapp-image-20230309-at-180317.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupBorder: {
    opacity: 0.27,
    borderColor: "#707070",
    borderStyle: "solid",
  },
  howParentPosition1: {
    height: 39,
    left: 1,
    right: 1,
  },
  howDoITypo: {
    fontSize: 16,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.mulishMedium,
    fontWeight: "500",
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 13,
    width: 8,
    top: 2,
  },
  groupInnerPosition: {
    right: 0,
    position: "absolute",
  },
  howParentPosition: {
    top: "50%",
    position: "absolute",
  },
  contactUsTypo: {
    color: Color.darkslateblue,
    fontSize: 17,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  howCanWeHelpYou: {
    fontSize: 20,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.mulishMedium,
    fontWeight: "500",
  },
  howCanWeContainer: {
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    marginLeft: -38,
    top: -4,
    borderTopWidth: 4,
    width: 72,
    height: 8,
    opacity: 0.36,
    borderColor: "#707070",
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
  },
  howCanWeHelpYouParent: {
    marginLeft: -118.5,
    width: 209,
    height: 36,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  groupItem: {
    top: 55,
    borderRadius: 9,
    shadowColor: "#969696",
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderWidth: 1,
    height: 379,
    right: 1,
    opacity: 0.27,
    left: 0,
    position: "absolute",
  },
  howDoI: {
    left: 24,
  },
  iconIonicIosArrowForward: {
    right: 23,
    position: "absolute",
  },
  groupInner: {
    bottom: -1,
    left: -1,
    borderTopWidth: 1,
    height: 2,
  },
  howDoIRegisterParent: {
    top: 87,
    position: "absolute",
  },
  howDoILoginParent: {
    marginTop: -190.25,
  },
  howDoINavigateTheLoginScParent: {
    marginTop: -130.25,
  },
  howDoIManageIdsParent: {
    marginTop: -70.25,
  },
  howToUseDigitalTokenParent: {
    marginTop: -10.25,
  },
  termsAndConditions: {
    left: 0,
    fontSize: 16,
  },
  termsAndConditionsParent: {
    marginTop: 49.75,
    height: 20,
    right: 23,
    left: 24,
  },
  rectangleLineargradient: {
    bottom: 33,
    borderRadius: 10,
    height: 167,
    backgroundColor: "transparent",
    left: 1,
    right: 0,
  },
  cantFindWhat: {
    marginTop: 181.75,
    left: 53,
    fontSize: 13,
    fontFamily: FontFamily.mulishRegular,
    color: Color.white,
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  rectangleView: {
    bottom: 61,
    borderRadius: 5,
    height: 43,
    right: 23,
    left: 24,
    position: "absolute",
    backgroundColor: Color.white,
  },
  contactUs: {
    marginLeft: -43.5,
    bottom: 73,
    fontWeight: "700",
    fontFamily: FontFamily.mulishBold,
  },
  orVisitOur: {
    marginLeft: -103.5,
    fontFamily: FontFamily.mulishMedium,
    fontWeight: "500",
    color: Color.darkslateblue,
    fontSize: 17,
    bottom: 0,
  },
  whatsappImage20230309At1: {
    marginTop: 90.75,
    marginLeft: -58.54,
    width: 117,
    height: 82,
    left: "50%",
  },
  groupParent: {
    width: 361,
    height: 674,
  },
  iphone14Pro8: {
    flex: 1,
    width: "100%",
    paddingLeft: 16,
    paddingTop: 35,
    paddingRight: 16,
    backgroundColor: Color.white,
  },
});

export default IPhone14Pro8;
