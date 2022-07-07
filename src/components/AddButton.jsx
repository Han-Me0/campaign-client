import { ActionIcon } from '@mantine/core'
import { Plus } from 'tabler-icons-react'

const AddButton = ({ setIsModalOpen }) => {
  return (
    <ActionIcon
      variant="filled" size="xl" onClick={() => setIsModalOpen(true) }
    >
      <Plus size={48}
            strokeWidth={2}
            color={'#79d292'}/>
    </ActionIcon>
  )
}

export default AddButton