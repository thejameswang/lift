import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";

import StartWorkoutScreen from "./screens/StartWorkoutScreen";
import FeedScreen from "./screens/FeedScreen";
import Navbar from "./components/Navbar";

const feedName = "Feed";
const workoutName = "Workout";
const startWorkoutName = "StartWorkout";
const groupsName = "Groups";
const youName = "You";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={startWorkoutName}
        style={{ backgroundColor: "#313131" }}
        screenOptions={({ route }) => ({
          tabBarStyle: {
            height: 90,
            paddingHorizontal: 5,
            paddingTop: 0,
            backgroundColor: "#313131",
            position: "absolute",
            borderTopWidth: 0,
          },
          tabBarIcons: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === feedName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === workoutName) {
              iconName = focused ? "barbell" : "barbell-outline";
            } else if (rn === startWorkoutName) {
              iconName = focused ? "ellipse" : "ellipse-outline";
            } else if (rn === groupsName) {
              iconName = focused ? "people" : "people-outline";
            } else if (rn === youName) {
              iconName = focused ? "person" : "person-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#B31C45",
          tabBarInactiveTintColor: "#F2F2F2",
        })}
      >
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Start Workout" component={StartWorkoutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
