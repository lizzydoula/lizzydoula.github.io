// libs
import React from 'react'
import styled from 'react-emotion'

const Image = styled.img`
  display: block;
  margin: 0;
  height: 372px;
  width: 100%;
  object-fit: cover;
  opacity: 0.8;
`

const PromoImage = () => <Image src="/doula.jpg" alt="Доула" />

export { PromoImage }
