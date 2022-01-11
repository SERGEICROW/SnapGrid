import {StatusBar} from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import {StyleSheet, Text, View} from 'react-native';
import Welcome_S from "./screens/welcome_S";
import Main_S from "./screens/main_S";
import Nav from "./components/layouts/nav"
import Menu_modal from "./components/menu_modal";
import Template_S from "./screens/template_S";


export default function App() {
    return (
        <Template_S/>
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
