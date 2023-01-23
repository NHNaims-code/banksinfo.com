import React from 'react'

export default function HeadingTwo({children, ...rest}) {
  return (
    <h2 {...rest}  className="mb-4">
        <span className='bi-heading-2'>
            <strong>
                {children}
            </strong>
        </span>
    </h2>
  )
}
