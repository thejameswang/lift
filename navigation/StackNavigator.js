import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import LoginScreen from "./screens/auth/LoginScreen";
import SignupScreen from "./screens/auth/SignupScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const user = false;
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      {user ? (
        <>
          <Stack.Screen name="Main" component={TabNavigator} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Sign Up" component={SignupScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;

// {user ? (
//                 <
//  :
//           <>
//             (<Stack.Screen name=/>)
//           </>
//         )}
