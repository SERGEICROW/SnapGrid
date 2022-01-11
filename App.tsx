import {StatusBar} from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import {StyleSheet, Text, View} from 'react-native';
import Welcome_S from "./screens/welcome_S";
import Main_S from "./screens/main_S";

export default function App() {
    return (
        // <NavigationContainer>
        //     <View style={styles.container}>
        //         <Text>Open up App.tsx to start working on your app!</Text>
        //
        //         <StatusBar style="auto"/>
        //     </View>
        // </NavigationContainer>
        <Main_S/>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
