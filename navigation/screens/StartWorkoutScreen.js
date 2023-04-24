import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
  Platform,
  Pressable,
} from "react-native";
import StartScreen from "./startWorkout/Start";
import WorkoutScreen from "./startWorkout/Workout";
import TrackerScreen from "./startWorkout/Tracker";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function StartWorkoutScreen({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName={StartScreen}
      screenOptions={({ route }) => ({})}
    >
      <Stack.Screen
        name="Start"
        options={() => ({
          title: "Project L",
          headerTintColor: "#F2F2F2",
          headerStyle: {
            backgroundColor: "#212121",
            borderWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
          },
        })}
        component={StartScreen}
      />
      <Stack.Screen
        name="Workout"
        options={() => ({
          title: "Project L",
          headerTintColor: "#F2F2F2",
          headerStyle: {
            backgroundColor: "#212121",
            borderWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
          },
        })}
        component={WorkoutScreen}
      />
      <Stack.Screen
        name="Tracker"
        options={() => ({
          headerShown: true,
          title: "Project L",
          headerTintColor: "#F2F2F2",
          headerStyle: {
            backgroundColor: "#212121",
            borderWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
          },
        })}
        component={TrackerScreen}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "white",
    height: "100%",
    backgroundColor: "#212121",
    justifyContent: "center",
    alignItems: "center",
  },
});
