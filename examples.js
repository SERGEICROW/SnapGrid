import React, {useEffect, useState} from "react";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import tailwind from "tailwind-rn";

export default function Examples() {

    const [value, setValue] = useState('');

    //Add Data
    const setStringValue = async () => {
        try {
            if (value === '') {
                alert("EMPTY VALUE IDIOT")
            } else {
                await AsyncStorage.setItem('Template name:', value)
            }
        } catch (e) {
            alert("SOME STUPID ERROR")
        }
        console.log('Done.')
    };

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
    };

    //Get Item
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('Template name:')
            if(value !== null) {
                // value previously stored
            }
            console.log(value)
        } catch(e) {
            // error reading value
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
    };


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
        <View>
            <TouchableOpacity onPress={() => getData()}>
                <Text>Get Item</Text>
            </TouchableOpacity>
        </View>
    </>
};

//TEMPLATE SCRIPSTS

const CheckBox = () => {
    return (
        <View style={tailwind('flex-row items-center px-1')}>
            {checkbox}
            <TextInput
                style={tailwind('text-2xl text-pink-600')}
                placeholder={'Title: E.g. "Negotiable price"'}
            />
        </View>
    )
};

{/*Add CheckBox*/}
<TouchableOpacity
    style={tailwind('m-2 flex-row items-center px-2 py-1 border border-gray-400 rounded-md')}
    onPress={() => { // @ts-ignore
        setModalVisible(!modalVisible)
        // @ts-ignore
        setItems([...items, CheckBox()])
    }}
>
    {checkBox_icon}
    <Text style={tailwind('text-3xl px-2 text-gray-600')}>Add CheckBox</Text>
</TouchableOpacity>