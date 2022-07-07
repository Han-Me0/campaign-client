import { Box } from "@mantine/core";
import { useContext, useState, useEffect } from "react"
import CategoryCard from "../components/CategoryCard"
import NewCategoryModal from "../components/NewCategoryModal"
import { SessionContext } from '../contexts//SessionContext'
import AddButton from "../components/AddButton"

const AllCategories = () => {
const { apiWithToken } = useContext(SessionContext)
const [categories, setCategories] = useState([]);
const [isModalOpen, setIsModalOpen] = useState(false);

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
           
        </Box>
        <AddButton setIsModalOpen={setIsModalOpen} />
        <NewCategoryModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </>
     );
}
 
export default AllCategories;