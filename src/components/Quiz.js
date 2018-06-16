import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import QuizCard from './QuizCard'

const cards = null

class Quiz extends Component {
  state = {
    index: 0,
    correctAnswer: 0
  }

  changeStatusHandler() {
    this.setState({status: !this.state.status})
  }

  answerHandler(answer) {
    if(answer) {
      this.setState({ correctAnswer: this.state.correctAnswer + 1})
    }
    this.setState({index: this.state.index + 1})
  }



  render() {
    const cards = this.props["questions"]
    let index = this.state.index

    if (index >= 0 && index < cards.length) {
      return (
        <View style={styles.container}>
          <QuizCard
            key={cards[index].question}
            card={cards[index]}
            option='Answer'
            count={index + 1}
            totalCount={cards.length} />
          <TouchableOpacity
            style={[
              styles.btnStyle,
              { backgroundColor: 'green'}
            ]}
            onPress={() => this.answerHandler(true)}>
            <Text style={{ fontSize: 25, color: 'white' }}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnStyle, { backgroundColor: 'red', marginBottom: 60 }]}
            onPress={() => this.answerHandler(false)}>
            <Text style={{ fontSize: 25, color: 'white' }}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      )
    }
    else {
      return <View style={styles.container}>
          <Text style={{ fontSize: 25, textAlign: 'center' }}>
            {this.state.correctAnswer} out of {cards.length} are correct
          </Text>
          <TouchableOpacity style={[styles.btnStyle, { backgroundColor: 'blue', marginBottom: 60 }]} onPress={()=> this.props.navigation.goBack()}>
            <Text style={{ fontSize: 25, color: 'white' }}>
              Try Again
            </Text>
          </TouchableOpacity>
        </View>
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
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

function mapStateToProps(decks, { navigation }) {
  const { deckTitle } = navigation.state.params
  const cards = decks[deckTitle]
  return cards
}

export default connect(mapStateToProps)(Quiz)