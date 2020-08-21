import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import FeedItem from './src/components/feedItem';
//test manoel //
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: [
        {
          nome: 'Rilson',
          curtidas: 5,
        },
        {
          nome: 'Manel',
          curtidas: 15,
        },
        {
          nome: 'Gugu',
          curtidas: 105,
        },
      ],
    };
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 40,
        }}>
        <Text>Minha lista de nomes</Text>
        <FlatList
          style={{ flex: 1, width: '100%' }}
          data={this.state.lista}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <FeedItem item={item} />}
        />
      </View>
    );
  }
}
