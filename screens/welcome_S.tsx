import {Button, Image, Pressable, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import tailwind from "tailwind-rn";

export default function Welcome_S() {
    return <>
        <View style={tailwind('h-full mt-9 flex flex-row justify-center items-center justify-around')}>

            <TouchableOpacity
                style={styles.containers}
                onPress={() => console.log("pressed log/sign")}
            >
                <Image
                    source={require('../assets/testIcon.png')}
                    style={imageStyle}
                />
                <Text style={textStyle}>Log/Sign</Text>
            </TouchableOpacity>

            <View style={tailwind('border border-black h-full')}/>

            <TouchableOpacity
                style={styles.containers}
                onPress={() => console.log("pressed Quick Start")}
            >
                <Image
                    source={require('../assets/testIcon.png')}
                    style={imageStyle}
                />
                <Text style={textStyle}>Quick start</Text>

            </TouchableOpacity>
        </View>
    </>
};

//STYLES\\

//Tailwind Styled variables
const textStyle = (tailwind('text-gray-500 italic text-3xl'));
const imageStyle = (tailwind('w-32 h-32 mb-8'))

//Js Styles
const styles = StyleSheet.create({
    containers: {
        borderWidth: 2,
        borderColor: 'gold',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        flex: 1,
    },
});