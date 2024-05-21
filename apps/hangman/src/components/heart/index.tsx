import Image from 'next/image'
import React from 'react'
import { StyledHeartContainer } from './styles'

interface Props {
  status: number
}

export default function Heart({ status }: Props): JSX.Element {
  const size = 24
  const src = `/icons/heart-full.svg`

  return (
    <StyledHeartContainer>
      <Image height={size} src={src} width={size} />
    </StyledHeartContainer>
  )
}
