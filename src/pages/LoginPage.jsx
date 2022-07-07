import { Button, Input, InputWrapper, PasswordInput, Box, Title } from '@mantine/core'
import { useForm } from '@mantine/hooks'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { SessionContext } from '../contexts/SessionContext'
import { login } from '../utils/helper'

const LoginPage = () => {
    const navigate = useNavigate()
   const {authenticateUser} = useContext(SessionContext)
  const form = useForm({
    initialValues: {
        username: '',
        password: '',
    }
})

const logUser = async (credentials) => {
  try {
   const response = await login(credentials) 
   console.log(response)
   if(response.status === 'KO') {
       throw new Error(response.message)
   } else {
    authenticateUser(response.token)
   }
   navigate('/campaigns')
  } catch (error) {
    console.log(error)
} 
}


const handleSubmit = values => {
    logUser(values)
}

    return (
        <Box>
      <Title>Login</Title>
        <form onSubmit={form.onSubmit(handleSubmit)}>
    <InputWrapper 
         required 
         label="Name" 
         description="Please enter your name" 
         { ...form.getInputProps('username')}
         >
         <Input { ...form.getInputProps('username')} />
       </InputWrapper>
       <InputWrapper 
         required 
         label="Password" 
         description="Please enter your password" 
         >
         <PasswordInput { ...form.getInputProps('password')} />
       </InputWrapper>
       <Button sx={{margin:'20px', width:'10%'}} type='submit'>Login</Button>
    </form>
    </Box>
    )
 
 }
 
export default LoginPage