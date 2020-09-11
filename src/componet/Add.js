import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image, ScrollView,TextInput, TextInputBase } from 'react-native';
export default class Add extends React.Component {
    show = () => this.setState({ show: !this.state.show })

    constructor(props) {
        super(props)
        console.log('ddfsdffdsf')
        this.state = {
            phone:null
        }
    }
    render(){
        return (<View  style={styles.add}>
            <Button title={'add'} onPress={()=>{this.props.add(this.state.phone) ;this.setState({phone:null})}} ></Button>
            <TextInput onChange={(text)=>this.setState({phone:Number(text)})}   keyboardType='numeric' style={styles.input} text={this.state.phone} ></TextInput>
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
