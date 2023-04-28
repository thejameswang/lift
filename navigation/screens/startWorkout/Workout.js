import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  SafeAreaView,
  Pressable,
  Animated,
} from "react-native";
import React, { useState, useEffect } from "react";

import Ionicons from "react-native-vector-icons/Ionicons";
import Dropdown from "../components/Dropdown";

export default function WorkoutScreen({ route, navigation }) {
  const { id, title, description, content, exercises } = route.params.item;

  const [isOpen, setIsOpen] = useState(false);
  const [dropdownHeight, setDropdownHeight] = useState(0);
  const [dropdownAnimatedHeight, setDropdownAnimatedHeight] = useState(
    new Animated.Value(0)
  );
  const items = ["Item 1", "Item 2", "Item 3"];

  useEffect(() => {
    if (isOpen) {
      Animated.timing(dropdownAnimatedHeight, {
        toValue: dropdownHeight,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(dropdownAnimatedHeight, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [isOpen, dropdownHeight, dropdownAnimatedHeight]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const onLayout = (event) => {
    setDropdownHeight(event.nativeEvent.layout.height);
  };

  const [count, setCount] = useState({ count: 1, max: 1, repititions: 0 });

  const incrementCount = () => {
    setCount(count.count + 1);
  };

  const resetCount = () => {
    setCount((count.count = 0));
  };
  const incrementMax = () => {
    setCount(count.max + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.scrollViewContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>{title}</Text>
            <Text style={styles.headerDescription}>{description}</Text>
            <Pressable style={styles.startButton}>
              <Text style={styles.startText}>Start</Text>
            </Pressable>
          </View>
          <View style={styles.exercisesContainer}>
            <View style={styles.exercisesHeaderContainer}>
              <Text style={styles.exercisesHeader}>Exercises</Text>
              <Pressable>
                <Ionicons
                  style={styles.icon}
                  name="add-circle-outline"
                  size="20"
                />
              </Pressable>
            </View>
            <View style={styles.exercisesListContainer}>
              {exercises.map((item, index) => {
                return (
                  <Dropdown
                    pressing={toggleDropdown}
                    laid={onLayout}
                    isOpen={isOpen}
                    dropdownHeight={dropdownAnimatedHeight}
                    incrementMax={incrementMax}
                    item={item}
                    key={item.id}
                  />
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

{
  /* <View key={item.id} style={styles.exerciseContainer}>
                  <Pressable style={styles.exerciseButtonContainer}>
                    <View style={styles.exerciseOverviewContainer}>
                      <Text style={styles.exerciseName}>{item.name}</Text>
                    </View>
                    <View style={styles.exerciseRepetition}>
                      <View style={styles.repitionContainer}>
                        {item.sets.map((set) => {
                          if (set.weight === setCounter.repititions) {
                            setCounter.count += 1;
                          } else {
                            setCounter.weight = set.weight;
                            setCounter.count = 1;
                          }
                          setCounter.max += 1;
                          return (
                            <Text key={set.number} style={styles.repitionText}>
                              {set.weight}x{set.repititions}
                            </Text>
                          );
                        })}
                      </View>
                      <Ionicons
                        style={styles.repitionText}
                        name="caret-down"
                        size="20"
                      />
                    </View>
                  </Pressable>
                </View> */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: { width: "100%" },
  scrollContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  scrollViewContainer: {
    width: "85%",
  },

  // Header
  headerContainer: {
    width: "100%",
    marginTop: 30,
    backgroundColor: "#B31C45",
    borderRadius: 8,
  },
  headerTitle: {
    color: "white",
    marginTop: 25,
    fontSize: 25,
    marginLeft: 10,
  },
  headerDescription: {
    color: "white",
    marginTop: 5,
    fontSize: 15,
    marginLeft: 10,
    marginBottom: 15,
  },

  startButton: {
    backgroundColor: "white",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  startText: {
    color: "#B31C45",
  },

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
    marginBottom: 50,
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
