import {FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import tailwind from "tailwind-rn";
import {Component} from "react";

export default function Main_S() {


    return <>
        <View style={tailwind('h-full mt-9')}>

            <View style={tailwind('border-b-2 flex-row items-center h-16')}>
                <Image source={require('../assets/logo.png')} style={tailwind('w-14 h-14 mx-3')}/>
                <Text style={tailwind('italic text-3xl text-gray-500')}>Snap Grid</Text>
                <TouchableOpacity style={tailwind('absolute right-3')}>
                    <Image source={require('../assets/favicon.png')}/>
                </TouchableOpacity>
            </View>

            <View style={tailwind('border border-pink-500 h-full justify-around pb-40 pt-8')}>

                <TouchableOpacity style={tailwind('border border-blue-300 flex-row items-center h-32')}>
                    <Image source={require('../assets/favicon.png')}/>
                    <Text style={tailwind('text-3xl')} >CREATE TEMPLATE</Text>
                </TouchableOpacity>

                <View style={tailwind('border border-black')}/>

                <TouchableOpacity style={tailwind('border border-blue-300 flex-row items-center h-32')}>
                    <Image source={require('../assets/favicon.png')}/>
                    <Text style={tailwind('text-3xl')} >COMPARE</Text>
                </TouchableOpacity>

                <View style={tailwind('border border-black')}/>

                <TouchableOpacity style={tailwind('border border-blue-300 flex-row items-center h-32')}>
                    <Image source={require('../assets/favicon.png')}/>
                    <Text style={tailwind('text-3xl')} >OLD COMPARISONS</Text>
                </TouchableOpacity>

            </View>

        </View>
    </>
};

//STYLES\\

//Tailwind Styled variables


//Js Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 3,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
