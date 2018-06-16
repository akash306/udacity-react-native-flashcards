import React, { Component } from 'react'
import { View, Text, StatusBar, ToolbarAndroid, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import { connect } from 'react-redux'

import { getDecks } from '../utils/api'
import { loadDecks } from '../actions/index'
import Deck from './Deck'

const decks = null

const DeckList = (props) => {
  const { decks } = props
  const Decks = Object.values(decks)
  return (
    <ScrollView>
      <View>
        {Decks.map(deck => {
          return <Deck key={deck.title} deck={deck} navigation={props.navigation
          }></Deck>
        })}
      </View>
    </ScrollView>
  )
  
}

function mapStateToProps(decks) {
  return { decks }
}

export default connect(mapStateToProps)(DeckList)