import React from "react"
import Helmet from "react-helmet"
import {
  Section,
  Hero,
  HeroBody,
  Container,
  Tile,
  Title,
  Subtitle,
} from "bloomer"
import CenterDiv from "../components/center_div"
import GigTile from "../components/gig_tile"
import SocialLink from "../components/social_link"
import avatar from "../images/avatar.jpg"
import index from "./index.json"

import "../styles/index.sass"

const Part = ({ title, children }) => (
  <Section className="section">
    <Container className="container">
      <Tile isAncestor>
        <Tile isParent isSize={2}>
          <Tile isChild className="is-shadowless box">
            <Title
              isSize={4}
              hasTextColor="grey"
              className="has-text-centered-mobile"
            >
              {title}
            </Title>
          </Tile>
        </Tile>
        {children}
      </Tile>
    </Container>
  </Section>
)

export default () => (
  <React.Fragment>
    <Helmet>
      <title>zzzaim portfolio website</title>
    </Helmet>

    <Hero isSize="medium">
      <HeroBody>
        <Container>
          <CenterDiv isSize={2} isHidden="mobile">
            <figure className="image is-square">
              <img className="is-rounded" src={avatar} alt="avatar" />
            </figure>
          </CenterDiv>
          <div className="has-text-centered">
            <Title>Zaim Bakar</Title>
            <Subtitle>freelancer programmer designer</Subtitle>
            {index.socials.map(props => (
              <SocialLink key={props.site} {...props} />
            ))}
          </div>
        </Container>
      </HeroBody>
    </Hero>

    <Part title="Services">
      {index.gigs.map((props, i) => (
        <GigTile key={i} {...props} />
      ))}
    </Part>

    <Part title="Resume" />
  </React.Fragment>
)
