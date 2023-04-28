import React, { useRef } from "react";
import { View, Text, Pressable, Animated, StyleSheet } from "react-native";

const Dropdown = ({ label, data, expanded, onPress }) => {
  const animation = useRef(new Animated.Value(0)).current;

  const toggleAnimation = () => {
    Animated.timing(animation, {
      toValue: expanded ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const rotateInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const contentInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, data.length * 40],
  });

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          onPress();
          toggleAnimation();
        }}
      >
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{label}</Text>
          <Animated.Text
            style={[
              styles.caret,
              { transform: [{ rotate: rotateInterpolate }] },
            ]}
          >
            ▼
          </Animated.Text>
        </View>
      </Pressable>
      {expanded && (
        <Animated.View
          style={[styles.contentContainer, { height: contentInterpolate }]}
        >
          {data.map((item) => (
            <Text key={item.id} style={styles.content}>
              {item.name}
            </Text>
          ))}
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginBottom: 10,
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 10,
  },
  caret: {
    fontSize: 14,
  },
  contentContainer: {
    overflow: "hidden",
  },
  content: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});

export default Dropdown;
