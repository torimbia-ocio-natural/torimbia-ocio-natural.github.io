import React from 'react'

const Clickable = ({ children, onClick }) => (
  <span style={{ cursor: "pointer" }} onClick={onClick}>
    {children}
  </span>
)

export default Clickable