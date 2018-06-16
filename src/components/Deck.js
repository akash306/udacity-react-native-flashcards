import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

class Deck extends React.Component {
  navigateToDeckInfo = () => {
    this.props.navigation.navigate('DeckInfo', {deck: this.props.deck})
  }
  render() {
    return (
      <TouchableOpacity onPress={() => this.navigateToDeckInfo()}>
        <View style={styles.deckstyle}>
          <Text style={styles.decktext}>{this.props.deck.title}</Text>
          <Text style={styles.cardText}>{this.props.deck.questions.length} Cards</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  deckstyle: {
    padding: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderStyle: 'solid',
    margin: 5
  },
  decktext: {
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  cardText: {
    fontSize: 15,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'rgba(0,0,0,0.5)'
  }
})

export default Deck