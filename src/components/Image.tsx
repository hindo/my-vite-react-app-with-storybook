import React from 'react'

type ImageProps = {
  source: string
  alt: string
}

export const Image = ({ source, alt }: ImageProps) => (
  <img className='overflow-hidden rounded-lg' loading='lazy' src={source} alt={alt} title={alt} />
)
