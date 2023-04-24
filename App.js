import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigator";
import { AuthProvider } from "./hooks/useAuth";
AuthProvider;
import * as ScreenOrientation from "expo-screen-orientation";

function App() {
  async () => {
    await this.changeScreenOrientation();
  };
  return (
    <NavigationContainer>
      {/* {HOC - Higher Order Component} */}
      <AuthProvider>
        {/* Passes down the cool auth stuff to children */}
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}

async function changeScreenOrientation() {
  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
}

export default App;
