import { AppDispatch } from '../../app/store.ts'
import { AddDeckRequestType, decksAPI } from './decks-api.ts'
import { addDecksAC, setDecksAC } from './decks-reducer.ts'

export const fetchDecksTC = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const res = await decksAPI.fetchDecks()
      dispatch(setDecksAC(res.data.items))
    } catch (e) {
      console.warn(`Failed to fetch decksAC: ${e}`)
    }
  }
}

export const addDeskTC = (payload: AddDeckRequestType) => {
  return async (dispatch: AppDispatch) => {
    try {
      const res = await decksAPI.addDeck(payload)
      dispatch(addDecksAC(res.data))
    } catch (e) {
      console.warn(`Failed to add deskTC: ${e}`)
    }
  }
}
