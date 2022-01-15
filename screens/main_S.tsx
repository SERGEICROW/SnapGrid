import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

import tailwind from "tailwind-rn";
import McIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FIcons from 'react-native-vector-icons/Foundation';
import Nav from "../components/layouts/nav";
import {Component} from "react";


export default function Main_S({navigation}:{navigation:any}) {

    return <Nav>
        <View style={menu}>
            <TouchableOpacity
                style={touchable}
                onPress={()=>navigation.navigate('Create')}
            >
                <View style={texts}>
                    <Text style={subTitle}>CREATE TEMPLATE</Text>
                    <Text style={description}>Create or edit your comparison templates</Text>
                </View>
                <View style={styles.iconContainter}>{new_t}</View>
            </TouchableOpacity>

            <View style={outlines}/>

            <TouchableOpacity style={touchable}>
                <View style={texts}>
                    <Text style={subTitle}>COMPARE</Text>
                    <Text style={description}>Start comparing whatever you want</Text>
                </View>
                <View style={styles.iconContainter}>
                    {compare_1}
                    {compare_2}
                </View>
            </TouchableOpacity>

            <View style={outlines}/>

            <TouchableOpacity style={touchable}>
                <View style={texts}>
                    <Text style={subTitle}>OLD COMPARISONS</Text>
                    <Text style={description}>Take a look to the data of your old comparisons</Text>
                </View>
                <View style={styles.iconContainter}>{old_c}</View>
            </TouchableOpacity>
        </View>
    </Nav>
};

//STYLES\\

//Tailwind Styled variables
const touchable = tailwind('flex-row items-center h-32');
const texts = tailwind('w-56 h-24 justify-center');
const subTitle = tailwind('text-xl text-center text-gray-700');
const description = tailwind('text-base text-center px-6 text-gray-400');
const outlines = tailwind('border border-gray-300');
const menu = tailwind('h-full justify-around pb-40 pt-8');

//Js Styles
const styles = StyleSheet.create({
    icon: {
        fontSize: 80,
        color: '#ff005f',
    },
    iconContainter: {
        flex: 1,
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center'
    }
})

//Icons
const compare_1 = <McIcons name={'clipboard-arrow-right-outline'} style={{fontSize: 80, color: '#ff005f'}}/>
const compare_2 = <McIcons name={'clipboard-arrow-left-outline'} style={{fontSize: 80, color: '#ff005f'}}/>
const old_c = <McIcons name={'clipboard-text-multiple-outline'} style={styles.icon}/>
const new_t = <FIcons name={'clipboard-pencil'} style={styles.icon}/>

