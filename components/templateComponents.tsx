import {View, Text, Button, StyleSheet} from "react-native";
import IIcons from "react-native-vector-icons/Ionicons";
import FaIcons from "react-native-vector-icons/FontAwesome";
import React from "react";
import tailwind from "tailwind-rn";

export const RenderCheckbox = (props: any) => {

    return (
        <View style={styles.container}>
            <View style={tailwind('flex-row')}>
                <Text style={styles.number}>{props.index + 1}</Text>
                <Text style={styles.input}>{props.text}</Text>
            </View>
            <View>
                {checkboxIcon}
            </View>
        </View>
    )
};

export const MyButton = ({...props}) => {
    // @ts-ignore
    return <Button color={'red'} {...props}/>
}

//JS STYLES
const styles = StyleSheet.create({
    container: {
        marginLeft:5,
        borderTopWidth:1,
        borderTopColor:'gray',
        flexDirection: 'row',
        width: '85%',
        alignItems:'center',
        justifyContent:'space-between',
    },
    number: {
        color: '#424242',
        fontSize: 30,
    },
    input: {
        color: '#ff005f',
        fontSize: 30,
        marginLeft:5
    },
    checkbox: {
        left: 10,
        color: 'gray',
        fontSize: 30,
    },
    icon:{
        fontSize:40,
        color:'#424242'
    }
});

//ICONS
const checkboxIcon = <IIcons name={'checkbox'} style={styles.icon}/>