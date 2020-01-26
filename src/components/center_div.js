import React from 'react'

export default props => (
  <div className="columns is-centered">
    <div className={`column is-${props.size}`}>
      { props.children }
    </div>
  </div>
)
