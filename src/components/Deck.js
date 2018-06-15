import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const Deck = (props) => {
  return (
    <TouchableOpacity>
      <View style={styles.deckstyle}>
        <Text style={styles.decktext}>{props.deck.title}</Text>
        <Text style={styles.cardText}>{props.deck.questions.length} Cards</Text>
      </View>
    </TouchableOpacity>
  )
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