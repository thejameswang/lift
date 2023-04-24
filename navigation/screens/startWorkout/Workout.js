import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

export default function WorkoutScreen({ route, navigation }) {
  const { id, title, description, content, exercises } = route.params.item;
  return (
    <SafeAreaView style={styles.container}>
      {console.log(description)}
      <Text style={styles.text} numberOfLines={1}>
        {title}
      </Text>
      <Text style={styles.text} numberOfLines={1}>
        {description}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "#212121",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});
