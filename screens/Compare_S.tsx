import {BackHandler, Button, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {TemplateListModal} from "../components/TemplateListModal";
import React, {useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FaIcons from "react-native-vector-icons/FontAwesome";
import tailwind from "tailwind-rn";
import McIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FIcons from "react-native-vector-icons/Foundation";
import {TemplateTitle} from "../components/TemplateComponents";
import {AddComparativesModal} from "../components/AddComparativesModal";

//MAIN FUNCTION\\
export default function Compare_S() {
//TEMPLATE DATA SECTION-------------------------------------------------------------------------------
    //HOOKS
    const [data, setData] = useState(Array)
    const [template, setTemplate] = useState(Object)
    const [subtitle, setSubtitle] = useState(Object)
    const [list, setList] = useState(Array)
    //VARIABLES & OBJECTS
    const comparative = {subtitle: subtitle, DATA: template.DATA}

    //FUNCTIONS
    const getList = async () => {
        const templateData = await AsyncStorage.getItem('templateData');
        templateData != null ? JSON.parse(templateData) : null
        let obj = JSON.parse(templateData)
        const data = []
        for (let i in obj.TDATA) {
            let value = JSON.parse(obj.TDATA[i])
            data.push(value)
        }
        setData(data)
    }

    const addComparative = () => {
        if (subtitle !== '') {
            setList([...list, comparative])
            setSubtitle('')
        } else {
            alert('Comparison needs a title')
        }
    }

////////////////////////////////////////////////////////////////////////////
    const getMyObject = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('templateData')
            return console.log(jsonValue != null ? JSON.parse(jsonValue) : null)
        } catch (e) {
            // read error
        }

        console.log('Done.')

    }
    const getAllKeys = async () => {
        // @ts-ignore
        let keys = []
        try {
            keys = await AsyncStorage.getAllKeys()
            if (keys.length === 0) {
                console.log('NO KEYS DETECTED')
            }
            {
            }
        } catch (e) {
            // read key error
        }
        // @ts-ignore
        console.log(keys)
    }
    const clearAll = async () => {
        try {
            await AsyncStorage.clear()
        } catch (e) {
            // clear error
        }

        console.log('Done.')
    }
////////////////////////////////////////////////////////////////////////////


//TEMPLATE RENDER SECTION-----------------------------------------------------------------------------
    //HOOKS
    const [modalVisible, setModalVisible] = useState(true);
    const [compModalVisible, setCompModalVisible] = useState(false);

//RETURN\\
    return (
        <View style={styles.container}>
            {/*MODAL TO SELECT TEMPLATE*/}
            <Modal
                animationType={"fade"} transparent={true} visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}
                onShow={() => {
                    getList().then(() => console.log(data));
                }}
            >
                <View style={styles.modalScreen}>
                    <View style={styles.modal}>
                        {
                            data.length > 0 ? data.map((value: any, index) => {
                                return (
                                    <View style={tailwind('flex-row justify-between p-2 ml-5')}>
                                        <TemplateTitle
                                            text={value.title} index={index}
                                            onPress={() => {
                                                setModalVisible(false)
                                                setTemplate(data[index])
                                            }}
                                        />
                                    </View>
                                )
                            }) : <Text>Empty list, create a template before</Text>
                        }
                    </View>
                </View>
            </Modal>
            {/*MODAL to add comparatives*/}
            <AddComparativesModal
                compModalVisible={compModalVisible}
                setCompModalVisible={setCompModalVisible}
                subtitle={subtitle}
                setSubtitle={setSubtitle}
                addComparative={addComparative}
            />


            {/*TEMPLATE NAME DISPLAY AND ADD COMPARISONS*/}
            <Text style={tailwind('text-4xl')}>{template.title}</Text>
            {
                list.length > 0 ? list.map((value:any, index)=>{
                    return (
                            <Text>{value.subtitle}</Text>
                    )
                }) : <Text>Empty comparative list</Text>
            }

            {/*ADD COMPARISON TITLES*/}
            <View style={tailwind('flex-row justify-between')}>
                {/*SAVE*/}
                <TouchableOpacity style={styles.saveButton} onPress={() => console.log("saved")}>
                    <Text style={tailwind('text-4xl text-white')}>SAVE</Text>
                </TouchableOpacity>
                <Button title={'console'} onPress={()=>console.log(list)}/>
                <TouchableOpacity style={styles.addButton} onPress={() => setCompModalVisible(true)}>
                    <Text style={tailwind('text-4xl text-white')}>+</Text>
                </TouchableOpacity>
            </View>



        </View>    )
};
//Js Styles
const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'space-between'
    },
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
    },
    addButton: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 17,
        width: '30%',
        height: 50,
        backgroundColor: '#ff005f'
    },
    saveButton: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 17,
        width: '30%',
        height: 50,
        color: '#ff005f',
        backgroundColor: 'black'
    }
});

//Icons
// const description = <McIcons name={'card-text-outline'} style={[styles.closeIcon]}/>
const close_icon = <FaIcons name={'window-close'} style={[styles.closeIcon, tailwind('text-right bottom-1')]}/>
const checkBox_icon = <McIcons name={'checkbox-multiple-marked-outline'} style={styles.closeIcon}/>
const question_icon = <FIcons name={'question-circle'} style={[styles.closeIcon, tailwind('mx-2')]}/>