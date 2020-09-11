

import { StyleSheet, Text, View, Button, Image } from 'react-native';
import React from 'react';

export default class UserItem extends React.Component {
    show = () => this.setState({ show: !this.state.show })

    constructor(props) {
        super(props)
        this.state = {
            userIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png',
        }
    }

    render() {
        console.log(this.props)
        return (
            <View
                style={styles.userItem}
            >
                <Image
                    source={{ uri: this.state.userIcon }}
                    style={styles.tinyLogo}
                />

                <Text style={{ flex: 1, color: 'white' }}  >
                    {this.props.title}
                </Text>
                <Button
                    title={'eliminar'}
                    onPress={() => this.props.delete(this.props.code)}
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
    userItem: {
        flexDirection: "row"
    },
});
