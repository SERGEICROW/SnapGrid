import {StyleSheet, Text, View} from 'react-native';
import Welcome_S from "./screens/welcome_S";
import {NavigationContainer} from "@react-navigation/native";
import Main_S from "./screens/main_S";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import Create_S from "./screens/create_S";
import tailwind from "tailwind-rn";


const Stack = createNativeStackNavigator();

export default function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Log/Sign" component={Welcome_S} options={{headerShown:false}}/>
                <Stack.Screen name="Main" component={Main_S} options={{headerShown:false}}/>
                <Stack.Screen name={"Create"} component={Create_S} options={{}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};


