import { useParams,useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import {Trash, Pencil} from "tabler-icons-react";
import { Paper,Title, Text, ActionIcon} from "@mantine/core";
import UpdateCategoryModal from "../components/UpdateCategoryModal"
// import { apiBase } from "../utils/helper";
import { SessionContext } from "../contexts/SessionContext";


const CampaignDetailsPage = () => {
    const { categoryId } = useParams()
    const [category, setcategory] = useState({});
    const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [needRefresh, setNeedRefresh] = useState(false);
    const {apiWithToken} = useContext(SessionContext)

    const fetchCategory = async () => {
        const response = await apiWithToken(`categories/${categoryId}`)
        setcategory(response)
    }

    useEffect(() => {
      fetchCategory()
    }, [])
    
    useEffect(() => {
        if(needRefresh) {
          fetchCategory()
        setNeedRefresh(false)
        }
        
    }, [needRefresh])

    const deleteCategory = async () => {
        await fetch(`http://localhost:5005/api/categories/${categoryId}`, {method: "DELETE"})
       navigate('/categories')   
    }

    const handleDelete = () => {
      deleteCategory()
    }
    return (<>
  
      <>
    <Paper shadow="md" radius="xs" p="xl"  margin="0"
    sx={{
        // width:'50%',
        marginLeft: '50%'
    }}>
      <Title order={2}>{category.kind}</Title>
        {category.campaigns?.map(category => (
          <Text key={category._id}>{category.kind}</Text>
        ))}
        <ActionIcon onClick={() => setIsModalOpen(true)}>
          <Pencil size={48} strokeWidth={2} color={'#40a9bf'} />
        </ActionIcon>
        <ActionIcon onClick={handleDelete}>
          <Trash size={48} strokeWidth={2} color={'#bf4040'} />
        </ActionIcon>
    </Paper>
    <UpdateCategoryModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} campaignId={categoryId} category={category} setNeedRefresh={setNeedRefresh} />
    </>

    
    </>) ;
}
 
export default CampaignDetailsPage;