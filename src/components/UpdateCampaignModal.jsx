import { Modal, InputWrapper, Input, NumberInput, Button} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useEffect } from 'react';

const UpdateCampaignModal = ({isModalOpen, setIsModalOpen, campaignId, campaign, setNeedRefresh }) => {
  
    const form = useForm({
        initialValues: {
            image: '',
            title: "",
            description: '',
            place: '',
            campaignType: '',
            totalAmount: '10',
        }
    })
    useEffect(() => {
      form.setValues({
            image: campaign.image,
            title: campaign.title,
            description: campaign.description,
            place: campaign.place,
            campaignType: campaign.campaignType,
            totalAmount: campaign.totalAmount,
      })
    }, [campaign])

    const updateCampaign = async (newValues) => {
       await fetch(`http://localhost:5005/api/campaigns/${campaignId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newValues),
        })
        
        // console.log(parsed) it didn't log the message, it logged [[Prototype]]: Object !!
        setNeedRefresh(true)
    }
    const handleSubmit = values => {
        updateCampaign(values)
        setIsModalOpen(false)
    }
    
    return (
    <Modal
        opened={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Update campaign!"
      >
      <form onSubmit={form.onSubmit(handleSubmit)}>
      <InputWrapper 
         required 
         label="Image" 
         description="Please upload your an image"
         >
         <Input { ...form.getInputProps('image')}/>
       </InputWrapper>
       <InputWrapper 
         required 
         label="Title" 
         description="Please enter your campaign's title"
         >
         <Input { ...form.getInputProps('title')}/>
       </InputWrapper>
       <InputWrapper 
         required 
         label="Description" 
         description="Please enter your campaign's description"
         >
         <Input { ...form.getInputProps('description')}/>
       </InputWrapper>
       <InputWrapper 
         required 
         label="Place" 
         description="Please enter your campaign's place"
         >
         <Input { ...form.getInputProps('place')}/>
       </InputWrapper>
       <InputWrapper 
         required 
         label="Category" 
         description="Please enter your campaign's Category"
         >
         <Input { ...form.getInputProps('campaignType')}/>
       </InputWrapper>
       <InputWrapper 
         required 
         label="Total amount" 
         description="Please enter your campaign's Category"
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
       <Button type='submit'>Update</Button>
      </form>
    </Modal>
    );
}
 
export default UpdateCampaignModal;