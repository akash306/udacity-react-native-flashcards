import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'

import { getDeck } from '../utils/api'
 
const deckTitle = ''
const deck = null

class DeckInfo extends Component {
  static navigationOptions = ({ navigation }) => {
    deck = navigation.state.params.deck
    deckTitle = deck.title
    return { title: deckTitle }
  }

  render(props) {
    return (
      <View style={styles.container}>
        <Text style={styles.titleStyle}>{deck.title}</Text>
        <Text style={{fontSize: 30, opacity: 0.5}}>{deck.questions.length} cards</Text>
        <View style={styles.btnStyle}>
          <TouchableOpacity style={styles.btn1Style} onPress={() => this.props.navigation.navigate('NewCard', {deckTitle: deckTitle})}>
            <Text style={{fontSize: 25}}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn2Style} onPress={() => this.props.navigation.navigate('Quiz')}>
            <Text style={styles.textStyle}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
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
    fontSize: 40
  },
  btnStyle: {
    marginTop: 190
  },
  btn1Style: {
    width: 300,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
    margin: 2,
    borderWidth: 1
  },
  btn2Style: {
    width: 300,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
    margin: 2,
    borderWidth: 1,
    backgroundColor: 'blue'
  },
  textStyle: {
    fontSize: 25,
    color: '#FFF'
  }
})


export default DeckInfo