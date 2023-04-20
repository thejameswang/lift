import React from "react";
import { StyleSheet, View, Image } from "react-native";
// import images from "../assets/icons";

const Icon = (props) => {
  let iconName = props.iconName;

  return (
    <View>
      <Image
        style={{ width: "100%", height: "100%" }}
        source={images[iconName]}
      />
    </View>
  );
};

export default Icon;
