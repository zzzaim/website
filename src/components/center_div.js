import React from "react"
import { Columns, Column, withHelpersModifiers } from "bloomer"

const CenterDiv = props => (
  <Columns isCentered>
    <Column {...props}>{props.children}</Column>
  </Columns>
)

export default withHelpersModifiers(CenterDiv)
