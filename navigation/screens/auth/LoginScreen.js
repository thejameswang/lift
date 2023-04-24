import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  Button,
  View,
} from "react-native";

import * as Google from "expo-auth-session/providers/google";
import AuthSession from "expo-auth-session";

import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen({ navigation }) {
  const [userInfo, setUserInfo] = useState();
  const [auth, setAuth] = useState();
  const [requireRefresh, setRequireRefresh] = useState(false);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "611671508216-8g6dmt3b8gndrnpqugdoigbgqdafp28m.apps.googleusercontent.com",
    iosClientId:
      "611671508216-6nkormq1bu3h3supk08d5m4b8oji4its.apps.googleusercontent.com",
    expoClientId:
      "611671508216-6pl92jsaluhbdod0nr05h1gnt68pua0i.apps.googleusercontent.com",
  });

  useEffect(() => {
    // console.log(response);
    if (response?.type === "success") {
      setAuth(response);

      const persistAuth = async () => {
        await AsyncStorage.setItem("auth", JSON.stringify(response));
      };

      persistAuth();
    }
  }, [response]);

  useEffect(() => {
    const getPersistedAuth = async () => {
      const jsonValue = await AsyncStorage.getItem("auth");
      if (jsonValue != null) {
        setAuth(JSON.parse(jsonValue));
        // console.log(auth);

        // setRequireRefresh(!AuthSession.TokenResponse.isTokenFresh());
      }
    };
    getPersistedAuth();
  });

  const getUserData = async () => {
    // console.log(auth);
    let userInfoResponse = await fetch(
      "https://www.googleapis.com/userinfo/v2/me",
      {
        headers: { Authorization: `Bearer ${auth.authentication.accessToken}` },
      }
    );

    userInfoResponse.json().then((data) => {
      // console.log(data);
      setUserInfo(data);
    });
  };

  const showUserData = () => {
    if (userInfo) {
      return (
        <View style={styles.userInfo}>
          <Image source={{ uri: userInfo.picture }} style={styles.profilePic} />
          <Text> Welcome {userInfo.name}</Text>
          <Text> {userInfo.email}</Text>
        </View>
      );
    }
  };

  // const refreshToken = () => {

  // }

  if (requireRefresh) {
    return (
      <View style={styles.test}>
        <Text> Token requires refresh...</Text>
        <Button title="Refresh Token" onPress={refreshToken} />
      </View>
    );
  }

  const { user } = useAuth();
  // console.log(user);
  return (
    <SafeAreaView style={styles.container}>
      {showUserData()}
      <Button
        title={auth ? "Get User Data" : "Login"}
        onPress={
          auth
            ? getUserData
            : () => promptAsync({ useProxy: true, showInRecents: true })
        }
      />
      <Text numberOfLines={1}>Login Screen</Text>
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
  profilePic: {
    width: 50,
    height: 50,
  },
  userInfo: {
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
});
