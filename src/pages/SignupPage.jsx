import { InputWrapper, Input, PasswordInput, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useNavigate } from 'react-router-dom'
import { signup } from '../utils/helper';

const SignupPage = () => {
  const navigate = useNavigate()
  const form = useForm({
    initialValues: {
        username: '',
        password: '',
    }
})

const createUser = async newUser => {
    console.log('HIIIIER',newUser)
    try {
        const response = await signup(newUser)

      if(response.status === 'KO') {
          throw new Error(response.message)
      }
      navigate('/login')

    } catch (error) {
        console.log(error)
        form.setErrors({ username: error.message })
    }   
}
const handleSubmit = values => {
    createUser(values)
}
    return ( 
    <form onSubmit={form.onSubmit(handleSubmit)}>
    <InputWrapper 
         required 
         label="Name" 
         description="Please enter your name" 
         {...form.getInputProps('username')}
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
       <Button sx={{margin:'20px', width:'10%'}} type='submit'>Register</Button>
    </form>
     );
}
 
export default SignupPage;