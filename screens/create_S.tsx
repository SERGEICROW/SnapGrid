import {
    Button, Modal,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import React, {useState} from "react";
import tailwind from "tailwind-rn";
import McIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FaIcons from "react-native-vector-icons/FontAwesome";


export default function Create_S() {
    //Modal useState
    const [modalVisible, setModalVisible] = useState(false);

    //Component useState
    const [component, setComponent] = useState();
    const [items, setItems] = useState([]);


    const handleAdd = ()=> {
        setItems([...items, component])
        console.log("ADDED")
    }

    const eraseComponent = (index) => {
        let itemsCopy = [...items];
        itemsCopy.splice(index, 1);
        setItems(itemsCopy)
    }



    const CheckBox = () => {
        return (
            <View style={tailwind('flex-row items-center px-1')}>
                {checkbox}
                <TextInput
                    style={tailwind('text-2xl text-pink-600')}
                    placeholder={'Title: E.g. "Negotiable price"'}/>
            </View>
        )
    };

    const Description = () => {
        return (
            <View style={tailwind('flex-row items-center')}>
                <View style={tailwind('items-center px-2')}>

                    <TextInput
                        style={tailwind('text-2xl items-center w-full text-pink-600')}
                        placeholder={'Title: E.g. "Color"'}
                    />
                    <View style={tailwind('w-full h-9 bg-gray-300 border border-gray-400')}/>
                </View>
            </View>
        )
    };


    return <>

        <Modal
            animationType={"fade"} transparent={true} visible={modalVisible}
            onRequestClose={() => setModalVisible(!modalVisible)}
        >
            <View style={styles.modalScreen}>
                <View style={styles.modal}>
                    <Pressable onPress={() => setModalVisible(!modalVisible)}>
                        {close_icon}
                    </Pressable>
                    {/*Add CheckBox*/}
                    <TouchableOpacity
                        style={tailwind('m-2 flex-row items-center px-2 py-1 border border-gray-400 rounded-md')}
                        onPress={() => { // @ts-ignore
                            setComponent(CheckBox);
                            handleAdd();
                            setModalVisible(!modalVisible);
                        }}
                    >
                        {checkBox_icon}
                        <Text style={tailwind('text-3xl px-2 text-gray-600')}>Add CheckBox</Text>
                    </TouchableOpacity>
                    {/*Add Description*/}
                    <TouchableOpacity
                        style={tailwind('m-2 flex-row items-center px-2 py-1 border border-gray-400 rounded-md')}
                        onPress={() => { // @ts-ignore
                            setComponent(Description);
                            handleAdd();
                            setModalVisible(!modalVisible);
                        }}
                    >
                        {description}
                        <Text style={tailwind('text-3xl px-2 text-gray-600')}>Add Description</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>

        <SafeAreaView style={tailwind('border border-red-400 h-full ')}>
            <View style={tailwind('flex-row items-center border-b border-gray-400 p-2')}>
                <Text>Template Title:</Text>
                <TextInput
                    style={tailwind('h-10 border border-gray-300')}
                    placeholder={' E.g. "Cars", "Cellphones"'}
                />
            </View>
            {/*Map array components*/}
            {
                items.map((item, index)=>{
                    return (
                        <TouchableOpacity key={index} onPress={()=> eraseComponent(index)}>
                            {item}
                        </TouchableOpacity>
                    )
                })
            }
            {/*Add button*/}
            <View style={tailwind('items-center w-full py-4')}>
                <View style={tailwind('w-3/6')}>
                    <Button title={"+"} color={'#ff005f'}
                            onPress={() => setModalVisible(true)}
                    />
                </View>

            </View>
            <TouchableOpacity
                style={tailwind('m-2 flex-row items-center px-2 py-1 border border-gray-400 rounded-md')}
                onPress={() => { // @ts-ignore
                    setComponent(CheckBox);
                    handleAdd();
                }}
            >
                {checkBox_icon}
                <Text style={tailwind('text-3xl px-2 text-gray-600')}>Add CheckBox</Text>
            </TouchableOpacity>
        </SafeAreaView>
    </>
};

//STYLES\\

//Tailwind Styled variables


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

const checkbox = <McIcons name={'checkbox-blank-outline'} style={tailwind('text-gray-500 text-3xl')}/>
const description = <McIcons name={'card-text-outline'} style={[styles.closeIcon]}/>
const close_icon = <FaIcons name={'window-close'} style={[styles.closeIcon, tailwind('text-right bottom-1')]}/>
const checkBox_icon = <McIcons name={'checkbox-multiple-marked-outline'} style={[styles.closeIcon]}/>