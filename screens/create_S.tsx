import {BackHandler, Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import Nav from "../components/layouts/nav";
import {Numeric_Input, Text_Input} from "../components/templat_componets";
import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Create_S() {

    const [value, setValue] = useState('');

    //Add Data
    const setStringValue = async () => {

        try {
            if (value === '') {
                alert("EMPTY VALUE IDIOT")
            } else {
                await AsyncStorage.setItem('Template', value)
            }
        } catch (e) {
            alert("SOME STUPID ERROR")
        }
        console.log('Done.')
    }

    //Get data
    const getAllKeys = async () => {
        let keys = []
        try {
            keys = await AsyncStorage.getAllKeys()
            alert("Done")
            console.log(keys)
        } catch (err) {
            alert("NOPE")
        }

    }

    //Remove Data
    const removeFew = async () => {
        const keys = ['key']
        try {
            await AsyncStorage.multiRemove(keys)
        } catch (e) {
            // remove error
        }

        console.log('Done')
    }


    return <>

        <TextInput onChangeText={(input) => setValue(input)}/>
        <TouchableOpacity onPress={setStringValue}>
            <Text>Save data</Text>
        </TouchableOpacity>

        <View>
            <TouchableOpacity onPress={() => getAllKeys()}>
                <Text>Get all keys</Text>
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity onPress={() => removeFew()}>
                <Text>Remove keys</Text>
            </TouchableOpacity>
        </View>
    </>
};

//STYLES\\

//Tailwind Styled variables

//Js Styles


//Icons


