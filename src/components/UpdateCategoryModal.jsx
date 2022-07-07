import { Modal, InputWrapper, Input, MultiSelect, Button} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useEffect, useContext } from 'react';
import { CampaignsContext } from '../contexts/CampaignsContext'

const UpdateCategoryModal = ({isModalOpen, setIsModalOpen, categoryId, category, setNeedRefresh }) => {
  const { campaigns } = useContext(CampaignsContext)
    const form = useForm({
        initialValues: {
            kind: '',
            campaigns: []
        }
    })
    useEffect(() => {
      form.setValues({
        kind: category.kind,
        campaigns: category.campaigns?.map(campaign => campaign._id)
      })
    }, [category])

    const updateCategory = async (newValues) => {
       await fetch(`http://localhost:5005/api/categories/${categoryId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newValues),
        })
        
        // console.log(parsed) it didn't log the message, it logged [[Prototype]]: Object !!
        setNeedRefresh(true)
        setIsModalOpen(false)
    }
    const handleSubmit = values => {
        updateCategory(values)
    }
    
    return (
      <Modal opened={isModalOpen} onClose={() => setIsModalOpen(false)} title='Update category'>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <InputWrapper required label='Kind' description='The kind of the category'>
          <Input {...form.getInputProps('kind')} />
        </InputWrapper>
        <MultiSelect
          data={campaigns.map(campaign => ({ value: campaign._id, label: campaign.kind }))}
          label='The campaigns you can add in this category'
          {...form.getInputProps('campaigns')}
        />
        <Button type='submit'>Update</Button>
      </form>
    </Modal>
    );
}
 
export default UpdateCategoryModal;