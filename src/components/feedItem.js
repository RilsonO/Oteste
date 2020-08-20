import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class feedItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          borderBottomWidth: 0.5,
          backgroundColor: '#000',
          margin: 5,
          flex: 1,
        }}>
        <Text>Nome: {this.props.item.nome}</Text>
        <View style={{width: '80%', height: 200, backgroundColor: 'red'}}>
          <Text>foto</Text>
        </View>
        <Text>Curtidas: {this.props.item.curtidas}</Text>
      </View>
    );
  }
}
