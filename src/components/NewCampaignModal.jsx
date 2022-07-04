import { Modal, InputWrapper, Input, NumberInput, Button} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useNavigate } from 'react-router-dom' 

const NewCampaignModal = ({isModalOpen, setisModalOpen}) => {
    const Navigate = useNavigate()
    const form = useForm({
        initialValues: {
            image: '',
            title: '',
            description: '',
            place: '',
            campaignType: '',
            totalAmount: '10',
        }
    })

    const createCampaign = async newCampaign => {
        const response = await fetch('http://localhost:5005/api/campaigns', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCampaign),
        })
        const parsed = await response.json()
        // console.log(parsed) it didn't log the message, it logged [[Prototype]]: Object !!
        Navigate(`/campaigns/${parsed.id}`)
    }
    const handleSubmit = values => {
        createCampaign(values)
    }
    
    return (
    <Modal
        opened={isModalOpen}
        onClose={() => setisModalOpen(false)}
        title="Add a new campaign!"
      >
      <form onSubmit={form.onSubmit(handleSubmit)}>
      <InputWrapper 
         required 
         label="Image" 
         description="Please upload your an image" 
         { ...form.getInputProps('image')}
         >
         <Input />
       </InputWrapper>
       <InputWrapper 
         required 
         label="Title" 
         description="Please enter your campaign's title" 
         { ...form.getInputProps('title')}
         >
         <Input />
       </InputWrapper>
       <InputWrapper 
         required 
         label="Description" 
         description="Please enter your campaign's description"
         { ...form.getInputProps('description')}
         >
         <Input />
       </InputWrapper>
       <InputWrapper 
         required 
         label="Place" 
         description="Please enter your campaign's place"
         { ...form.getInputProps('place')}
         >
         <Input />
       </InputWrapper>
       <InputWrapper 
         required 
         label="Category" 
         description="Please enter your campaign's Category"
         { ...form.getInputProps('campaignType')}
         >
         <Input />
       </InputWrapper>
       <InputWrapper 
         required 
         label="Total amount" 
         description="Please enter your campaign's Category"
         { ...form.getInputProps('totalAmount')}
         >
         <NumberInput min='0'/>
       </InputWrapper>
       <Button type='submit'>Create</Button>
      </form>
    </Modal>
    );
}
 
export default NewCampaignModal;