import React from 'react'
import Helmet from 'react-helmet'
import CenterDiv from '../components/center_div'
import GigTile from '../components/gig_tile'
import SocialLink from '../components/social_link'
import avatar from '../images/avatar.jpg'
import index from './index.json'

import '../styles/index.sass'

const Section = ({ title, children }) => (
  <section className="section">
    <div className="container">
      <div className="tile is-ancestor">
        <div className="tile is-parent is-2">
          <div className="tile is-child is-shadowless box">
            <h4 className="title is-4 has-text-grey has-text-centered-mobile">
              {title}
            </h4>
          </div>
        </div>
        {children}
      </div>
    </div>
  </section>
)

export default () => (
  <React.Fragment>
    <header className="hero is-medium">
      <Helmet>
        <title>zzzaim portfolio website</title>
      </Helmet>
      <div className="hero-body">
        <div className="container">
          <CenterDiv size="2 is-hidden-mobile">
            <figure className="image is-square">
              <img className="is-rounded" src={avatar} alt="avatar" />
            </figure>
          </CenterDiv>
          <div className="has-text-centered">
            <h1 className="title">Zaim Bakar</h1>
            <h2 className="subtitle">freelancer programmer designer</h2>
            {index.socials.map(props => <SocialLink key={props.site} {...props} />)}
          </div>
        </div>
      </div>
    </header>

    <Section title="Services">
      {index.gigs.map((props, i) => <GigTile key={i} {...props} />)}
    </Section>

    <Section title="Resume" />
  </React.Fragment>
)
