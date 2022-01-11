import {Alert, Image, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import tailwind from "tailwind-rn";
import AdIcons from "react-native-vector-icons/AntDesign";
import FaIcons from "react-native-vector-icons/FontAwesome";
import React, {useState} from "react";

export default function Nav({children}: { children: any }) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={container}>

            <Modal
                animationType={"fade"} transparent={true} visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}
            >

                <View style={styles.modalScreen}>

                    <View style={styles.modal}>
                        <Pressable onPress={() => setModalVisible(!modalVisible)} >
                            {close_icon}
                        </Pressable>

                        <Text style={menuOptions}>Opcion 1</Text>
                        <Text style={menuOptions}>Opcion 2</Text>
                        <Text style={menuOptions}>Opcion 3</Text>
                    </View>

                </View>
            </Modal>

            <View style={nav}>
                <Image source={require('../../assets/logo.png')} style={logo}/>
                <Text style={styles.title}>Snap Grid</Text>

                <TouchableOpacity
                    style={tailwind('absolute right-3 pl-10')}
                    onPress={() => setModalVisible(true)}
                >
                    {menu_icon}
                </TouchableOpacity>
            </View>

                {children}

        </View>
    )
};

//STYLES\\

//Tailwind Styled variables
const nav = tailwind('flex-row items-center h-16');
const container = tailwind('h-full mt-9');
const logo = tailwind('w-14 h-14 mx-3');
const menuOptions = tailwind('text-4xl text-gray-500 m-5 bottom-3');

//Js Styles
const styles = StyleSheet.create({
    menuIcon: {
        fontSize: 50,
        color: 'black'
    },
    title: {
        fontStyle: 'italic',
        color: '#ff005f',
        fontSize: 30
    },
    modalScreen:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modal:{
        width: '70%',
        backgroundColor: 'white',
        borderRadius: 20
    },
    closeIcon:{
        fontSize: 50,
        color: '#ff005f',
    }
});

//Icons
const menu_icon = <AdIcons name={'menufold'} style={styles.menuIcon}/>
const close_icon = <FaIcons name={'window-close'} style={[styles.closeIcon, tailwind('text-right bottom-1')]}/>
