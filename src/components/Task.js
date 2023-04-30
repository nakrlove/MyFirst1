import React, { useState } from 'react';
import IconButton from './IconButton';
//import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { images } from '../images';
import Input from './Input';

const Container = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: ${({theme}) => theme.itemBackground};
    border-radius: 10px;
    padding: 5px;
    margin: 3px 0px;
`;

const Contents = styled.Text`
    flex: 1;
    font-size: 24px;
    color: ${({ theme ,completed}) => (completed ? theme.done : theme.text)};
    text-decoration-line: ${({ completed }) => completed ? 'line-through' : 'none'};
`;




const Task = ({ item, deleteTask , toggleTask ,updateTask }) => {

    const [isEditing,setIsEditing] = useState(false);
    const [text,setText]           = useState(item.text);


    const _onBlur = () => {
        if(isEditing){
            setIsEditing(false);
            setText(item.text)
        }
    }
    const _handleUpdateButtonPress = (isView) => {
        setIsEditing(isView);
    }

    const _onSubmitEditing = () => {
        if(isEditing){
            const editedTask = Object.assign({},item,{ text });
            setIsEditing(false);
            updateTask(editedTask);
        }
    }

   
    return isEditing ? 
    (
        <Container>
            <Input value={text} 
                onChangeText={text => setText(text)}
                onSubmitEditing={_onSubmitEditing}
                onBlur={_onBlur} />
            <IconButton type={images.cancel} id={item.id} onPressOut={() => _handleUpdateButtonPress(false)} />
         </Container>
    ) : (
        <Container>
            <IconButton type={ item.completed ? images.completed : images.uncompleted } 
                        onPressOut={toggleTask} 
                        id={item.id} 
                        completed={item.completed}/>
            <Contents completed={item.completed}>{item.text}</Contents>
            {item.completed || <IconButton type={images.update} item={item} onPressOut={() => _handleUpdateButtonPress(true)}/> }
            <IconButton type={images.delete} id={item.id} onPressOut={deleteTask} />
        </Container>
    );
}


Task.propTypes = {
    item: PropTypes.object.isRequired,
    deleteTask: PropTypes.func.isRequired,
    toggleTask: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
}
export default Task;