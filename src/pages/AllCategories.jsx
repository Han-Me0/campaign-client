import { Box, ActionIcon } from "@mantine/core";
import { useContext, useState, useEffect } from "react"
import CategoryCard from "../components/CategoryCard"
import { Plus } from "tabler-icons-react";
import NewCategoryModal from "../components/NewCategoryModal";
import { CampaignsContext } from "../contexts/CampaignsContext";
import { SessionContext } from '../contexts/SessionContext'

const AllCategories = () => {
const { apiWithToken } = useContext(CampaignsContext)
const [categories, setCategories] = useState([]);
const [isModalOpen, setisModalOpen] = useState(false);

const fetchData = async () => {
  const response = await apiWithToken('categories')
  setCategories(response)
}

useEffect(() => {
  fetchData()
}, [])

    return ( 
        <>
        <Box sx={{ 
            display: "grid",
            gridTemplate: '1fr / 1fr 1fr',
            gridAutoRows: '1fr',
            gap: '25px',
            margin: '30px',
          }}>
            {categories.map(category => (
              <CategoryCard key={category._id} category={category}/>
            ))}
            <ActionIcon variant="filled" size="xl" onClick={() => setisModalOpen(true) }>
            <Plus
              size={48}
              strokeWidth={2}
              color={'#79d292'}
            />
            </ActionIcon>
        </Box>
        <NewCategoryModal isModalOpen={isModalOpen} setisModalOpen={setisModalOpen} />
      </>
     );
}
 
export default AllCategories;