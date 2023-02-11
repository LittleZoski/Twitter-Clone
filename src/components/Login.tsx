import { Login } from '@/queries/register.queries';
import { Box, Button, Checkbox, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import React from 'react'

function Register() {
    
    const form = useForm({
        initialValues: {
          username: '',
          password: ''
          
        },
    
        validate: {
          username: (value) => (/^[0-9a-zA-Z]{1,12}$/.test(value) ? null : 'Invalid username'),
          password: (value) => (/^[0-9a-zA-Z]{1,12}$/.test(value) ? null : 'Invalid password')
        },
      });
    
      return (
        <Box sx={{ maxWidth: 300 }} mx="auto">
          <form onSubmit={form.onSubmit((values) => {console.log(values);Login(values)})}>
            <TextInput
              withAsterisk
              label="username"
              placeholder="username"
              {...form.getInputProps('username')}
            />
            
            <TextInput
              withAsterisk
              label="password"
              placeholder="password"
              {...form.getInputProps('password')}
            />
    
            <Group position="right" mt="md">
              <Button type="submit">Submit</Button>
            </Group>
          </form>
        </Box>
      );
}

export default Register