import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const QuizCard = props => {
  return (
    <View>
      <Text style={{ padding: 5, fontSize: 15 }}>
        {props.count}/{props.totalCount}
      </Text>
      <View style={styles.container}>
        <Text style={{ fontSize: 60, textAlign: 'center' }}>{props.title}</Text>
        <Text 
          style={{ color: 'red', marginTop: 30 }}
          onPress={() => console.log('Pressed')}>
          {props.option}
        </Text>
        <TouchableOpacity
          style={[
            styles.btnStyle,
            { backgroundColor: 'green', marginTop: 100 }
          ]}
          onPress={() => console.log('Button Clicked')}>
          <Text style={{ fontSize: 25, color: 'white' }}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btnStyle, { backgroundColor: 'red' }]}
          onPress={() => console.log('Button Clicked')}>
          <Text style={{ fontSize: 25, color: 'white' }}>Incorrect</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
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

export default QuizCard
