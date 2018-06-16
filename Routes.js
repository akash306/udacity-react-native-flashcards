import React from 'react'
import { createStackNavigator } from 'react-navigation'

import Index from './src/components/Index'
import NewDeck from './src/components/NewDeck'
import DeckInfo from './src/components/DeckInfo'
import NewCard from './src/components/NewCard'
import Quiz from './src/components/Quiz'

export const MainNavigator = createStackNavigator({
  Home: { 
    screen: Index,
    navigationOptions: () => ({
      title: `Home`,
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'blue'
      }
    })
  },

  NewDeck: {
    screen: NewDeck,
    navigationOptions: () => ({
      title: 'New Deck',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'blue'
      }
    })
  },

  DeckInfo: {
    screen: DeckInfo,
    navigationOptions: () => ({
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'blue'
      }
    })
  },

  NewCard: {
    screen: NewCard,
    navigationOptions: () => ({
      title: 'New Card',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'blue'
      }
    })
  },

  Quiz: {
    screen: Quiz,
    navigationOptions: () => ({
      title: 'Quiz',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'blue'
      }
    })
  }
})

// export default MainNavigator