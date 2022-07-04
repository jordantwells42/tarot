import { useEffect, useRef, useState } from 'react'
import useSpread from '../hooks/useSpread'
import Card from './card'

export default function Board () {
  let [cards, setPositions, getCards, setCards] = useSpread()
  const boardRef = useRef(0)

  function setOnTop (key) {
    setCards(
      cards.map((card, i) => {
        const zIndex =
          i === key
            ? Math.max(...cards.map(card => card.zIndex)) + 1
            : card.zIndex
        return { ...card, zIndex: zIndex }
      })
    )
  }

  function toHome () {
    setCards(
      cards.map((card, i) => {
        return { ...card, position: { x: 0, y: 0 }, rotation: 0 }
      })
    )
  }

  function refresh () {
    getCards()
  }

  function toPositions () {
    setPositions()
  }

  function setPositionAndRotation (key, position, rotation) {
    setCards(
      cards.map((card, i) => {
        if (i === key) {
          return { ...card, position: position, rotation: rotation }
        }
        return card
      })
    )
  }
  console.log(cards)
  return (
    <div>
      <div
        ref={boardRef}
        className='w-full h-screen bg-slate-500 flex flex-col items-center justify-center'
      >
        <h1 className="text-6xl pt-20 text-center text-slate-900 font-bold">Tarot Reading</h1>
        <div className='w-full flex h-[80%] flex-row items-center justify-center'>
        {cards &&
          cards.map((card, idx) => {
            return (
              <Card
                {...card}
                setTransform={setPositionAndRotation}
                idx={idx}
                setOnTop={setOnTop}
                key={idx}
                style={{ zIndex: card.zIndex }}
                boardRef={boardRef}
              />
            )
          })}
          </div>
        <div className='pb-10 flex flex-row gap-10'>
          <button
            onClick={refresh}
            className='border-2 rounded-2xl border-slate-900 p-4 text-white font-bold'
          >
            New Cards
          </button>
          <button
            onClick={toPositions}
            className='border-2 rounded-2xl border-slate-900 p-4 text-white font-bold'
          >
            Get Reading
          </button>
        </div>
      </div>
      
    </div>
  )
}
