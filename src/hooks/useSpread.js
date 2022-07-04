import { useEffect, useState } from "react"
import useTarotCards from "./useTarotCards"
import useWindowSize from "./useWindowSize"

export default function useSpread(initSpread){
    const [cards, getCards, setCards] = useTarotCards(3)
    const windowSize = useWindowSize()

    function setPositions(){
        setCards(cards.map((card, i) => {
            return {...card, position: {x: (i - 1)/20*windowSize.width, y:0}, rotation: card.reversed  ? 180:0}
        }))
    }

    return [cards, setPositions, getCards, setCards]
}