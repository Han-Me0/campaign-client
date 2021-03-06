import { useParams,useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import {Trash, Pencil} from "tabler-icons-react";
import { Paper,Title, Text,Image, ActionIcon} from "@mantine/core";
import UpdateCampaignModal from "../components/UpdateCampaignModal"
// import { apiBase } from "../utils/helper";
import { SessionContext } from "../contexts/SessionContext";


const CampaignDetailsPage = () => {
    const { campaignId } = useParams()
    const [campaign, setCampaign] = useState({});
    const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [needRefresh, setNeedRefresh] = useState(false);
    const {apiWithToken} = useContext(SessionContext)

    const fetchCampaign = async () => {
        const response = await apiWithToken(`campaigns/${campaignId}`)
        setCampaign(response)
    }

    useEffect(() => {
        fetchCampaign()
    }, [])
    
    useEffect(() => {
        if(needRefresh) {
        fetchCampaign()
        setNeedRefresh(false)
        }
        
    }, [needRefresh])

    const deleteCampaign = async () => {
        await fetch(`http://localhost:5005/api/campaigns/${campaignId}`, {method: "DELETE"})
       navigate('/campaigns')   
    }

    const handleDelete = () => {
        deleteCampaign()
    }
    return (<>
    <Image
        radius="md"
        src={campaign.image}
        alt="image"
      />
      <>
    <Paper shadow="md" radius="xs" p="xl"  margin="0"
    sx={{
        width:'100%',
        // marginLeft: '50%'
    }}>
      <Title>
         {campaign.title}
      </Title>
      <Text size="xl" 
      style={{ marginTop: 30 }}>
         {campaign.description}
      </Text>
      <Text size="md" 
      style={{ marginTop: 30 }}>
         Place: {campaign.place}
      </Text>
      <Text size="md" 
      style={{ marginTop: 30 }}>
         Category: {campaign.campaignType}
      </Text>
      <Text size="md" 
      style={{ marginTop: 30 }}>
         Total amount: {campaign.totalAmount} $
      </Text>
      <ActionIcon style={{ marginTop: 30 }} onClick={() => setIsModalOpen(true)}>
      <Pencil
        size={48}
        strokeWidth={2}
        color={'#40a9bf'}
      />
      </ActionIcon>
      <ActionIcon style={{ marginTop: 10 }} onClick={handleDelete}>
      <Trash
        size={48}
        strokeWidth={2}
        color={'#bf4040'}
      />
      </ActionIcon>
    </Paper>
    <UpdateCampaignModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} campaignId={campaignId} campaign={campaign} setNeedRefresh={setNeedRefresh} />
    </>

    
    </>) ;
}
 
export default CampaignDetailsPage;