import React, {useState} from "react";
import {View, TextInput,Text, Button, TouchableOpacity, StyleSheet} from "react-native";
import tailwind from "tailwind-rn";
import {RenderCheckbox, MyButton} from "../components/templateComponents";
import {AddComponentModal} from "../components/modals";
import FaIcons from "react-native-vector-icons/FontAwesome";

//MAIN FUNCTION\\
export default function Create_S() {

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

    const deleteComponent = ({index}: { index: any}) => {
        let itemsCopy = [...data];
        itemsCopy.splice(index, 1);
        setData(itemsCopy)
    };

//FINAL DATA MANAGE SECTION----------------------------------------------------------------------------
    const handleMerge = () => {
        if (title !== '') {
            template.title = title
        } else {
            alert('Template title is missing')
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
                            <RenderCheckbox text={value.subtitle} index={index}/>
                            <TouchableOpacity onPress={()=>deleteComponent({index: index})}>
                                {close_icon}
                            </TouchableOpacity>
                        </View>
                    )
                })
            }
            {/*ADD COMPONENT*/}
            <TouchableOpacity style={styles.addButton} onPress={()=>setModalVisible(true)}>
                <Text style={tailwind('text-4xl text-white')}>+</Text>
            </TouchableOpacity>
            {/*<MyButton title={"helps"} onPress={() => {*/}
            {/*    console.log(data)*/}
            {/*}}/>*/}
            {/*MODAL COMPONENT*/}
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
    container:{
        height:'100%',
        borderWidth:1,
        borderColor:'#ff005f'
    },
    templateTitle:{
        height:50,
        marginLeft:2,
        fontSize:40,
        color:'#ff005f'
    },
    closeIcon: {
        fontSize: 50,
        color: '#ff005f',
        marginRight:5
    },
    addButton:{
        marginLeft:'30%',
        marginTop:10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:17,
        width:'40%',
        height:50,
        backgroundColor:'#ff005f'
    }
});
//Icons
const close_icon = <FaIcons name={'window-close'} style={styles.closeIcon}/>