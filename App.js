import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
  Button,
  Platform,
} from "react-native";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
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
    // Alert.alert("Lift me Up", "You got this", [
    //   {
    //     text: "Yes",
    //     onPress: () => {
    //       console.log("Yes Pressed");
    //     },
    //   },
    //   {
    //     text: "No",
    //     onPress: () => {
    //       console.log("No Pressed");
    //     },
    //   },
    // ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Project L1ft 1
      </Text>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}
        onPress={handleButtonPress}
      >
        <Text style={styles.save}>Save</Text>
      </TouchableOpacity>
      <TouchableHighlight onPress={handlePress}>
        <Image
          blurRadius={3}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 5,
    backgroundColor: "black",
  },
  save: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
