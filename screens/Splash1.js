import * as React from "react";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";
import { Color } from "../GlobalStyles";
import {useNavigation} from '@react-navigation/native';

const Splash1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.splash1}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Splash2')}
      >
      <Image
        style={styles.splash1Child}
        resizeMode="cover"
        source={require("../assets/group-32.png")}
      />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  splash1Child: {
    width: 373,
    height: 643,
  },
  splash1: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    paddingTop: 59,
    paddingRight: 20,
  },
});

export default Splash1;
