import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image, ScrollView } from 'react-native';
import UserItem from '../componet/UserItem';

export default class List extends React.Component {
    separator = () => <View style={styles.separator} />
    add = () => this.props.add()
    delete = (code) => this.props.delete(code)
    renderItem = ({ item }) => {
        console.log(item)
        return (
            <UserItem
                title={item.title}
                code={item.code}
                delete={(code) => this.delete(code)} />
        )
    }
    render() {
        let data = this.props.data
        return (
            <View>
                <Button
                    title={'add'}
                    onPress={() => this.add()}
                />
                <FlatList
                    data={data}
                    ItemSeparatorComponent={() => this.separator()}
                    renderItem={(item) => this.renderItem(item)}
                />
            </View>)
    }
}


const styles = StyleSheet.create({
    separator: {
        borderTopWidth: 1,
        borderTopColor: 'white'
    },
});
