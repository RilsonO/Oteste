import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Lista extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  }
})