import React from 'react'

export default function HeadingTwo({children, size=14, bold=true, ...rest}) {
  return (
    <h2 {...rest}  className="mb-4">
        <span style={{fontSize: `${size}pt`}}>
            {bold?<strong>
                {children}
            </strong>: children}
        </span>
    </h2>
  )
}
