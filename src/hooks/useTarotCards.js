import { kMaxLength } from "buffer"
import { useEffect, useState } from "react"
import tarotImages from "./../../public/tarot-images.json"

export default function useTarotCards (num) {
  
  const [cards, setCards] = useState([])
  const [refresh, setRefresh] = useState(0)

  function getCards(){
    setRefresh(p => p + 1)
  }

  useEffect(() => {
    let randomCards =  tarotImages.cards.sort(() => Math.random() - 0.5).slice(0, num)
    console.log(randomCards)
    setCards(randomCards.map(card => {
      return {
          ...card,
          position: {
              x: -1000*Math.random(),
              y: -1000*Math.random()
          },
          rotation: Math.random()*359,
          reversed: Math.random() > 0.5? true: false,
      }
    }))
  }, [refresh, num])

  useEffect(() => {
    getCards()
  }, [])

  return [cards, getCards, setCards]
}
