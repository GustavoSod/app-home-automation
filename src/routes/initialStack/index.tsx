import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import Initial from "../../screens/Initial";
import { NavigationContainer } from "@react-navigation/native";
import SingIn from "../../screens/SingIn";
import Home from "../../screens/home";

type InitialStackParamList = {
    Initial: undefined;
    SingIn: undefined;
    Home: undefined;
  };

export type InitialStackTypes = NativeStackNavigationProp<InitialStackParamList>


const Stack = createNativeStackNavigator<InitialStackParamList>();

export default function InitialStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Initial" component={Initial} options={{headerShown:false}}/>
        <Stack.Screen name="SingIn" component={SingIn} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}