import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Dropdown from "./components/anotherDropdown";

const GroupsScreen = ({ dropdownData }) => {
  dropdownData = [{ id: 1, data: { length: 1 } }];
  const [expandedIds, setExpandedIds] = useState([]);

  useEffect(() => {
    // initialize the expandedIds array with the same length as dropdownData and set all values to false
    setExpandedIds(Array(dropdownData.length).fill(false));
  }, [dropdownData]);

  const toggleDropdown = (index) => {
    setExpandedIds((prevState) => {
      const newState = [...prevState];
      newState[index] = !prevState[index];
      return newState;
    });
  };

  return (
    <View style={styles.container}>
      {dropdownData.map((item, index) => (
        <Dropdown
          key={item.id}
          label={item.label}
          data={item.data}
          expanded={expandedIds[index]}
          onPress={() => toggleDropdown(index)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default GroupsScreen;
