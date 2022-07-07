import { Modal, InputWrapper, Input, Button,MultiSelect} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom' 
import { CampaignsContext } from '../contexts/CampaignsContext';

const NewCategoryModal = ({isModalOpen, setIsModalOpen}) => {
    const navigate = useNavigate()
    const {campaigns} = useContext(CampaignsContext)
    const form = useForm({
        initialValues: {
            kind: '',
            campaigns:[]
        }
    })

    const createCategory = async newCategory => {
        const response = await fetch('http://localhost:5005/api/categories', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newCategory),
        })
        const parsed = await response.json()
        navigate(`/bars/${parsed.id}`)
    }  
    
    const handleSubmit = values => {
        createCategory(values)
    }
    
    return (
      <Modal opened={isModalOpen} onClose={() => setIsModalOpen(false)} title='Add a new category'>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <InputWrapper required label='Kind' description='The kind of the new category'>
          <Input {...form.getInputProps('kind')} />
        </InputWrapper>
        <MultiSelect
          data={campaigns.map(campaign => ({ value: campaign._id, label: campaign.title }))}
          label='The campaigns you can add in this category'
          {...form.getInputProps('campaigns')}
        />
        <Button type='submit'>Create</Button>
      </form>
    </Modal>
    );
}
 
export default NewCategoryModal;