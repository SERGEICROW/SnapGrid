//React
import React, {useState} from "react";
//React Native
import {View, TextInput, Text, TouchableOpacity, StyleSheet, Button} from "react-native";
//Libaries
import tailwind from "tailwind-rn";
import AsyncStorage from '@react-native-async-storage/async-storage';
import FaIcons from "react-native-vector-icons/FontAwesome";
//Components
import {RenderCheckbox} from "../components/TemplateComponents";
import {AddComponentModal} from "../components/AddComponentModal";


//MAIN FUNCTION\\
export default function Create_S({navigation}: { navigation: any }) {

//TEMPLATE DATA SECTION-------------------------------------------------------------------------------
    //HOOKS
    const [title, setTitle] = useState(String);
    const [name, setName] = useState(String);
    const [data, setData] = useState(Array);
    //VARIABLES & OBJECTS
    //Parent data container fot templates
    const tData = {TDATA: []};
    //Parent object model, to be inside of TDATA "template data"
    const template = {title: title, DATA: data as []};
    //Child component model Object, can be more than one, and each one is added to DATA array.
    const component = new Object({type: 'checkbox', subtitle: name, value: Boolean});

//COMPONENT RENDERING SECTION ------------------------------------------------------------------------
    //HOOKS
    //Modal
    const [modalVisible, setModalVisible] = useState(false);

    //FUNCTIONS
    const addComponent = () => {
        try {
            if (name !== '') {
                setData([...data, component])
                setName('')
            } else {
                alert('Checkbox needs a title')
            }
        } catch (e) {
            alert('Something went wrong when adding a checkbox')
        }
    };

    const deleteComponent = ({index}: { index: any }) => {
        let itemsCopy = [...data];
        itemsCopy.splice(index, 1);
        setData(itemsCopy)
    };

//DATA STORAGE SECTION----------------------------------------------------------------------------
    //Set data API
    const setInitialDatabase = async () => {
        const keys = await AsyncStorage.getAllKeys()
        let cont1 = false
        try {
            for (let i in keys) {
                if (keys[i] === "templateData") {
                    cont1 = true
                    console.log('TEMPLATE DATA ALREADY EXISTS')
                    break
                }
            }
            if (!cont1) {
                const jsonValue = JSON.stringify(tData)
                await AsyncStorage.setItem('templateData', jsonValue)
                console.log('TEMPLATE DATA CREATED')
            }
        } catch (e) {
            console.log("some error when creting the database")
        }
    }

    const setObjectValue = async (value) => {
        try {
            const stringValue = await AsyncStorage.getItem('templateData')
            const ObjectValue = JSON.parse(stringValue)
            const template = JSON.stringify(value)
            ObjectValue.TDATA.push(template)
            const stringObject = JSON.stringify(ObjectValue)
            await AsyncStorage.setItem('templateData', stringObject)
        } catch (e) {
            console.log('some error while setting the obejct value')
        }
        console.log('done')
    }

    //Saves the data and closes screen
    const saveData = () => {
        try {
            setInitialDatabase();
            if (title !== '' && data.length !== 0) {
                template.title = title
                navigation.navigate('Main')
                // @ts-ignore
                setObjectValue(template);
                alert('Template saved')
            } else {
                alert('Template is missing title or at least 1 component')
            }
        } catch (e) {
            alert("Save error")
        }
    }
    const getMyObject = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem('templateData')
                return console.log(jsonValue != null ? JSON.parse(jsonValue) : null)
            } catch(e) {
                // read error
            }

            console.log('Done.')

        }

    const getAllKeys = async () => {
        let keys = []
        try {
            keys = await AsyncStorage.getAllKeys()
            if (keys.length === 0) {
                console.log('NO KEYS DETECTED')
            }
{}        } catch (e) {
            // read key error
        }
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


//RETURN\\
    return (
        <View style={styles.container}>
            {/*TITLE INPUT*/}
            <TextInput placeholder={'Template Title:'} style={styles.templateTitle}
                       onChangeText={(value) => setTitle(value)}/>
            {/*DATA MAPPING*/}
            {
                data.map((value, index) => {
                    return (
                        <View style={tailwind('flex-row justify-between')}>
                            {/*// @ts-ignore*/}
                            <RenderCheckbox text={value.subtitle} index={index}/>
                            <TouchableOpacity onPress={() => deleteComponent({index: index})}>
                                {close_icon}
                            </TouchableOpacity>
                        </View>
                    )
                })
            }
            {/*ADD COMPONENT*/}
            <View>
                <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
                    <Text style={tailwind('text-4xl text-white')}>+</Text>
                </TouchableOpacity>

                <Button title={'set database'} onPress={() => setInitialDatabase()}/>
                <Button title={'get my object'} onPress={() => getMyObject()}/>
                <Button title={'get all keys'} onPress={() => getAllKeys()}/>
                <Button title={'clear all'} onPress={() => clearAll()}/>
                <Button title={'console'} onPress={() => console.log('que pedo')}/>

                {/*SAVE*/}
                <TouchableOpacity style={styles.saveButton} onPress={() => saveData()}>
                    <Text style={tailwind('text-4xl text-white')}>SAVE</Text>
                </TouchableOpacity>
            </View>

            {/*MODAL*/}
            <AddComponentModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                name={name}
                setName={setName}
                addComponent={addComponent}
            />

        </View>
    )
};

//Js Styles
const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'space-between'
    },
    templateTitle: {
        height: 60,
        marginLeft: 2,
        fontSize: 40,
        color: '#ff005f'
    },
    closeIcon: {
        fontSize: 50,
        color: '#ff005f',
        marginRight: 5
    },
    addButton: {
        marginLeft: '30%',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 17,
        width: '40%',
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
const close_icon = <FaIcons name={'window-close'} style={styles.closeIcon}/>