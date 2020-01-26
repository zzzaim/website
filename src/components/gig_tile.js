import React from "react"
import { Link } from "gatsby"
import {
  CardFooter,
  CardFooterItem,
  CardImage,
  CardContent,
  Image,
  Tile,
  Title,
  Content,
} from "bloomer"

const FiverFooter = ({ pricing }) => (
  <CardFooter>
    <CardFooterItem>{pricing}</CardFooterItem>
    <CardFooterItem hasTextColor="success" href="href://fiverr.com">
      Order on Fiverr
    </CardFooterItem>
  </CardFooter>
)

const CustomFooter = () => (
  <CardFooter>
    <Link className="card-footer-item has-text-success" to="/contact/">
      Contact me for details
    </Link>
  </CardFooter>
)

export default ({ title, description, pricing, fiverr }) => (
  <Tile isParent>
    <Tile isChild className="card">
      <CardImage>
        <Image isRatio="16:9" />
      </CardImage>
      <CardContent>
        <Title isSize={4}>{title}</Title>
        <Content isSize="medium">{description}</Content>
      </CardContent>
      {fiverr === false ? <CustomFooter /> : <FiverFooter pricing={pricing} />}
    </Tile>
  </Tile>
)
