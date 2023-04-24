import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import workouttemplates from "../../../data/workouttemplates.json";

export default function StartScreen({ navigation }) {
  const onPressWorkoutTemplate = (item) => {
    console.log("on press" + item.id);
    navigation.navigate("Workout", { item });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.activeContainer}>
        <Text style={styles.title}>Start a Workout</Text>
        <View style={styles.allWorkouts}>
          {workouttemplates.map((item) => {
            return (
              <Pressable
                style={styles.workoutContainer}
                key={item.id}
                onPress={() => onPressWorkoutTemplate(item)}
              >
                {({ pressed }) => (
                  <>
                    <Text style={styles.workoutText}>{item.title}</Text>
                    <Text numberOfLines={1} style={styles.workoutDescription}>
                      {item.description}
                    </Text>
                  </>
                )}
              </Pressable>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
    borderWidth: 1,
    borderColor: "white",
    // justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  activeContainer: {
    width: "90%",
  },
  allWorkouts: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
    marginTop: 20,
  },
  workoutContainer: {
    flexBasis: "45%",
    height: 160,
    borderRadius: 8,
    backgroundColor: "#B31C45",
    margin: "2%",
    justifyContent: "flex-end",
    padding: 5,
  },
  workoutText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  workoutDescription: {
    color: "white",
  },
});
