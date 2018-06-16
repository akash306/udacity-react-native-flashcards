import React, { Component } from 'react'
import { Dimensions, View, Button, Text, StatusBar, ToolbarAndroid, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import { connect } from 'react-redux'

import {getDecks} from '../utils/api'
import { loadDecks } from '../actions/index'
import DeckList from './DeckList';


const decks = null
var deviceHeight = Dimensions.get('window').height
var deviceWidth = Dimensions.get('window').width

class Index extends Component {
  componentDidMount() {
    const { loadDecks } = this.props
    getDecks().then(decks => loadDecks(decks))
  }
  onPress() {
    console.log('Pressed')
  }

  render() {
    const { decks } = this.props
    const Decks = Object.values(decks)
    return (
      <View style={styles.mainContainer}>
        <DeckList navigation={this.props.navigation}/>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('NewDeck')} style={styles.TouchableOpacityStyle}>
          <Image
            source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png' }}
            style={styles.FloatingButtonStyle} />
        </TouchableOpacity>
        
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    height: deviceHeight - 80,
    width: deviceWidth,
    backgroundColor: '#FFF'
  },

  toolbar: {
    height: 50,
    backgroundColor: '#4883da',
    marginTop: 24
  },
  statusBar: {
    backgroundColor: '#4883da',
    color: '#4883da'
  },

  TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    right: 20,
    bottom: 20
  },

  FloatingButtonStyle: {
    resizeMode: 'contain',
    position: 'absolute',
    width: 50,
    height: 50
  }
})

function mapStateToProps(decks) {
  return {decks}
}

export default connect(mapStateToProps, {loadDecks})(Index)