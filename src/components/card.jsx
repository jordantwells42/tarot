/* eslint-disable @next/next/no-img-element */
import { useDrag } from '@use-gesture/react'
import { useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import Image from 'next/image'

export default function Card ({
  idx,
  style,
  boardRef,
  rotation = 0,
  setOnTop,
  setTransform,
  position = { x: 0, y: 0 },
  name,
  arcana,
  fortune_telling,
  keywords,
  meanings,
  reversed,
  img
}) {
  const [flipped, setFlipped] = useState(false)
  const [{ x, y, scale, rotate, boxShadow }, api] = useSpring(() => ({
    x: position.x,
    y: position.y,
    scale: 1,
    rotate: rotation,
    boxShadow: '0px 10px 20px rgba(0,0,0,0.5)'
  }))
  const { opacity, transform } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`
  })
  const bind = useDrag(
    ({
      down,
      initial: [ix, iy],
      delta: [ox, oy],
      velocity: [vx, vy],
      direction: [dx, dy]
    }) => {
      setOnTop(idx)
      setTransform(
        idx,
        { x: position.x + ox, y: position.y + oy },
        down ? dy * vy + dx * vx + rotation : rotation
      )
      api.start({
        scale: down ? 1.1 : 1,
        boxShadow: down
          ? '0px 8px 16px rgba(0, 0, 0, 0.5)'
          : '0px 10px 30px rgba(0,0,0,0.5)'
      })
    },
    {
      bounds: boardRef,
      filterTaps: true
    }
  )

  useEffect(() => {
    api.start({
      x: position.x,
      y: position.y,
      scale: 1,
      rotate: rotation,
      boxShadow: '0px 2px 3px rgba(0,0,0,0.5)'
    })
  }, [position, rotation])

  function handleClick () {
    setFlipped(p => !p)
  }

  return (
    <animated.div
      {...bind()}
      onClick={handleClick}
      style={{
        transform,
        x,
        y,
        scale,
        rotate,
        boxShadow,
        touchAction: 'none',
        ...style
      }}
      className='rounded-xl w-1/4 lg:w-1/5 xl:w-1/6 aspect-[5/9]'
    >
      <div
        style={{ opacity: flipped ? 0 : 1 , boxShadow: "0 0 5px #000"}}
        className='absolute border border-slate-800 w-full h-full rounded-xl bg-orange-50 flex flex-col items-center justify-evenly'
      >
        <p className='font-bold text-[8px] sm:text-[12px] lg:text-lg'>{name}</p>

        <div className='relative rounded-xl aspect-[0.56] w-full'>
          <Image
            draggable='false'
            className="rounded-xl"
            style={{ userSelect: 'none' }}
            alt='lmao'
            src={`/cards/${img}`}
            layout='fill'
          />
        </div>
      </div>
      <div
        style={{
          opacity: flipped ? 1 : 0,
          transform: reversed ? 'scale(1,-1)' : 'scale(-1,1)',
        }}
        className='border border-slate-800 w-full h-full rounded-xl bg-orange-50 flex flex-col items-center justify-start pt-2'
      >
        <div className='overflow-hidden w-5/6 text-xs md:text-base lg:text-lg'>
          <p className='font-bold text-xs md:text-lg lg:text-2xl'>{name}</p>
          <p className='font-bold text-xs md:text-lg lg:text-2xl'>{arcana}</p>
          <div className='pt-2 md:pt-4'>
            <p className='font-bold'>Keywords:</p>

            <p className='capitalize'>{keywords.join(', ')}</p>
          </div>
          <div className='pt-2 md:pt-4 opacity-0 md:opacity-100'>
            <p className='font-bold'>
              Meanings in {reversed ? 'reversed' : 'upright'}:
            </p>
            {reversed &&
              meanings.shadow.slice(0, 3).map(meaning => (
                <p className='capitalize' key={meaning}>
                  -{meaning}
                </p>
              ))}
            {!reversed &&
              meanings.light.slice(0, 3).map(meaning => (
                <p className='capitalize' key={meaning}>
                  -{meaning}
                </p>
              ))}
          </div>
        </div>
      </div>
    </animated.div>
  )
}
