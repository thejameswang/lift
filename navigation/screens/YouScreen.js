import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

export default function YouScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1}>You Screen</Text>
    </SafeAreaView>
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
