import { LOAD_DECKS, ADD_DECK, ADD_CARD} from '../actions/index'

function operations(state = {}, action) {
  switch (action.type) {
    case LOAD_DECKS:
      return {
        ...state,
        ...actions.decks
      }
    case ADD_DECK: {
      return {
        ...state,
        [action.deckTitle]: {
          title: action.deckTitle,
          questions: []
        }
      }
    }
    case ADD_CARD: {
      state[action.deckTitle].questions.push(card)
      return {
        ...state,
      }
    }

  }
}

export default operations