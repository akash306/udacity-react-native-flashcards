import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { addCard } from '../actions'
import { addCardToDeck } from '../utils/api'

class NewCard extends Component {
  state = {
    question: '',
    answer: ''
  }

  addCardToData({ navigation, dispatch }) {
    const { question, answer } = this.state
    const {deckTitle} = navigation.state.params
    if (question && answer) {
      dispatch(addCard(deckTitle, { question, answer }))
      addCardToDeck(deckTitle, { question, answer })
      navigation.navigate('Home')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30 }}>Question</Text>
        <TextInput
          style={styles.deck}
          placeholder='Enter Answer'
          onChangeText={(ques) => this.setState({ question: ques })}
        />
        <Text style={{ fontSize: 30 }}>Answer</Text>
        <TextInput
          style={styles.deck}
          placeholder='Enter Answer'
          onChangeText={(ans) => this.setState({ answer: ans })}
        />
        <TouchableOpacity style={styles.btnStyle} onPress={() => this.addCardToData(this.props)}>
          <Text style={{ fontSize: 25, color: 'white' }}>Add Card</Text>
        </TouchableOpacity>
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
    fontSize: 20,
    height: 50,
    width: 300,
    textAlign: 'center'
  },
  btnStyle: {
    width: 300,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
    margin: 2,
    borderWidth: 1,
    backgroundColor: 'blue'
  }
})

const mapDispatchToProps = (dispatch) => {
  return dispatch
}

export default connect(mapDispatchToProps)(NewCard)