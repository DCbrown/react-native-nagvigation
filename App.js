import HomeScreen from "./screens/HomeScreen";
import SecondScreen from "./screens/SecondScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen 
         name="Home"
         component={HomeScreen}
         options={{title: "Welcome to my App"}}
       />
       <Stack.Screen 
         name="Second"
         component={SecondScreen}
         options={{title: "Second Screen"}}
       />
     </Stack.Navigator>
   </NavigationContainer>
  );
}

