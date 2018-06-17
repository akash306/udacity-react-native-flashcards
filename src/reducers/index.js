import { LOAD_DECKS, ADD_DECK, ADD_CARD } from '../actions'

function decks(state = {}, action) {
  switch (action.type) {
    case LOAD_DECKS:
      return {
        ...state,
        ...action.decks
      }

    case ADD_DECK:
      return {
        ...state,
        [action.deckTitle]: {
          title: action.deckTitle,
          questions: []
        }
      }

    case ADD_CARD:
      const out = {
        ...state
      }
      if (out[action.deckTitle]) {
        const { question, answer } = action.card
        out[action.deckTitle].questions.push({ question, answer })
      }
      return out

    default:
      return state
  }
}

export default decks
