import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, Animated } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Dropdown(props) {
  const { item, incrementMax } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const [dropdownHeight, setDropdownHeight] = useState(new Animated.Value(0));

  const toggleDropdown = () => {
    setIsExpanded(!isExpanded);
    Animated.timing(dropdownHeight, {
      toValue: isExpanded ? 0 : 100,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View key={item.id} style={styles.exerciseContainer}>
      <Pressable
        style={styles.exerciseButtonContainer}
        onPress={toggleDropdown}
      >
        {({ pressed }) => (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.exerciseOverviewContainer}>
              <Text style={styles.exerciseName}>{item.name}</Text>
            </View>
            <View style={styles.exerciseRepetition}>
              <View style={styles.repitionContainer}>
                {item.sets.map((set) => {
                  //   if (set.weight === setCounter.repititions) {
                  //     setCounter.count += 1;
                  //   } else {
                  //     setCounter.weight = set.weight;
                  //     setCounter.count = 1;
                  //   }
                  incrementMax();
                  return (
                    <Text key={set.number} style={styles.repitionText}>
                      {set.weight}x{set.repititions}
                    </Text>
                  );
                })}
              </View>
              <Animated.View
                style={{
                  transform: [{ rotate: isExpanded ? "180deg" : "0deg" }],
                  opacity: pressed ? 0.5 : 1,
                }}
              >
                <Ionicons
                  style={styles.repitionText}
                  name="caret-down"
                  size="20"
                />
              </Animated.View>
            </View>
          </View>
        )}
      </Pressable>
      <Animated.View
        style={{ backgroundColor: "#2F2F30", height: dropdownHeight }}
      >
        <Pressable onPress={() => console.log("Option 1")}>
          {({ pressed }) => (
            <View style={{ paddingVertical: 10, opacity: pressed ? 0.5 : 1 }}>
              <Text style={{ fontSize: 16 }}>Option 1</Text>
            </View>
          )}
        </Pressable>
        <Pressable onPress={() => console.log("Option 2")}>
          {({ pressed }) => (
            <View style={{ paddingVertical: 10, opacity: pressed ? 0.5 : 1 }}>
              <Text style={{ fontSize: 16 }}>Option 2</Text>
            </View>
          )}
        </Pressable>
        <Pressable onPress={() => console.log("Option 3")}>
          {({ pressed }) => (
            <View style={{ paddingVertical: 10, opacity: pressed ? 0.5 : 1 }}>
              <Text style={{ fontSize: 16 }}>Option 3</Text>
            </View>
          )}
        </Pressable>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Exercises List
  exercisesContainer: {
    marginTop: 40,
  },
  exercisesHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  exercisesHeader: {
    color: "white",
    fontSize: 20,
  },
  icon: {
    color: "#B31C45",
    fontSize: 20,
  },
  exercisesListContainer: {
    marginTop: 20,
  },
  exerciseContainer: {
    borderRadius: 8,
    width: "100%",
    backgroundColor: "#B31C45",
    marginBottom: 20,
  },
  exerciseButtonContainer: {
    backgroundColor: "#B31C45",
    minHeight: 80,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
  exerciseOverviewContainer: {
    flex: 2,
  },
  exerciseName: {
    color: "white",
  },
  exerciseRepetition: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  repitionText: {
    color: "white",
    fontWeight: "200",
  },
  repitionContainer: {
    marginRight: 10,
    margin: 5,
  },
});
