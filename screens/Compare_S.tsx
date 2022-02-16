import {BackHandler, Button, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {TemplateListModal} from "../components/TemplateListModal";
import {useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FaIcons from "react-native-vector-icons/FontAwesome";
import tailwind from "tailwind-rn";
import McIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FIcons from "react-native-vector-icons/Foundation";
import {RenderCheckbox, TemplateTitle} from "../components/TemplateComponents";

//MAIN FUNCTION\\
export default function Compare_S() {
//TEMPLATE DATA SECTION-------------------------------------------------------------------------------
    //HOOKS
    const [data, setData] = useState(Array)
    const [template, setTemplate] = useState(Object)
    //VARIABLES & OBJECTS

    //FUNCTIONS
    const getList = async () => {
        const key = await AsyncStorage.getAllKeys()
        const data = []
        for (let i in key) {
            const templateValue = await AsyncStorage.getItem(i)
            templateValue != null ? JSON.parse(templateValue) : null
            // @ts-ignore
            let obj = JSON.parse(templateValue)
            data.push(obj)
        }
        setData(data)
    }

    const setInitialDatabase = async () => {
        const keys = await AsyncStorage.getAllKeys()
        let cont = false
        for (let i in keys) {
            if (keys[i] === "UserComparisonData") {
                cont = true
                console.log('USER DATA ALREADY')
                break
            }
        }
        if (!cont) {
            const jsonValue = JSON.stringify({DATA2: []})
            await AsyncStorage.setItem('UserComparisonData', jsonValue)
            console.log('USER DATA CREATED')
        }
    }


    const setObjectValue = async () => {
        try {
            const jsonValue = JSON.stringify({DATA2: ['HOLA SOY LA DATAA']})
            await AsyncStorage.setItem('UserComparisonData', jsonValue)
        } catch(e) {
            // save error
        }

        console.log('Done.')
    }



    const clearAll = async () => {
        try {
            await AsyncStorage.clear()
        } catch(e) {
            // clear error
        }

        console.log('Done.')
    }

    const getAllKeys = async () => {
            let keys = []
            try {
                keys = await AsyncStorage.getAllKeys()
            } catch(e) {
                // read key error
            }

            console.log(keys)
            // example console.log result:
            // ['@MyApp_user', '@MyApp_key']
        }






//TEMPLATE RENDER SECTION-----------------------------------------------------------------------------
    //HOOKS
    const [modalVisible, setModalVisible] = useState(true);

//RETURN\\
    return (
        <View>
            {/*MODAL TO SELECT TEMPLATE*/}
            <Modal
                animationType={"fade"} transparent={true} visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}
                onShow={()=> {
                    getList().then(()=> console.log(data));
                }}
            >
                <View style={styles.modalScreen}>
                    <View style={styles.modal}>
                        {
                            data.length > 0 ? data.map((value : any, index) => {
                                return (
                                    <View style={tailwind('flex-row justify-between p-2 ml-5')}>
                                        <TemplateTitle
                                            text={value.title} index={index}
                                            onPress={()=> {
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

            {/*TEMPLATE NAME DISPLAY AND ADD COMPARISONS*/}

            <Text>{template.title}</Text>
            <Button title={'CONSOLE'} onPress={()=>setObjectValue()}/>
            <Button title={'ADD to compare'} onPress={()=>console.log(data)}/>

        </View>
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