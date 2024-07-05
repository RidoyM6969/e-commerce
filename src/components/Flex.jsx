import React from 'react'

const Flex = ({children , className}) => {
  return (
    <div>
      <div className={`flex flex-wrap ${className}`}>{children}</div>
    </div>
  )
}

export default Flex
