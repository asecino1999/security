import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image, ScrollView } from 'react-native';

export default class UserData extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.user} >
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png' }}
            style={styles.tinyLogo}
          />
          <View>
          <View>
          <Text style={styles.userProf}  >  nombre : {this.props.title.name}  </Text>
          </View>
          <View>
          <Text style={styles.userProf} >  telefono : {this.props.title.code}  </Text>
          </View>
          <View>
          <Text style={styles.userProf} >  email : {this.props.title.email}  </Text>
          </View>

          </View>
          
        </View>

        <Button
          title={'logout'}
        />
        <Button
          title={'edit'}
        />
      </View>
    )
  }
}



const styles = StyleSheet.create({    
    tinyLogo: {
      width: 50,
      height: 50,
    },
    userProf: {
      color: 'white'
    },
    user: {
      marginVertical: '10%',
      flexDirection: "row",
    }
  });
  