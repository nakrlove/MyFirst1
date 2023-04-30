import React,{useState} from "react";
import { View, Text ,Pressable} from 'react-native'


const EventButton = () => {

    const _onPressIn = () => console.log('Press In !!!\n');
    const _onPressOut = () => console.log('Press Out !!!\n');
    const _onPress = () => console.log('Press  !!!\n');
    const _onLongPress = () => console.log('Long Press !!!\n');
    return (
        <Pressable  
            style={{alignItems: 'center',
            backgroundColor: '#f1c40f',
            padding: 16,
            margin: 10,
            borderRadius: 8
            }}
            delayLongPress={3000}
            onPressIn={_onPressIn}
            onPressOut={_onPressOut}
            onPress={_onPress}
            onLongPress={_onLongPress}>
            <Text style={{color:'white',fontSize:24}}>Press</Text>
        
        </Pressable>
    );
}


export default EventButton;