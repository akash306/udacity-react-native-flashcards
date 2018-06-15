import React from 'react'
import { createStackNavigator } from 'react-navigation'

import Index from './src/components/Index'
import NewDeck from './src/components/NewDeck'


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
  }
})

// export default MainNavigator