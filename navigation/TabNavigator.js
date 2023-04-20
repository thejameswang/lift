import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";
// import Icon from "./components/Icon";

import FeedScreen from "./screens/FeedScreen";
import WorkoutScreen from "./screens/WorkoutScreen";
import StartWorkoutScreen from "./screens/StartWorkoutScreen";
import GroupsScreen from "./screens/GroupsScreen";
import YouScreen from "./screens/YouScreen";

const feedName = "Feed";
const workoutName = "Workout";
const startWorkoutName = "Project L";
const groupsName = "Groups";
const youName = "You";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={startWorkoutName}
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: 90,
          paddingHorizontal: 5,
          paddingTop: 0,
          backgroundColor: "#313131",
          position: "absolute",
          borderTopWidth: 0,
        },
        headerStyle: {
          backgroundColor: "#212121",
          borderWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: "#F2F2F2",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;
          let style;

          if (rn === feedName) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === workoutName) {
            iconName = focused ? "barbell" : "barbell-outline";
          } else if (rn === startWorkoutName) {
            iconName = focused ? "ellipse-outline" : "ellipse";
            size = 60;
            style = {
              color: "#FFEEF3",
              // width: "100%",
              lineHeight: size,
              height: size,
              width: size,
              backgroundColor: "#B31C45",
              borderRadius: 30,
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              paddingLeft: 2,
              paddingTop: 3,
              bottom: 10,
              zIndex: 1,
              textAlign: "center",
              alignSelf: "center",
            };
          } else if (rn === groupsName) {
            iconName = focused ? "people" : "people-outline";
          } else if (rn === youName) {
            iconName = focused ? "person" : "person-outline";
          }
          return (
            <Ionicons style={style} name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: "#B31C45",
        tabBarInactiveTintColor: "#F2F2F2",
      })}
    >
      <Tab.Screen name={feedName} component={FeedScreen} />
      <Tab.Screen name={workoutName} component={WorkoutScreen} />
      <Tab.Screen name={startWorkoutName} component={StartWorkoutScreen} />
      <Tab.Screen name={groupsName} component={GroupsScreen} />
      <Tab.Screen name={youName} component={YouScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
