//MAIN FUNCTION\\
import {BackHandler, Button, Modal, StyleSheet, Text, View} from "react-native";
import {TemplateListModal} from "../components/TemplateListModal";
import {useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FaIcons from "react-native-vector-icons/FontAwesome";
import tailwind from "tailwind-rn";
import McIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FIcons from "react-native-vector-icons/Foundation";

export default function Compare_S() {
    const [modalVisible, setModalVisible] = useState(true);
    const data = {"title":"DOS","DATA":[{"type":"checkbox","subtitle":"aa"}]}

    const [keys, setKeys] = useState([])
    /*const [data, setData] = useState()*/

    const getAllKeys = async () => {
        let key = []
        try {
            key = await AsyncStorage.getAllKeys()
            setKeys([...keys, key])
        } catch(e) {
            // read key error
        }
        console.log(keys)
    }

    const getMyObject = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem("1")
            jsonValue != null ? JSON.parse(jsonValue) : null
            const obj = JSON.parse(jsonValue)
           console.log(obj.title)
        } catch(e) {
            // read error
        }
        console.log('Done.')

    }




//RETURN\\
    return (
        <Modal
            animationType={"fade"} transparent={true} visible={modalVisible}
            onRequestClose={() => setModalVisible(!modalVisible)}
        >
            <View style={styles.modalScreen}>
                <View style={styles.modal}>
                    <Button title={'buton'} onPress={getAllKeys}/>
                    <Button title={'buton'} onPress={getMyObject}/>
                    {

                    }
                    <Text>------------------------------------------------------</Text>
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
        height: 500,
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
