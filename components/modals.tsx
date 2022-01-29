import {Modal, TouchableOpacity, View, Pressable, StyleSheet, Text} from "react-native";
import tailwind from "tailwind-rn";
import {useState} from "react";
import McIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FaIcons from "react-native-vector-icons/FontAwesome";

export const AddComponentModal = (props:any) => {

    //Modal useState
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <Modal
            animationType={"fade"} transparent={true} visible={props.mvisible}
            onRequestClose={() => setModalVisible(!modalVisible)}
        >
            <View style={styles.modalScreen}>
                <View style={styles.modal}>
                    <Pressable onPress={() => setModalVisible(!modalVisible)}>
                        {close_icon}
                    </Pressable>
                    {/*Add CheckBox*/}
                    <TouchableOpacity
                        style={tailwind('m-2 flex-row items-center px-2 py-1 border border-gray-400 rounded-md')}
                        onPress={() => {

                            setModalVisible(!modalVisible);
                        }}
                    >
                        {checkBox_icon}
                        <Text style={tailwind('text-3xl px-2 text-gray-600')}>Add CheckBox</Text>
                    </TouchableOpacity>
                    {/*Add Description*/}
                    <TouchableOpacity
                        style={tailwind('m-2 flex-row items-center px-2 py-1 border border-gray-400 rounded-md')}
                        onPress={() => { // @ts-ignore
                            setModalVisible(!modalVisible);
                        }}
                    >
                        {description}
                        <Text style={tailwind('text-3xl px-2 text-gray-600')}>Add Description</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
};

//Js Styles
const styles = StyleSheet.create({
    modalScreen: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modal: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 15
    },
    closeIcon: {
        fontSize: 50,
        color: '#ff005f',
    }
});

//Icons

const description = <McIcons name={'card-text-outline'} style={[styles.closeIcon]}/>
const close_icon = <FaIcons name={'window-close'} style={[styles.closeIcon, tailwind('text-right bottom-1')]}/>
const checkBox_icon = <McIcons name={'checkbox-multiple-marked-outline'} style={[styles.closeIcon]}/>