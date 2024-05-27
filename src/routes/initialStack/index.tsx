import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Initial from '../../screens/initial'
import SingIn from '../../screens/singIn'
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