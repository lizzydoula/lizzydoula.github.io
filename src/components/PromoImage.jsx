// libs
import React from 'react'
import styled from 'react-emotion'

const Image = styled.img`
  display: block;
  margin: 0;
  height: 400px;
  width: 100%;
  object-fit: cover;
  opacity: 0.8;
`

const PromoImage = ({ src }) => <Image src={src} alt="Доула" />

export { PromoImage }
