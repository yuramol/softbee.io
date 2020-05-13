import React from "react"
import { Grommet as GrommetIcon } from "grommet-icons"
import {Anchor, Box, Footer, Text, Image } from "grommet"
import SoftBeeLogo from "./logo.svg"


const items = [
    { label: "Work", href: "#" },
    { label: "Our Team", href: "#" },
    { label: "Contacts", href: "#" },
  ];

const FooterContent = () => {
  return (
    <Box
     direction="row"
      pad="small"
      gap="medium"
      style={{
        marginLeft: "5%",
        marginRight: "5%",
      }}
    >
      <Box  gap="small" align='left'>
        <Image src={SoftBeeLogo} alt="SoftBee"/>         
        {items.map(item => (
          <Anchor 
          style={{            
            fontSize: '18px',                      
            color: '#FFFFFF'}}
            href={item.href} label={item.label} key={item.label} />
        ))}
      </Box>
      <Box gap="small" align='center'
      style={{
          margin: 'auto',

      }}>
        <Text size="xxlarge">Message us anything</Text>
        <Text size="medium">Your message will be posted in one of our Slack channels.</Text>
        <Text size="small">Let’s create something dope!!! Xoxo</Text>
      </Box>
    </Box>
  )
}

const DoubleFooter = () => {
  return (
    <Footer background="#104065" pad="large">
      <FooterContent />
    </Footer>
  )
}

export default DoubleFooter
