import {Modal, TouchableOpacity, View, Pressable, StyleSheet, Text, TextInput} from "react-native";
import tailwind from "tailwind-rn";
import McIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FaIcons from "react-native-vector-icons/FontAwesome";
import MIcons from "react-native-vector-icons/MaterialIcons";


export const AddComparativesModal = (props: any) => {
//DATA SECTION------------------------------------------------------------------------------------------------------
    //HOOKS

    return (
        <Modal
            animationType={"fade"} transparent={true} visible={props.compModalVisible}
            onRequestClose={() => props.setCompModalVisible(!props.compModalVisible)}
        >
            <View style={styles.modalScreen}>
                <View style={styles.modal}>
                    <Pressable onPress={() => props.setCompModalVisible(!props.compModalVisible)}>
                        {close_icon}
                    </Pressable>
                    {/*Add CheckBox*/}
                    <TextInput
                        style={tailwind('m-2  flex-row items-center px-2 py-1 border border-gray-400 rounded-md text-3xl')}
                        placeholder={'Title to compare:'}
                        value={props.subtitle}
                        maxLength={14}
                        onChangeText={(input) => props.setSubtitle(input)}
                    />
                    <TouchableOpacity
                        style={tailwind('m-2 flex-row items-center px-2 py-1 border border-gray-400 rounded-md')}
                        onPress={() => {
                            props.addComparative()
                            props.setCompModalVisible(!props.compModalVisible)
                        }}
                    >
                        {add_icon}
                        <Text style={tailwind('text-3xl px-2 text-gray-600')}>Add to comparison</Text>
                    </TouchableOpacity>
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
const add_icon = <MIcons name={'add-chart'} style={styles.closeIcon}/>