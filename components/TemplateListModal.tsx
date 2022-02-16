import {Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import tailwind from "tailwind-rn";
import FaIcons from "react-native-vector-icons/FontAwesome";
import McIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FIcons from "react-native-vector-icons/Foundation";


export const TemplateListModal = (props: any) => {

    return (
        <Modal
            animationType={"fade"} transparent={true} visible={props.modalVisible}
            onRequestClose={() => props.setModalVisible(!props.modalVisible)}
        >
            <View style={styles.modalScreen}>
                <View style={styles.modal}>
                    <Text>HOla jeje</Text>
                    {
                        props.values.map((value:any, index:any)=>{
                            <Text>{value.title}</Text>
                        })
                    }
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
// const description = <McIcons name={'card-text-outline'} style={[styles.closeIcon]}/>
const close_icon = <FaIcons name={'window-close'} style={[styles.closeIcon, tailwind('text-right bottom-1')]}/>
const checkBox_icon = <McIcons name={'checkbox-multiple-marked-outline'} style={styles.closeIcon}/>
const question_icon = <FIcons name={'question-circle'} style={[styles.closeIcon, tailwind('mx-2')]}/>

