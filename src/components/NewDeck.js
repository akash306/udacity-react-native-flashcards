import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import {connect} from 'react-redux'



class NewDeck extends Component {
  state = {
    deckTitle: ''
  }

  addDeckToData() {
    if(this.state.deckTitle) {

    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 30}}>Deck Name</Text>
        <TextInput
          style={styles.deck}
          onChangeText={(title) => this.setState({title})}
        />
        <Button title='Submit' onPress={this.addDeckToData} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  deck: {
    fontSize: 30,
    height: 50,
    width: 300,

  }
})

function mapStateToProps(decks) {
  return {decks}
}

export default NewDeck