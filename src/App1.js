import { StatusBar } from 'expo-status-bar';
import React,{Fragment} from 'react';
import {View, StyleSheet, Text ,Button} from 'react-native';
import MyButton from './components/MyButton';


const style = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
}

const App = () => {

    const name = 'Beomjun'
    // return undefined;
    return(
        // <View style={styles.container}>
        <View style={style}>
              <Text > My name is Beomjun</Text>
              <StatusBar style='auto'></StatusBar>
              <Button title="Button" onPress={() => alert('Click !!!!')} />
              <MyButton />
        </View>    
        // </View>
    );
};

const styles1 = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ffffff',
        },
        title: {
            fontSize: 30,
        },
    }
)

export default App;