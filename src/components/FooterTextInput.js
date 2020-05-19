import React from "react"
import { Form, FormField, Text, TextInput} from "grommet"

const SiteHeader = () => {
  return (
    <Form onSubmit={({ value }) => {}}>
      <FormField name="name" htmlfor="textinput-id">
        <TextInput 
        id="textinput-id" 
        name="name" 
        placeholder="Let’s create somethign dope!!! Xoxo"      
        />
      </FormField>
    </Form>
  )
}

export default SiteHeader
