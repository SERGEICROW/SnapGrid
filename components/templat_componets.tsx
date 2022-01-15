import {StyleSheet, Text, TextInput, View} from "react-native";
import React from "react";
import tailwind from "tailwind-rn";

export const Text_Input = () => {

    const [text, onChangeText] = React.useState('');


    return (
        <View style={tailwind('flex-row items-center')}>
            <TextInput
                style={tailwind('ml-5 text-3xl')}
                onChangeText={onChangeText}
                value={text}
                placeholder={"Title:"}
                keyboardType={"default"}
            />
            <TextInput
                style={tailwind('border w-32 mx-5 px-2 text-2xl')}
                onChangeText={onChangeText}
                value={text}
                placeholder={"Text"}
                keyboardType={"default"}
            />
        </View>
    );
};

export const Numeric_Input = () => {

    const [number, onChangeNumber] = React.useState('');

    return (
        <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder={"Number"}
            keyboardType={"numeric"}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    }
});
