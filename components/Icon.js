import React from "react";
import { StyleSheet, View, Image } from "react-native";
// import images from "../assets/icons";

const Icon = (props) => {
  let iconName = props.iconName;
  let width = props.width;
  let height = props.height;
  let size = props.height;
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

//   renderIcon = (iconName, width, height) => {
//     iconName = this.props.iconName;
//     width = this.props.width;
//     height = this.props.height;
//     return (
//       <Image
//         style={(width, height)}
//         source={require(`../assets/icons/${iconName}.png`)}
//       />
//     );
//   };

//   render() {
//     <View>{this.renderIcon}</View>;
//   }
