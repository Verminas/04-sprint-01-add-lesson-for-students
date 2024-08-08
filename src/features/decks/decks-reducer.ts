import { AddDeckResponseType, DeckItemType } from './decks-api.ts'

const initialState = {
  decks: [] as DeckItemType[], // todo: add type
  searchParams: {
    name: '',
  },
}

export type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'DECKS/SET-DECKS': {
      return { ...state, decks: action.payload.items }
    }
    case 'DECKS/ADD-DECK': {
      return {
        ...state,
        decks: [{ ...action.payload.item, isFavorite: false }, ...state.decks],
      }
    }
    default:
      return state
  }
}

type DecksActions = SetDecksActionType | AddDeckActionType

type SetDecksActionType = ReturnType<typeof setDecksAC>
type AddDeckActionType = ReturnType<typeof addDecksAC>

export const setDecksAC = (items: DeckItemType[]) =>
  ({
    type: 'DECKS/SET-DECKS',
    payload: {
      items,
    },
  }) as const

export const addDecksAC = (item: AddDeckResponseType) =>
  ({
    type: 'DECKS/ADD-DECK',
    payload: {
      item,
    },
  }) as const
