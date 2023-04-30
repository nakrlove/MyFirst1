import React,{useState} from "react";
import { Pressable,View, Button, Text } from 'react-native'
import PropTypes from 'prop-types';

const MyButton = props => {

    const [count,setCount] = useState(0);
    // console.log(props)
    MyButton.defaultProps = {
        title: 'Button',
    }
    MyButton.propTypes = {
        title: PropTypes.string.isRequired,
    }
    return (
        <Pressable 
            style={{
                backgroundColor:'#3498db',
                padding: 16,
                margin: 10,
                borderRadius: 8,
            }}
            onPress={() => props.onPress()}>

            <Text>{props.children || props.title}</Text>
        </Pressable>
    );
}


export default MyButton;