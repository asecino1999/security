import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image, ScrollView } from 'react-native';


export default function ReciveCall(props) {
    return (
        <View>
            <View style={styles.user} >
                <Image
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png' }}
                    style={styles.tinyLogo}
                />
                <Text style={styles.userProf}  >  nombre : {props.name}  </Text>
                <Text style={styles.userProf} >  codigo : {props.code}  </Text>
            </View>
            <Text style={styles.llamando}  >
                esta en Peligro  ...
           </Text>
        </View>
    )
}








const styles = StyleSheet.create({
    tinyLogo: {
        width: 50,
        height: 50,
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
    userProf: {
        color: 'white'
    },
    user: {
        marginVertical: '10%',
        flexDirection: "row",
    }
});
