import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image, ScrollView } from 'react-native';
import UserItem from '../componet/UserItem';
import Add from '../componet/Add'
export default class List extends React.Component {
    separator = () => <View style={styles.separator} />
    add = () => this.props.add()
    delete = (code) => this.props.delete(code)
    renderItem = ({ item }) => {
        console.log(item)
        return (
            <UserItem
                title={item.name}
                code={item.id}
                delete={(code) => this.delete(code)} />
        )
    }
    render() {
        let data = this.props.data
        return (
            <View>
                
                <FlatList
                    data={data}
                    ItemSeparatorComponent={() => this.separator()}
                    renderItem={(item) => this.renderItem(item)}
                />
                <Add  add = {() => this.add()}  ></Add>

            </View>)
    }
}


const styles = StyleSheet.create({
    separator: {
        borderTopWidth: 1,
        borderTopColor: 'white'
    },
});
