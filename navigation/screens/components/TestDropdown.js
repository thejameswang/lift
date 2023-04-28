import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

const DropdownChild = ({ label, isOpen, setIsOpen, selected, setSelected }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePress = () => {
    setSelected(label);
    setIsOpen(true);
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handlePress}>
        <View style={styles.dropdown}>
          <Text>{label}</Text>
          <Text>{isExpanded ? "▲" : "▼"}</Text>
        </View>
      </Pressable>
      {isExpanded && (
        <View style={styles.expanded}>
          <Text>More information about {label}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 10,
  },
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#eee",
    borderRadius: 5,
  },
  expanded: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#ddd",
    borderRadius: 5,
  },
});

export default DropdownChild;
