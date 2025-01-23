import React, { FC } from 'react'

const Content: FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div style={{ maxWidth: 1300, margin: '20px auto', padding: 10 }}>{children}</div>
  )
}

export default Content