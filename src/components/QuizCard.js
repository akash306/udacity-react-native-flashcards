import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

class QuizCard extends Component {
  state = {
    flag: true
  }
  refreshFlag() {
    this.setState({flag: 0})
  }
  render() {
    const {card} = this.props
    let question = ''
    let option = ''
    if(this.state.flag) {
      question = card["question"]
      option = 'Answer'
    }
    else {
      question = card['answer']
      option = 'Question'
    }
    return (
      <View style={styles.container}>
        <Text style={{ padding: 5, fontSize: 15, textAlign:'left' }}>
          {this.props.count}/{this.props.totalCount}
        </Text>
        <Text style={{ fontSize: 30, textAlign: 'center' }}>{question}</Text>
        <TouchableOpacity
          onPress={() => this.setState(previousState => {
            return {flag: !previousState.flag}
          })}
        >
          <Text style={{ color: 'red', marginTop: 30 }}>{option}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    marginTop: 60
  }
})

export default QuizCard
