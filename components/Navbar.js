import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Alert,
  Platform,
  Pressable,
} from "react-native";

import images from "../assets/icons";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

const Navbar = ({ navigation }) => {
  console.log(useDeviceOrientation());
  const handlePress = () => {
    console.log("image pressed");
  };

  const handleYesPress = () => {
    console.log("you is a bitch");
  };

  const handleNoPress = () => {
    console.log("you probably still a bitch");
  };
  const handleButtonPress = () => {
    if (Platform.OS === "web") {
      alert("love me");
    } else {
      Alert.prompt("My title", "my message", (text) => console.log(text));
    }
  };

  return (
    <View style={styles.NavContainer}>
      <View style={styles.NavBar}>
        <Pressable
          onPress={() => navigation.navigate("Feed")}
          android_ripple={{ borderless: true, radius: 50 }}
          style={styles.IconBehave}
        >
          <Image
            style={{ height: 24, width: 23, marginBottom: 10 }}
            source={images.home}
          />
          <Text style={{ color: "white" }}>Feed</Text>
        </Pressable>
        <Pressable
          onPress={() => console.log("hello")}
          android_ripple={{ borderless: true, radius: 50 }}
          style={styles.IconBehave}
        >
          <Image
            style={{ height: 25, width: 25, marginBottom: 10 }}
            source={images.workout}
          />
          <Text style={{ color: "white" }}>Workout</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Start")}
          style={styles.roundButton}
        ></Pressable>
        <Pressable
          onPress={() => console.log("hello")}
          android_ripple={{ borderless: true, radius: 50 }}
          style={styles.IconBehave}
        >
          <Image
            style={{ height: 21, width: 42, marginBottom: 10 }}
            source={images.groups}
          />
          <Text style={{ color: "white" }}>Groups</Text>
        </Pressable>
        <Pressable
          onPress={() => console.log("hello")}
          android_ripple={{ borderless: true, radius: 50 }}
          style={styles.IconBehave}
        >
          <Image
            style={{ height: 22, width: 21, marginBottom: 10 }}
            source={images.you}
          />
          <Text style={{ color: "white" }}>You</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  roundButton: {
    width: 65,
    height: 65,
    borderRadius: 100,
    backgroundColor: "#FFEEF3",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 6,
    borderColor: "#B31C45",
    bottom: 28,
    zIndex: 1,
    right: 1,
  },
  icon: {
    width: 21,
    height: 10.5,
  },

  NavContainer: {
    position: "absolute",
    width: "100%",
    alignItems: "center",
    bottom: 0,
    backgroundColor: "#313131",
  },

  NavBar: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-evenly",
  },

  IconBehave: {
    padding: 20,
    alignItems: "center",
    color: "white",
  },
});
