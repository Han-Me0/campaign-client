import { Modal, InputWrapper, Input, NumberInput, Button} from '@mantine/core';
import { useForm } from '@mantine/form';

const NewCampaignModal = ({isModalOpen, setisModalOpen}) => {

    const createCampaign = async newCampaign => {
        const response = await fetch('http://localhost:5005/api/campaigns', {
        method: 'POST',
        headers: {
          'Content=Type': 'application/json',
        },
        body: JSON.stringify(newCampaign),
        })
        const parsed = await response.json()
        console.log(parsed)
    }
    const handleSubmit = values => {
        createCampaign(values)
    }
    const form = useForm({
        initialValues: {
            title: '',
            description: '',
            place: '',
            campaignType: '',
            totalAmount: '100',
        }
    })
    return (
    <Modal
        opened={isModalOpen}
        onClose={() => setisModalOpen(false)}
        title="Add a new campaign!"
      >
      <form onSubmit={form.onSubmit(handleSubmit)}>
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
         equired 
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
         <NumberInput min='0' precision={2} />
       </InputWrapper>
       <Button type='submit'>New Campaign</Button>
      </form>
    </Modal>
    );
}
 
export default NewCampaignModal;