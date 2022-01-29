import React, {Component, useEffect, useState} from "react";
import {View, Text, TextInput, Button, Keyboard} from "react-native";
import tailwind from "tailwind-rn";
import {RenderCheckbox, MyButton} from "../components/templateComponents";
import {AddComponentModal} from "../components/modals";

//MAIN FUNCTION\\
export default function Create_S() {

//TEMPLATE DATA SECTION-----------------------------------------------------------------------
    //HOOKS
    const [title, setTitle] = useState(String);
    const [name, setName] = useState(String);
    const [data, setData] = useState(Array);
    //VARIABLES & OBJECTS
    //Main Parent template model Object, there is only one when created.
    const template = {title: title, DATA: data as []};
    //Child component model Object, can be more than one, and each one is added to DATA array.
    const component = new Object({type: 'checkbox', subtitle: name, value: Boolean});


//COMPONENT RENDERING SECTION -------------------------------------------------------------------
    //HOOKS
        //Modal
    const [mvisible, setVisible] = useState(false)
    //FUNCTIONS
    const addComponent = () => {
        setData([...data, component])
        setName('')
    };
    const deleteComponent = (index) => {
        let itemsCopy = [...data];
        itemsCopy.splice(index, 1);
        setData(itemsCopy)
    };

//FINAL DATA MANAGE SECTION----------------------------------------------------------------------------
    const handleMerge = () => {
        if (title !== '') {
            template.title = title
        } else {
            alert('Template title missing')
        }
    }

    return (
        <View>
            <TextInput placeholder={'TEMPLATE TITLE'} style={tailwind('border-b h-10')}
                       onChangeText={(value) => setTitle(value)}/>
            {
                data.map((value, index) => {
                    return (
                        <View style={tailwind('flex-row')}>
                            <RenderCheckbox text={value.subtitle} index={index}/>
                            <Button title={`borrar:  ${value.subtitle}`} onPress={()=>deleteComponent(index)}/>
                        </View>
                    )
                })
            }
            <TextInput style={tailwind('border border-green-500 h-10')}
                       value={name}
                       onChangeText={(input) => setName(input)}/>
            <Button title={"Add component"} onPress={() => addComponent()}/>
            {/*<Button title={"SAVE"} onPress={()=>addComponent2()}/>*/}
            <MyButton title={"helps"} onPress={() => {
                console.log(data)
            }}/>
            <Button title={"+"} color={'#ff005f'}
                    onPress={() => setVisible(true)}
            />
            <AddComponentModal pk/>

        </View>
    )
};