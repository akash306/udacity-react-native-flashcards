import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import { getDeck } from '../utils/api'
 
const deckTitle = ''
const deck = null

class DeckInfo extends Component {
  static navigationOptions = ({ navigation }) => {
    deck = navigation.state.params.deck
    deckTitle = deck.title
    return { title: deckTitle }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleStyle}>{deck.title}</Text>
        <Text style={{fontSize: 30, opacity: 0.5}}>{deck.questions.length} cards</Text>
        <Button title='Add Card' style={styles.titleStyle} onPress={() => console.log('Btn Pressed')}/>
        <Button title='Start Quiz' style={styles.btn2Style} onPress={() => console.log('Btn Pressed')}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleStyle: {
    fontSize: 40,
    backgroundColor: '#F00'
  },
  btn1Style: {
    backgroundColor: '#F00'
  }
})


export default DeckInfo