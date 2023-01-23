import React from 'react'

export default function HeadingThree({children, ...rest}) {
  return (
    <h3 {...rest}  className="mb-4">
        <span className='bi-heading-3'>
            <strong>
                {children}
            </strong>
        </span>
    </h3>
  )
}
