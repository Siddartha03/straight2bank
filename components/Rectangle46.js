import * as React from "react";
import { StatusBar, StyleProp, ViewStyle, StyleSheet } from "react-native";

const RectangleComponent = ({ style }) => {
  return <StatusBar style={style} barStyle="default" />;
};

const styles = StyleSheet.create({});

export default RectangleComponent;
