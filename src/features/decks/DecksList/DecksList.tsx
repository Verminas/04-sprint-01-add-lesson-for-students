import s from './DecksList.module.css'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { useFetchDecks } from '../hooks/useFetchDecks.ts'

export const DecksList = () => {
  const { decks } = useFetchDecks()
  const decksListElements = decks.map((d) => <DeckItem deck={d} key={d.id} />)
  return <ul className={s.list}>{decksListElements}</ul>
}
