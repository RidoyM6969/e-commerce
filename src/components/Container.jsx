import React from 'react'

const Container = ({children}) => {
  return (
    <div>
      <div className={`container mx-auto`}>{children}</div>
    </div>
  )
}

export default Container
