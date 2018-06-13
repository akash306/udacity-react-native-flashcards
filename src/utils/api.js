import { AsyncStorage } from 'react-native'

 const initialData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

const KEY = '@UdaciCards:Data'

export function getDecks() {
  AsyncStorage.getItem(KEY).then(data => {
    if (!data) {
      AsyncStorage.setItem(KEY, JSON.stringify(initialData))
      return initialData
    }
    else {
      return JSON.parse(data)
    }
  })
}

export function getDeck(id) {
  AsyncStorage.getItem(KEY).then(data => data[id])
}

export function saveDeckTitle(title) {
  const data = AsyncStorage.getItem(KEY)
  if (data[title]) {
    data[title] = {
      title,
      question: []
    }
    AsyncStorage.setItem(KEY, JSON.stringify(data))
  }
}

export function addCardToDeck(title, question) {
  const data = AsyncStorage.getItem(KEY)
  if (data[title]) {
    data[title]['questions'].push(question)
    AsyncStorage.setItem(KEY, JSON.stringify(data))
  }
}