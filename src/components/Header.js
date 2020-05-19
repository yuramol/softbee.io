import React from "react"
import { Box, Header, Button } from "grommet"

const linkItems = [
  {label:"Work",
    link:"/work"},
    {label:"Our team",
    link:"/our-team"},
    {label:"Blog",
    link:"/blog"},
  ]

const SiteHeader = () => {
  return (
    <Header justify="end" pad="medium">
      <Box direction="row" gap="medium" margin="medium" align="center">
        {linkItems.map(props => (
          <Button
            plain
            label={props.label}
            onClick={() => {}}
            href={props.link}
            margin="medium"
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
            }}
          />
        ))}
        <Box justify="center" align="center" height="60px" width="200px">
          <Button label="Let’s talk 👋" fill color="yellow" />
        </Box>
      </Box>
    </Header>
  )
}

export default SiteHeader
