import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image, ScrollView,TextInput, TextInputBase } from 'react-native';
export default class Add extends React.Component {
    show = () => this.setState({ show: !this.state.show })

    constructor(props) {
        super(props)
        console.log('ddfsdffdsf')
        this.state = {
            
        }
    }
    render(){
        return (<View  style={styles.add}>
            <Button title={'add'} onPress={()=>this.props.add()} ></Button>
            <TextInput    keyboardType='numeric' style={styles.input} ></TextInput>
        </View>)
    }
}



const styles = StyleSheet.create({
    input: {
        backgroundColor:'white',
        width:200
    },
    add : {
        flexDirection: "row",
        justifyContent:"center"
        
    },
});
