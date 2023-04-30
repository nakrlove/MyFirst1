import React,{useState} from "react";
import { View, Text ,TextInput, Pressable} from 'react-native'

const EventInput = () => {

    const [text,setText] = useState('');

    const _onChange = event => {
        console.log(event);
        setText(event.nativeEvent.text);
    }

    const _onChangeText = text => {
        setText(text);
    }
    return (
        <View>

                <Text style={{ borderWidth: 1, padding: 10, color:'black',fontSize:14}}> text: {text} </Text>
                
                <TextInput style={{ width:100,borderWidth: 1, padding: 10, fontSize:14}}
                 placeholder="Enter a text..."
                 onChangeText={_onChangeText} >Press</TextInput>
        </View>
    );
}

export default EventInput