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
    const [comparisons, setComparisons] = useState(Array)
    //VARIABLES & OBJECTS
    const comparison = new Object({title: template.title, DATA:comparisons as []})

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

    const addComparison = () =>{

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
                onShow={() => getList()}
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
            {/*{*/}
            {/*    template.DATA != null ? template.DATA.map((value, index)=>{*/}
            {/*        return (*/}
            {/*            <Text>{value.subtitle}</Text>*/}
            {/*        )*/}
            {/*    }) : null*/}
            {/*}*/}
            <Button title={'CONSOLE'} onPress={()=>console.log(template.DATA[1])}/>
            <Button title={'ADD to compare'} onPress={console.log}/>

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
