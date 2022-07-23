import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class CreateJokes extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> CreateJokes </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
