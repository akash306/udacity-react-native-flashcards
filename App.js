import React from 'react'
import { StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducer from './src/reducers'
import {MainNavigator} from './Routes'
import { setLocalNotification } from './src/utils/api'

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
          <MainNavigator />
      </Provider>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
