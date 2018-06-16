import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import QuizCard from './QuizCard'

const deck = null

class Quiz extends Component {
  componentDidMount() {
    const {deckTitle} = this.props.navigation.state.params
    const {questions} = this.props.decks[deckTitle]
    console.log(questions)
  }

  render() {
    return (
      <View style={styles.container}>
        <QuizCard title='Are you Akash?' option='Answer' count='0' totalCount='1'/>
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
  }
})

function mapStateToProps(decks) {
  return {decks}
}

export default connect(mapStateToProps)(Quiz)