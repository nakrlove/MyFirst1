import React ,{ useState } from "react";
import { Dimensions } from 'react-native';
import styled , {ThemeProvider} from 'styled-components/native';
import { theme , darkTheme ,lightTheme} from "./theme";
import Input from "./components/Input";
import Button from "./components/Button";
import EventButton from './EventButton';
import Task from "./components/Task";

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({theme}) => theme.background };
    align-itmes: center;
    justify-content: flex-start;
`;
const List = styled.ScrollView`
    flex: 1;
    width: ${({ width }) => width -40}px;
`

export default function App() {

    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] =useState({
        '1': {id: '1',text: 'Hanbit' ,completed: false},
        '2': {id: '2',text: 'React Native' ,completed: true},
        '3': {id: '3',text: 'React Native Sample' ,completed: false},
        '4': {id: '4',text: 'Edit TODO Item' ,completed: false},
    });

    const _addTask = () => {
        const ID = Date.now().toString();
        const newTaskObject = {
            [ID]:{id: ID, text: newTask,completed : false},
        }
        setNewTask('');
        setTasks({...tasks,...newTaskObject});      
    }

    const _deleteTask = id => {
        const currentTasks = Object.assign({},tasks);
        delete currentTasks[id];
        setTasks(currentTasks);
    }

    const _toggleTask = id => {
        const currentTasks = Object.assign({}, tasks);
        currentTasks[id]['completed'] = !currentTasks[id]['completed'];
        setTasks(currentTasks);
    }


    const _updateTask = item => {
        const currentTasks = Object.assign({}, tasks);
        currentTasks[item.id] = item;
        setTasks(currentTasks);
    }
    const _handleTextChange = text => {
        setNewTask(text)
    }

    const _onBlur = () => {
      
        setNewTask('')
    }

    const width = Dimensions.get('window').width;

    return(
        <ThemeProvider theme={theme}>
            <Container >
               
                {/* <EventButton />
                <Button title="Button"/>

                  */}

                {/* <IconButton type={images.completed} />  */}
                <Input borderColor="#3498db" 
                       placeholder="+Add a Task" 
                       onChangeText={_handleTextChange}
                       value={newTask}
                       onSubmitEditing={_addTask}
                       onBlur={_onBlur}/>
                       
                <List width={width}>

                    {Object.values(tasks).reverse().map(item => (
                        
                        <Task key={item.id} 
                              item={item} 
                              deleteTask={_deleteTask}
                              toggleTask={_toggleTask}
                              updateTask={_updateTask}/>
                    ))}
                
                </List>
                
           </Container>
        </ThemeProvider>
    )
}