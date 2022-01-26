import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import tailwind from "tailwind-rn";
import {Component} from "react";
import McIcons from "react-native-vector-icons/MaterialCommunityIcons";



export default function Welcome_S({navigation}:{navigation:any}) {
    return <>
        <View style={tailwind('h-full mt-9 flex flex-row justify-center items-center justify-around')}>

            <TouchableOpacity
                style={styles.containers}
                onPress={() => console.log("pressed log/sign")}
            >
                <View style={imageStyle}>{signIcon}</View>
                <Text style={textStyle}>Log/Sign</Text>
            </TouchableOpacity>

            <View style={tailwind('border border-black h-full')}/>

            <TouchableOpacity
                style={styles.containers}
                onPress={()=>navigation.navigate('Main')}
            >
                <View style={imageStyle}>{startIcon}</View>
                <Text style={textStyle}>Quick start</Text>
            </TouchableOpacity>

        </View>
    </>
};

//STYLES\\

//Tailwind Styled variables
const textStyle = (tailwind('text-gray-500 italic text-3xl'));
const imageStyle = (tailwind('w-32 h-32 mb-8 items-center justify-center'))

//Js Styles
const styles = StyleSheet.create({
    containers: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        flex: 1,
    },
    icon : {
        color: '#ff005f',
        fontSize: 130,
    }
});

//Icons

const startIcon = <McIcons name={'clipboard-play-multiple-outline'} style={styles.icon}/>
const signIcon = <McIcons name={'clipboard-account-outline'} style={styles.icon}/>