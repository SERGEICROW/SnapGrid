import React, {Component, useState} from "react";
import {View, Text, TextInput, Button, Keyboard} from "react-native";
import tailwind from "tailwind-rn";
import {RenderCheckbox, MyButton} from "../components/templateComponents";

//MAIN FUNCTION\\
export default function Create_S() {

//TEMPLATE DATA SET SECTION-------------------------------------------------------
    //HOOKS
    const [title, setTitle] = useState(String);
    const [name, setName] = useState(String);
    const [data, setData] = useState(Array);
    //VARIABLES & OBJECTS
    //Main Parent template model, there is only one when created.
    const template = {title: title, DATA: data as []};
    //Child component model, can be more than one, and each one is added to DATA array.
    const component = new Object({type: 'checkbox', subtitle: name, value: Boolean})
    //FUNCTIONS
    const addComponent = () => {
        setData([...data, component])
        setName('');
        render()
    }

//COMPONENT RENDERING SECTION ------------------------------------------------
    //HOOKS
    const [rendArray, setRendArray] = useState(Array);

    const array = data as any
    const render = () => {
        for (let i = 0; i < array.length; i += 1) {
            if (array[i].type === 'checkbox'){
                const x = array[i].subtitle
                setRendArray([...rendArray, x])
            }
        }
    }

//DATA MANAGE SECTION---------------------------------------------------------
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
                rendArray.map((item, index)=>{
                    return (
                        <RenderCheckbox text={item}/>
                    )
                })
            }
            <TextInput style={tailwind('border border-green-500 h-10')}
                       value={name}
                       onChangeText={(input) => setName(input)}/>
            <Button title={"Add component"} onPress={() => addComponent()}/>
            {/*<Button title={"SAVE"} onPress={()=>addComponent2()}/>*/}
            <MyButton title={"helps"} onPress={() => {console.log(JSON.stringify(rendArray))}}/>

        </View>
    )

};

