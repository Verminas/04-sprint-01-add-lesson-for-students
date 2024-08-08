import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksAPI = {
  fetchDecks() {
    return instance.get<FetchDecksResponseType>('/v2/decks')
  },
  addDeck(payload: AddDeckRequestType) {
    return instance.post<AddDeckResponseType>('/v1/decks', payload)
  },
}

export type AddDeckRequestType = {
  name: string
}

type FetchDecksResponseType = {
  items: DeckItemType[]
  pagination: PaginationType
}
type ItemsAuthorType = {
  id: string
  name: string
}
export type PaginationType = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}

export type AddDeckResponseType = {
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string
  updated: string
  cardsCount: number
  author: ItemsAuthorType
}

export type DeckItemType = {
  isFavorite: boolean

  author: ItemsAuthorType
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string
  updated: string
  cardsCount: number
}
