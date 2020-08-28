//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import UserData from './src/componet/UserData';
//import UserItem from './src/componet/UserItem';
import ReciveCall from './src/componet/ReciveCall';
import List from './src/container/ListContact';


export default class App extends React.Component {

  showList = () =>(!this.state.llamando)? this.setState({ showList: false, showPerfil: false }):{};

  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          title: 'contacto 1 ',
          code: 'p1',
          key: 'p1',
        },
        {
          title: 'contacto 2 ',
          code: 'p2',
          key: 'p2',
        },
        {
          title: 'contacto 3 ',
          code: 'p3',
          key: 'p3'
        }
      ],
      cont: 4,
      llamando: false,
      showPerfil: false,
      showCalling: false,
      showList: false,

    }
  }

  add() {
    let data = this.state.data
    data.push({
      title: 'contacto ' + (data.length + 1),
      code: 'k' + this.state.cont + 1 + '',
      key: 'k' + this.state.cont + 1 + '' + new Date(),

    })
    this.setState({ data: data, cont: data.length })
  }



  delete(code) {
    let data = this.state.data
    for (let index = 0; index < data.length; index++) {
      if (data[index].code === code) {
        data.splice(index, 1)
        break;
      }
    }
    this.setState({ data: data })
  }



  List() {
    let data = this.state.data
    if (this.state.showList)
      return (
        <List data={data} add={() => this.add()} delete={(key) => this.delete(key)} />
      )
  }
  calling() {
    if (this.state.llamando)
      return (<View>
        <Text style={styles.llamando}  >
          llamando ...
        </Text>
      </View>)
  }
  call(){
    this.setState({ llamando: !this.state.llamando , showList: false , showCalling:false})
  }


  showUser() {
    if (this.state.showPerfil && !this.state.llamando)
      return (<UserData title={{ name: 'megano', code: '1234' }}  ></UserData>)
  }

  showCall() {
    if (this.state.showCalling)
      return (
        ReciveCall({ name: 'el vato', code: '1234' })
      )
  }

  /*
              <Button
              title="emergencia"
              color={styles.emergence.backgroundColor}
              onPress={() => this.setState({ llamando: !this.state.llamando , showList: false , showCalling:false})}
              //style={styles.emergence}
              accessibilityLabel="Learn more about this purple button"
            />
  */
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.emergence} >
          <TouchableOpacity onPress={()=>this.call()}   >
            <Text style={styles.callButton} >
              llamar
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.options} >

          <Button
            title="contactos"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            onPress={() => this.showList()}
          />
          <Button
            title={'perfil'}
            onPress={() => this.setState({ showPerfil: !this.state.showPerfil, showList: false, showCalling: false })}
          />

          <Button
            title={'testing  '}
            onPress={() => this.setState({ showPerfil: false, showList: false, showCalling: !this.state.showCalling })}

          />
        </View>


        {this.showUser()}
        {this.calling()}
        {this.List()}
        {this.showCall()}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003333',
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  emergence: {
    color: 'white',
    backgroundColor: '#ff4d4d',
    marginVertical: 50,
    marginHorizontal: 10
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  userItem: {
    flexDirection: "row"
  },

  options: {
    flexDirection: "row",
    paddingHorizontal: '30%'
  },



  llamando: {
    color: 'red',
    //flex:1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '30%',
    fontSize: 30

  },
  callButton:{
      textAlign:"center",
      color:'white',
      padding:5
  },

});
