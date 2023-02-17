import { Box, Button, Checkbox, Group, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import React from 'react'

function CreateHusq() {

  const form = useForm({
    initialValues:{
      inputtext:''
    },
    validate: {
      inputtext:(value) => (/^[\s\w!@#$%^&*()-+=\[\]{};:'"\\|,.<>/?]{3,100}$/.test(value) ? null : 'Invalid Husqr')
    }

  })
  



  return (
    
    <Box sx={{ maxWidth: 300, borderStyle:'solid 10px #00FFBF' }} mx="auto" >
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          withAsterisk
          label="Husq input"
          placeholder="Your Husq"
          {...form.getInputProps('inputtext')}
        />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
        
  )
}

export default CreateHusq