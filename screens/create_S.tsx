//React
import React, {useState} from "react";
//React Native
import {View, TextInput, Text, TouchableOpacity, StyleSheet} from "react-native";
//Libaries
import tailwind from "tailwind-rn";
import AsyncStorage from '@react-native-async-storage/async-storage';
import FaIcons from "react-native-vector-icons/FontAwesome";
//Components
import {RenderCheckbox} from "../components/TemplateComponents";
import {AddComponentModal} from "../components/AddComponentModal";


//MAIN FUNCTION\\
export default function Create_S({navigation}:{navigation:any}) {

//TEMPLATE DATA SECTION-------------------------------------------------------------------------------
    //HOOKS
    const [title, setTitle] = useState(String);
    const [name, setName] = useState(String);
    const [data, setData] = useState(Array);
    //VARIABLES & OBJECTS
    //Main Parent template model Object, there is only one when created.
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
    const setObjectValue = async (value: String) => {
        let keys = []
        try {
            const jsonValue = JSON.stringify(value)
            keys = await AsyncStorage.getAllKeys();
            await AsyncStorage.setItem(keys.length.toString(), jsonValue)
        } catch (e) {
            alert("Set error")
        }
        console.log('Done.')
    }
    //Saves the data and closes screen
    const saveData = () => {
        try {
            if (title !== '' && data.length !== 0)  {
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