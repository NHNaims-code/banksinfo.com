import Image from 'next/image'
import React from 'react'

export default function ResponsiveImage({imgObj, ...rest}) {
  return (
    <figure style={{padding: '0 15px'}}>
        <Image 
            src={imgObj?.img}
            alt={imgObj?.alt}
            title={imgObj?.title}
            width="100%" 
            height="100%" 
            layout="responsive" 
            objectFit="contain"
            {...rest}
        />
    </figure>
  )
}
