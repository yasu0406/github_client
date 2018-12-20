/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';

export default class Home extends Component {
    state = {
        items: [],
        refreshing: false,
    }
    page = 0;
    fetchRepositories(refreshing = false) {
        const newPage = refreshing ? 1 : this.page + 1;
        this.setState({ refreshing });
        fetch('https://api.github.com/search/repositories?q=react&page=${newPage}')
            .then(response => response.json())
            .then(({ items }) => {
                this.page = newPage;
                if (refreshing) {
                    this.setState({items, refreshing : false});
                } else {
                    this.setState({items: [...this.state.items, ...items], refreshing : false});
                }
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{marginTop: 20}} onPress={() => this.fetchRepositories()}>
                    <Text>Fetch</Text>
                </TouchableOpacity>
                <FlatList
                    data={this.state.items}
                    renderItem={({item}) => <Text style={{padding: 20}}>{item.name}</Text>}
                    keyExtractor={(item) => item.id}
                    onEndReached={() => this.fetchRepositories()}
                    onEndReachedThreshold={0.1}
                    onRefresh={() => this.fetchRepositories(true)}
                    refreshing={this.state.refreshing}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
