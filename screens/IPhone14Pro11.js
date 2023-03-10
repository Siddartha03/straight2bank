import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily } from "../GlobalStyles";

const IPhone14Pro11 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14Pro11}>
      <View style={styles.rectangleParent}>
        <LinearGradient
          style={styles.groupChild}
          locations={[0, 1]}
          colors={["#0071eb", "#151f47"]}
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
        <View style={[styles.groupParent, styles.groupParentShadowBox]}>
          <View style={styles.tasksParent}>
            <Pressable
              style={styles.tasks}
              onPress={() => navigation.navigate("IPhone14Pro10")}
            >
              <Text style={styles.tasks1}>Tasks</Text>
            </Pressable>
            <Pressable
              style={[styles.iconAwesomeCheckParent, styles.groupChild1Border]}
              onPress={() => navigation.navigate("IPhone14Pro10")}
            >
              <Image
                style={[styles.iconAwesomeCheck, styles.iconPosition1]}
                resizeMode="cover"
                source={require("../assets/icon-awesomecheck.png")}
              />
              <Image
                style={[styles.iconAwesomeCheck1, styles.iconPosition1]}
                resizeMode="cover"
                source={require("../assets/icon-awesomecheck.png")}
              />
              <View style={[styles.groupInner, styles.lineViewPosition]} />
              <View style={[styles.lineView, styles.lineViewPosition]} />
            </Pressable>
          </View>
          <View style={styles.inboxParent}>
            <Text style={[styles.inbox, styles.inboxTypo]}>Inbox</Text>
            <View style={[styles.emailParent, styles.closeIconPosition]}>
              <Image
                style={[
                  styles.emailIcon,
                  styles.emailIconLayout,
                  styles.emailIconLayout1,
                ]}
                resizeMode="cover"
                source={require("../assets/email.png")}
              />
              <Image
                style={[
                  styles.emailIcon1,
                  styles.emailIconLayout,
                  styles.emailIconLayout1,
                ]}
                resizeMode="cover"
                source={require("../assets/email.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.cargilParent, styles.homeIconLayout]}>
          <Text style={[styles.cargil, styles.cargilTypo]}>CARGIL</Text>
          <Text style={[styles.cargi02, styles.cargilTypo]}>CARGI02</Text>
          <Image
            style={[styles.userIcon, styles.userIconLayout]}
            resizeMode="cover"
            source={require("../assets/user1.png")}
          />
          <Image
            style={[
              styles.buildingIcon,
              styles.iconPosition,
              styles.emailIconLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/building1.png")}
          />
          <View style={[styles.groupChild1, styles.groupChild1Border]} />
        </View>
        <View style={[styles.rectangleView, styles.groupParentShadowBox]}>
        <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        <Text style={[styles.accounts, styles.moreClr, styles.homeTypo]}>
          Accounts
        </Text>
        <Text style={[styles.transactio, styles.moreClr, styles.homeTypo]}>
          Transactio..
        </Text>
        <Text style={[styles.approvals, styles.moreClr, styles.homeTypo]}>
          Approvals
        </Text>
        <Text style={[styles.more, styles.moreClr, styles.homeTypo]}>More</Text>
        <Image
          style={[styles.homeIcon, styles.homeIconLayout]}
          resizeMode="cover"
          source={require("../assets/home.png")}
        />
        <Image
          style={[styles.iconIonicIosCheckmarkCircl, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/icon-ionicioscheckmarkcircleoutline1.png")}
        />
        <View style={[styles.rectangleGroup, styles.userIconLayout]}>
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
          <View
            style={[
              styles.groupChild4,
              styles.groupChildLayout,
              styles.groupChildBorder,
            ]}
          />
          <Image
            style={[styles.path10Icon, styles.groupChildLayout]}
            resizeMode="cover"
            source={require("../assets/path-10.png")}
          />
        </View>
        <Image
          style={styles.bankIcon}
          resizeMode="cover"
          source={require("../assets/bank.png")}
        />
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group-15.png")}
        />
        </View>
        <View style={styles.logoutParent}>
          <Pressable
            style={styles.logout}
            onPress={() => navigation.navigate("IPhone14Pro12")}
          >
            <Text style={[styles.logout1, styles.azarAliTypo]}>Logout</Text>
          </Pressable>
          <Image
            style={[styles.closeIcon, styles.closeIconPosition]}
            resizeMode="cover"
            source={require("../assets/close.png")}
          />
        </View>
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-31.png")}
        />
        <View style={styles.inboxComingSoonParent}>
          <Text
            style={[styles.inboxComingSoon, styles.moreClr, styles.inboxTypo]}
          >
            Inbox Coming Soon!
          </Text>
          <Text
            style={[styles.wereWorkingHard, styles.moreClr]}
          >{`We're working hard on the inbox Section. Feel
free to leae any suggestions here.`}</Text>
          <Image
            style={styles.whatsappImage20230309At1}
            resizeMode="cover"
            source={require("../assets/whatsapp-image-20230309-at-190921.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  azarAliTypo: {
    textAlign: "left",
    fontSize: 18,
    color: Color.white,
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: "600",
  },
  groupParentShadowBox: {
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: "rgba(0, 0, 0, 0.16)",
    position: "absolute",
    backgroundColor: Color.white,
  },
  groupChild1Border: {
    borderColor: "#007afd",
    borderStyle: "solid",
    position: "absolute",
  },
  iconPosition1: {
    height: 5,
    width: 7,
    marginLeft: -8.27,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  lineViewPosition: {
    height: 3,
    width: 8,
    borderTopWidth: 1.5,
    marginLeft: 0.5,
    left: "50%",
    borderColor: "#007afd",
    borderStyle: "solid",
    top: "50%",
    position: "absolute",
  },
  inboxTypo: {
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    left: "50%",
    fontSize: 20,
    top: "50%",
    textAlign: "left",
  },
  closeIconPosition: {
    marginTop: -13,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  emailIconLayout: {
    maxHeight: "100%",
    top: 0,
  },
  emailIconLayout1: {
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
    bottom: 0,
    position: "absolute",
  },
  homeIconLayout: {
    height: 20,
    position: "absolute",
  },
  cargilTypo: {
    fontSize: 16,
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.white,
    top: 0,
    position: "absolute",
  },
  userIconLayout: {
    height: 16,
    position: "absolute",
  },
  iconPosition: {
    width: 18,
    left: "50%",
    position: "absolute",
  },
  homeTypo: {
    fontSize: 12,
    bottom: 16,
    textAlign: "left",
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: "600",
  },
  moreClr: {
    color: Color.black,
    position: "absolute",
  },
  groupChildLayout: {
    height: 7,
    width: 7,
    position: "absolute",
  },
  groupChildBorder: {
    borderWidth: 1.2,
    borderColor: "#000",
    height: 7,
    borderStyle: "solid",
    borderRadius: 2,
    backgroundColor: Color.white,
  },
  groupChild: {
    bottom: 42,
    backgroundColor: "transparent",
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  welcomeBack: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  azarAli: {
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  welcomeBackParent: {
    top: 52,
    left: 33,
    width: 128,
    height: 54,
    position: "absolute",
  },
  groupItem: {
    top: 232,
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  tasks1: {
    color: Color.royalblue_100,
    fontSize: 20,
    textAlign: "left",
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: "600",
  },
  tasks: {
    right: -1,
    top: 0,
    position: "absolute",
  },
  iconAwesomeCheck: {
    marginTop: -6.71,
  },
  iconAwesomeCheck1: {
    marginTop: 1.29,
  },
  groupInner: {
    marginTop: -5.5,
  },
  lineView: {
    marginTop: 2.5,
  },
  iconAwesomeCheckParent: {
    borderWidth: 2.5,
    width: 25,
    borderRadius: 2,
    borderStyle: "solid",
    top: 1,
    bottom: 0,
    left: 0,
  },
  tasksParent: {
    marginTop: -12.5,
    left: 46,
    width: 95,
    height: 27,
    top: "50%",
    position: "absolute",
  },
  inbox: {
    marginTop: -14,
    marginLeft: -5.5,
    color: Color.white,
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    position: "absolute",
  },
  emailIcon: {
    left: 1,
    right: 0,
  },
  emailIcon1: {
    right: 1,
    left: 0,
  },
  emailParent: {
    marginLeft: -42.5,
    height: 24,
    width: 25,
  },
  inboxParent: {
    top: 9,
    right: 5,
    bottom: 10,
    borderRadius: 25,
    backgroundColor: Color.royalblue_200,
    width: 169,
    position: "absolute",
  },
  groupParent: {
    marginTop: -203,
    right: 15,
    left: 20,
    borderRadius: 37,
    height: 71,
    top: "50%",
  },
  cargil: {
    left: 22,
  },
  cargi02: {
    right: -1,
  },
  userIcon: {
    width: 16,
    top: 1,
    height: 16,
    left: 0,
  },
  buildingIcon: {
    marginLeft: 17,
    bottom: 2,
  },
  groupChild1: {
    marginLeft: 1.5,
    top: -1,
    bottom: 3,
    borderRightWidth: 2,
    width: 4,
    left: "50%",
  },
  cargilParent: {
    marginTop: -252,
    left: 34,
    width: 220,
    top: "50%",
  },
  rectangleView: {
    height: 65,
    bottom: 50,
    left: 0,
    right: 0,
  },
  home: {
    left: 24,
    color: Color.royalblue_100,
    position: "absolute",
  },
  accounts: {
    marginLeft: -99.5,
    left: "50%",
  },
  transactio: {
    marginLeft: -22.5,
    left: "50%",
  },
  approvals: {
    marginLeft: 66.5,
    left: "50%",
  },
  more: {
    right: 19,
  },
  homeIcon: {
    bottom: 38,
    left: 30,
    width: 20,
  },
  iconIonicIosCheckmarkCircl: {
    marginLeft: 87.5,
    bottom: 39,
    height: 18,
  },
  groupChild2: {
    left: 0,
    top: 0,
  },
  groupChild3: {
    right: 0,
    top: 0,
  },
  groupChild4: {
    bottom: 0,
    left: 0,
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
  bankIcon: {
    marginLeft: -83.5,
    bottom: 37,
    width: 21,
    height: 21,
    left: "50%",
    position: "absolute",
  },
  groupIcon: {
    bottom: 35,
    width: 23,
    height: 23,
    marginLeft: 0.5,
    left: "50%",
    position: "absolute",
  },
  logout1: {
    marginTop: -11,
    marginLeft: -11.5,
  },
  logout: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  closeIcon: {
    marginLeft: -46.5,
    width: 28,
    height: 28,
  },
  logoutParent: {
    top: 38,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: Color.cornflowerblue_100,
    width: 139,
    height: 50,
    right: 0,
    position: "absolute",
  },
  ellipseIcon: {
    marginTop: -38,
    marginLeft: -41.5,
    width: 79,
    height: 79,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  inboxComingSoon: {
    marginTop: 25.5,
    marginLeft: -107,
  },
  wereWorkingHard: {
    fontSize: 15,
    textAlign: "center",
    opacity: 0.6,
    bottom: 0,
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: "600",
    color: Color.black,
    left: 0,
  },
  whatsappImage20230309At1: {
    marginLeft: -45,
    width: 89,
    height: 80,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  inboxComingSoonParent: {
    marginTop: -35,
    right: 35,
    left: 36,
    height: 227,
    top: "50%",
    position: "absolute",
  },
  rectangleParent: {
    width: 393,
    height: 780,
  },
  iphone14Pro11: {
    flex: 1,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default IPhone14Pro11;
