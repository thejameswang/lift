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

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function WorkoutScreen({ navigation }) {
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
    <View style={styles.container}>
      <Text numberOfLines={1}>Feed Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
    justifyContent: "center",
    alignItems: "center",
  },
});
