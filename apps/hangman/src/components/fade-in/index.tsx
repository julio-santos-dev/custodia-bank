import { gsap } from 'gsap'
import React, { useEffect, useRef } from 'react'

interface Props {
  children: any
  delay?: number
  direction: string
  distance?: number
  duration?: number
}

export default function FadeIn({
  children,
  delay = 0,
  direction = null,
  distance = 200,
  duration = 1,
  ...props
}: Props): JSX.Element {
  const compRef = useRef(null)
  let fadeDirection

  switch (direction) {
    case 'left':
      fadeDirection = { x: -distance }
      break

    case 'right':
      fadeDirection = { x: distance }
      break

    case 'up':
      fadeDirection = { y: distance }
      break

    case 'down':
      fadeDirection = { y: -distance }
      break

    default:
      fadeDirection = { x: 0 }
  }

  useEffect(() => {
    gsap.from(compRef.current, 1, {
      ...fadeDirection,
      delay,
      duration,
      opacity: 0,
    })
  }, [compRef, fadeDirection, delay, duration])

  const Component = React.cloneElement(children, {
    ref: compRef,
    ...props,
  })

  return <>{Component}</>
}
