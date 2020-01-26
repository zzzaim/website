import React from 'react'

export default ({ title, description, pricing }) => (
  <div className="tile is-parent">
    <div className="tile is-child card">
      <div className="card-image">
        <figure className="image is-16by9"></figure>
      </div>
      <div className="card-content">
        <h4 className="title is-4">{title}</h4>
        <div className="content is-medium">{description}</div>
      </div>
      <footer className="card-footer">
        <span className="card-footer-item">
          {pricing}
        </span>
        <a className="card-footer-item has-text-success" href="href://fiverr.com">
          Order on Fiverr
        </a>
      </footer>
    </div>
  </div>
)
