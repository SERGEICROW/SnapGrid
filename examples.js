import {useEffect, useState} from "react";

const [name, setName] = useState('');

//Save data
const save = async()=> {
    try {
        await AsyncStorage.setItem('MyName', name)
    }catch (err) {
        alert(err);
    }

    // let template = {
    //     name: "Template name",
    //     location: "US"
    // };
    // await AsyncStorage.setItem("MyName", JSON.stringify(template));
};



//Load data
const load = async()=> {
    try {
        let name = await AsyncStorage.getItem('MyName')

        if (name !== null) {
            setName(name)
        }
    }catch (err) {
        alert(err);
    }

    // let jsonValue = await AsyncStorage.getItem('MyName')
    //
    // if (jsonValue !=null) {}
    // setName(JSON.parse(jsonValue))

};

useEffect(()=>{
    load();
}, []);

//Remove data
const remove = async ()=> {
    try {
        await AsyncStorage.removeItem("MyName");
    } catch (err) {
        alert(err);
    } finally {
        setName('');
    }
}