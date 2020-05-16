import React from "react"
import { Box, Header, Button } from "grommet"

const linkItems = ["Work", "Our team", "Blog"]

const SiteHeader = () => {
  return (
    <Header justify="end" pad="medium">
      <Box direction="row" gap="medium" margin="small" align="center">
      {linkItems.map(props => (
        <Button plain label={props} onClick={() => {}} href="/" margin="medium" />        
      ))}
        <Box justify="center" align="center" height="60px" width="200px">
          <Button label="Let’s talk 👋" fill color="yellow" />
        </Box>
      </Box>
    </Header>
  )
}

export default SiteHeader
