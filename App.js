//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import UserData from './src/componet/UserData';
//import UserItem from './src/componet/UserItem';
import ReciveCall from './src/componet/ReciveCall';
import List from './src/container/ListContact';
import Add from './src/componet/Add'



import axios from 'react-native-axios';

let host ='http://192.168.1.12:3000'
let usercode= 979010454
export default class App extends React.Component {

  showList = () =>{
    return (!this.state.llamando)? this.setState({ showList: !this.state.showList, showPerfil: false }):{};}

  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          name: 'contacto 1 ',
          id: 'p1',
          key: 'p1',
          photo:'',
          state:"NoProblem"
        },
        {
          name: 'contacto 2 ',
          id: 'p2',
          key: 'p2',
          photo:'',
          state:"NoProblem"
        },
        {
          name: 'contacto 3 ',
          id: 'p3',
          key: 'p3',
          photo:'',
          state:"NoProblem"
        }
      ],
      perfil:{
        name: 'contacto 3 ',
          id: 'p3',
          key: 'p3',
          photo:'',
          state:"NoProblem"
      },
      cont: 4,
      llamando: false,
      showPerfil: false,
      showCalling: false,
      showList: false,

    }
  }
 componentDidMount(){
  this.updateData()
  this.timer = setInterval(()=> this.getContactstate(), 1000)
 }


 getContactstate (){
  const urlcontact = host + '/api/users/contacts/'+usercode;
  axios(urlcontact).then((res)=>{
    let users = res.data.userContact
    users.forEach(element => {
        if(element.state!=="NoProblem"){
          this.showCall()
        }
    });
  })
 }
 updateData(){
  const urlcontact = host + '/api/users/contacts/'+usercode;
  const urlperfil = host + '/api/users/get/'+usercode;

  let users 
  
   axios.get(urlcontact)
   .then(res => {
    const persons = res.data;
    users = res.data.userContact
    users=users.map((index)=>{
      index.key=index.key?index.key: 'k' + this.state.cont + 1 + '' + new Date()
      return index
    })
  })
  .then(()=>axios.get(urlperfil))
  .then((res)=>{

    this.setState( { data:users , perfil:res.data.users})
  })
  .catch((e)=>console.log(e))
 }

  add(id) {
    let data = this.state.data
    
    const newUser = {
      name: 'contacto ' + (data.length + 1),
      id: id?id: Number(new Date()),
      key: 'k' + this.state.cont + 1 + '' + new Date(),
      email: "jsmith@yahoo.com",
      contacts: [],
      photo: "https://los40es00.epimg.net/los40/imagenes/2016/05/09/videojuegos/1462795844_886980_1462795962_noticia_normal.jpg",
      state: "NoProblem"

    };
    
    //data.push(newUser)
    const urladd = host + '/api/users/addcontact/'+usercode+'/'+newUser.id;
    const urlcreate= host + '/api/users/add';

    axios({
      method: 'post',
      url: urlcreate,
      data: {user:newUser}
    })//.then (()=>this.setState({ data: data, cont: data.length }))
    .then(()=>axios(urladd))
    .then(()=>this.updateData())
    .catch((e)=>console.log(e))
    
  }



  delete(id) {
    const urlall = host + '/api/users/delcontact/'+usercode+'/'+id;
    axios.get(urlall).
    then((res)=>{
      this.updateData()

    })
    .catch((e)=>console.log(e))
  }



  List() {
    let data = this.state.data
    //console.log(this.state.showList)
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

    const urlcall = host + '/api/users/call/'+usercode;
    axios(urlcall).
    catch((e)=>console.log(e))
    this.setState({ llamando: !this.state.llamando , showList: false , showCalling:false})
  }


  showUser() {
    if (this.state.showPerfil && !this.state.llamando)
      return (<UserData title={{ name: this.state.perfil.name, code: this.state.perfil.id , photo:this.state.perfil.photo }}  ></UserData>)
  }

  showCall() {

    if (this.state.showCalling){

      let name =''
      let number=0 
      this.state.data.forEach(element => {
        if(element.state!=='NoProblem'){
          name=element.name
          number=element.number
        }
      });
      return (
        ReciveCall({ name: name, code: number })
      )}
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
    fontSize: 30,
    borderRadius: 10,

  },
  callButton:{
      textAlign:"center",
      color:'white',
      padding:5,
      borderRadius: 10,
  },

});
