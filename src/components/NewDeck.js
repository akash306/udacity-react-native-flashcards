import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'

import { addDeck } from '../actions'
import { saveDeckTitle } from '../utils/api'

class NewDeck extends Component {
  state = {
    deckTitle: ''
  }

  addDeckToData(title) {
    if(title) {
      saveDeckTitle(title)
      this.setState({deckTitle: ''})
      this.props.addDeck(title)
      this.props.navitation.navigate('Home')
      
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 30}}>Deck Name</Text>
        <TextInput
          style={styles.deck}
          onChangeText={(title) => this.setState({deckTitle: title})}
        />
        <Text>{this.state.deckTitle}</Text>
        <Button title='Submit' onPress={() => this.addDeckToData(this.state.deckTitle)} />
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

const mapDispatchToProps = (dispatch) => ({
  addDeck: (newDeck) => dispatch(addDeck(newDeck))
})

export default connect()(NewDeck)