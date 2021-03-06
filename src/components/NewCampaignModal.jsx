import { Modal, InputWrapper, Input, NumberInput, Button} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom' 
import { SessionContext } from '../contexts/SessionContext';

const NewCampaignModal = ({isModalOpen, setIsModalOpen}) => {
    const navigate = useNavigate()
    const {apiWithToken} = useContext(SessionContext)
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
      console.log("",newCampaign)
        const response = await apiWithToken('campaigns','POST', newCampaign)
        navigate(`/campaigns/${response.id}`)
    }  
    const handleSubmit = values => {
        createCampaign(values)
    }
    
    return (
    <Modal
        opened={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add a new campaign!"
      >
      <form onSubmit={form.onSubmit(handleSubmit)}>
      <InputWrapper 
         label="Image" 
         description="Please upload an image" 
         >
         <Input { ...form.getInputProps('image')} />
       </InputWrapper>
       <InputWrapper 
         required 
         label="Title" 
         description="Please enter your campaign's title" 
         >
         <Input { ...form.getInputProps('title')} />
       </InputWrapper>
       <InputWrapper 
         required 
         label="Description" 
         description="Please enter your campaign's description"
         >
         <Input { ...form.getInputProps('description')} />
       </InputWrapper>
       <InputWrapper  
         label="Place" 
         description="Please enter your campaign's place"
         >
         <Input { ...form.getInputProps('place')} />
       </InputWrapper>
       <InputWrapper 
         required 
         label="Category" 
         description="Please enter your campaign's Category"
         >
         <Input { ...form.getInputProps('campaignType')} />
       </InputWrapper>
       <InputWrapper 
         required 
         label="Total amount" 
         description="Please enter your campaign's Category"
         { ...form.getInputProps('totalAmount')}
         >
         <NumberInput min='0'
          label="Price"
          defaultValue={1000}
          parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
          formatter={(value) =>
            !Number.isNaN(parseFloat(value))
          ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          : '$ '
          }
          { ...form.getInputProps('totalAmount')} />
       </InputWrapper>
       <Button type='submit'>Create</Button>
      </form>
    </Modal>
    );
}
 
export default NewCampaignModal;