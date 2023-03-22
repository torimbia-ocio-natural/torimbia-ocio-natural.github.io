import React, { useState } from 'react';
import Clickable from './Clickable'

const Collapsible = ({ title, children }) => {
  const [isExpanded, setExpanded] = useState(false)

  return (
    <div>
      <Clickable onClick={() => setExpanded(!isExpanded)}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <span style={{ flexGrow: 1 }}>
            {title}
          </span>
          {
            isExpanded
              ? <span className="icon solid fa-angle-left"></span>
              : <span className="icon solid fa-angle-down"></span>
          }
        </div>
      </Clickable>
      {isExpanded && children}
    </div>
  )

}

export default Collapsible