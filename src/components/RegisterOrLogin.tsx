
import { Box, Button, Checkbox, Group, TextInput } from '@mantine/core';
import Link from 'next/link';
import React from 'react'
import { useForm } from '@mantine/form'
import { useAuth } from '@/context/AuthProvider';
import { useRouter } from 'next/router';

function RegisterOrLogin() {
    
    const {login, register} = useAuth()
    const router = useRouter()

    const form = useForm({
        initialValues: {
          username: '',
          name:'',
          password:'',
          workspace:'',
          termsOfService: false
          
        },
    
        validate: {
          username: (value) => (/^[0-9a-zA-Z]{1,12}$/.test(value) ? null : 'Invalid username'),
          name: (value) => (/^[0-9a-zA-Z]{1,12}$/.test(value) ? null : 'Invalid name'),
          password: (value) => (/^[0-9a-zA-Z]{1,12}$/.test(value) ? null : 'Invalid password'),
          // workspace: (value) => (/^[0-9a-zA-Z]{1,12}$/.test(value) ? null : 'Invalid username'),
        },
      });

      const handleRegister = (username:string, name:string, password:string)=>{
        register(username,name,password)
      }

      const handleLogin = (username:string, password:string)=>{
        login(username, password)
        router.push('/husqr')

      }
    
      return (
        <Box sx={{ maxWidth: 300 }} mx="auto">
          <form >
            <TextInput
              withAsterisk
              label="username"
              placeholder="username"
              {...form.getInputProps('username')}
            />
            <TextInput
              withAsterisk
              label="name"
              placeholder="name"
              {...form.getInputProps('name')}
            />
            <TextInput
              withAsterisk
              label="password"
              placeholder="password"
              {...form.getInputProps('password')}
            />
            
    
            <Checkbox
              mt="md"
              label="I agree to sell my privacy"
              {...form.getInputProps('termsOfService', { type: 'checkbox' })}
            />
    
            <Group position="right" mt="md">
              <Button type="button" onClick={(event)=> handleRegister(form.values.username,form.values.name, form.values.password)}>Register</Button>
            </Group>

            <Group position="right" mt="md">
              <Button onClick={(event)=> handleLogin(form.values.username,form.values.password)}>login</Button>
            </Group>
          </form>
        </Box>
      );
}

export default RegisterOrLogin