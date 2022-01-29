import {TextInput, View, Text, Button} from "react-native";
import tailwind from "tailwind-rn";

export const RenderCheckbox = (props:any)=>{
    return (
        <View style={tailwind('flex-row items-center')}>
            <Text>{props.index + 1}</Text>
            <Text style={tailwind('ml-5')}>{props.text}</Text>
            <Text>: Checkbox</Text>
        </View>
    )
};

export const MyButton = ({...props})=>{
    // @ts-ignore
    return <Button color={'red'} {...props}/>
}

