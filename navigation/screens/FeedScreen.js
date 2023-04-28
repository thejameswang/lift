import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import DropdownChild from "./components/TestDropdown";

const DropdownParent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const options = ["Option 1", "Option 2", "Option 3"];

  useEffect(() => {
    setIsOpen(false); // close all dropdowns when one is opened
  }, [selected]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dropdowns:</Text>
      {options.map((option, index) => (
        <DropdownChild
          key={index}
          label={option}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default DropdownParent;
